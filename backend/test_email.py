import os
import sys
from pathlib import Path

# Add the backend directory to the Python path
backend_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(backend_dir))

# Load environment variables
from dotenv import load_dotenv
load_dotenv()

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

from django.core.mail import send_mail
from django.conf import settings

print("=" * 60)
print("Testing LawBOX Email Configuration")
print("=" * 60)
print(f"Email Backend: {settings.EMAIL_BACKEND}")
print(f"Email Host: {settings.EMAIL_HOST}")
print(f"Email Port: {settings.EMAIL_PORT}")
print(f"Email TLS: {settings.EMAIL_USE_TLS}")
print(f"Email User: {settings.EMAIL_HOST_USER}")
print(f"Email Password: {'*' * len(settings.EMAIL_HOST_PASSWORD) if settings.EMAIL_HOST_PASSWORD else 'NOT SET'}")
print(f"Default From: {settings.DEFAULT_FROM_EMAIL}")
print(f"Recipient: {settings.EMAIL_RECIPIENT}")
print("=" * 60)

if not settings.EMAIL_HOST_USER:
    print("\n✗ ERROR: EMAIL_HOST_USER is not set!")
    print("Make sure your .env file exists and contains EMAIL_HOST_USER")
    sys.exit(1)

if not settings.EMAIL_HOST_PASSWORD:
    print("\n✗ ERROR: EMAIL_HOST_PASSWORD is not set!")
    print("Make sure your .env file exists and contains EMAIL_HOST_PASSWORD")
    sys.exit(1)

if not settings.EMAIL_RECIPIENT:
    print("\n✗ ERROR: EMAIL_RECIPIENT is not set!")
    print("Make sure your .env file exists and contains EMAIL_RECIPIENT")
    sys.exit(1)

print("\nAttempting to send test email...")

try:
    result = send_mail(
        subject='LawBOX Email Test - ' + str(django.utils.timezone.now()),
        message='This is a test email from the LawBOX contact form system.\n\nIf you receive this, the email configuration is working correctly!',
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.EMAIL_RECIPIENT],
        fail_silently=False,
    )
    print(f"\n✓ Email sent successfully! (Result: {result})")
    print(f"✓ Email should arrive at: {settings.EMAIL_RECIPIENT}")
except Exception as e:
    print(f"\n✗ Error sending email: {e}")
    import traceback
    traceback.print_exc()

