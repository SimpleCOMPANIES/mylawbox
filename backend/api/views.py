from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status


@api_view(['GET'])
def hello_world(request):
    """
    Simple API endpoint that returns a greeting message.
    """
    return Response({
        'message': 'Hello from Django!',
        'status': 'success'
    })


@api_view(['POST'])
def contact_form(request):
    """
    Handle contact form submissions and send email notifications.
    """
    try:
        # Extract form data
        firm_name = request.data.get('firmName', '')
        contact_name = request.data.get('contactName', '')
        email = request.data.get('email', '')
        phone = request.data.get('phone', '')
        case_volume = request.data.get('caseVolume', '')
        message = request.data.get('message', '')

        # Validate required fields
        if not all([firm_name, contact_name, email, phone]):
            return Response(
                {'error': 'Missing required fields'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Compose email
        subject = f'New Contact Form Submission - {firm_name}'
        email_body = f"""
        New contact form submission from LawBox website:

        Firm Name: {firm_name}
        Contact Name: {contact_name}
        Email: {email}
        Phone: {phone}
        Monthly Case Volume: {case_volume if case_volume else 'Not specified'}

        Message:
        {message if message else 'No message provided'}

        ---
        This email was sent from the LawBox contact form.
        """

        # Send email
        send_mail(
            subject=subject,
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_RECIPIENT],
            fail_silently=False,
        )

        return Response({
            'message': 'Contact form submitted successfully',
            'status': 'success'
        })

    except Exception as e:
        return Response(
            {'error': f'Failed to send email: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
