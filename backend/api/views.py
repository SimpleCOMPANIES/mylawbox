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
    import logging
    logger = logging.getLogger(__name__)
    
    try:
        # Extract form data
        firm_name = request.data.get('firmName', '')
        contact_name = request.data.get('contactName', '')
        email = request.data.get('email', '')
        phone = request.data.get('phone', '')
        case_volume = request.data.get('caseVolume', '')
        message = request.data.get('message', '')

        logger.info(f"Contact form submission received from {email}")

        # Validate required fields
        if not all([firm_name, contact_name, email, phone]):
            logger.error("Missing required fields")
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

        # Debug logging
        logger.info(f"Attempting to send email from {settings.DEFAULT_FROM_EMAIL} to {settings.EMAIL_RECIPIENT}")
        logger.info(f"Email settings - Host: {settings.EMAIL_HOST}, Port: {settings.EMAIL_PORT}, TLS: {settings.EMAIL_USE_TLS}")
        
        # Check if email settings are configured
        if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
            logger.error("Email credentials not configured")
            return Response(
                {'error': 'Email not configured on server'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        # Send email
        try:
            from django.core.mail import get_connection
            from django.core.mail import EmailMessage
            
            # Create connection to test settings
            connection = get_connection(
                backend='django.core.mail.backends.smtp.EmailBackend',
                host=settings.EMAIL_HOST,
                port=settings.EMAIL_PORT,
                username=settings.EMAIL_HOST_USER,
                password=settings.EMAIL_HOST_PASSWORD,
                use_tls=settings.EMAIL_USE_TLS,
                fail_silently=False,
            )
            
            logger.info("Opening SMTP connection...")
            connection.open()
            
            logger.info("SMTP connection opened successfully")
            
            # Create and send email
            email_message = EmailMessage(
                subject=subject,
                body=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[settings.EMAIL_RECIPIENT],
                connection=connection,
            )
            
            logger.info(f"Sending email to {settings.EMAIL_RECIPIENT}...")
            result = email_message.send(fail_silently=False)
            
            connection.close()
            logger.info(f"Email send result: {result}")
            
            if result == 0:
                logger.error("send_mail returned 0 - email was not sent")
                return Response(
                    {'error': 'Email failed to send - SMTP returned 0'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            
        except Exception as email_error:
            logger.error(f"Exception during send_mail: {str(email_error)}")
            logger.error(f"Error type: {type(email_error).__name__}")
            import traceback
            logger.error(traceback.format_exc())
            raise

        return Response({
            'message': 'Contact form submitted successfully',
            'status': 'success',
            'email_sent': True
        })

    except Exception as e:
        logger.error(f"Error in contact_form: {str(e)}")
        import traceback
        logger.error(traceback.format_exc())
        return Response(
            {'error': f'Failed to send email: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
