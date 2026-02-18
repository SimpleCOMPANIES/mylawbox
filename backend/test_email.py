import os
import sys
from pathlib import Path

# Add the backend directory to the Python path
backend_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(backend_dir))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

from django.core.mail import send_mail
from django.conf import settings

print("Testing email configuration...")
print(f"Email Host: {settings.EMAIL_HOST}")
print(f"Email Port: {settings.EMAIL_PORT}")
print(f"Email User: {settings.EMAIL_HOST_USER}")
print(f"Recipient: {settings.EMAIL_RECIPIENT}")

try:
    send_mail(
        subject='LawBOX Email Test',
        message='This is a test email from the LawBOX contact form system.',
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.EMAIL_RECIPIENT],
        fail_silently=False,
    )
    print("\n✓ Email sent successfully!")
except Exception as e:
    print(f"\n✗ Error sending email: {e}")
