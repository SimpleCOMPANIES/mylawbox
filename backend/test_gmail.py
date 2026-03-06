import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Gmail SMTP settings
smtp_server = "smtp.gmail.com"
smtp_port = 587
sender_email = "mnsimpleciti@gmail.com"
password = "hscfdjwfztzzbjkj"
recipient_email = "info@getlawbox.com"

print(f"Testing Gmail SMTP connection...")
print(f"From: {sender_email}")
print(f"To: {recipient_email}")
print(f"Server: {smtp_server}:{smtp_port}")

try:
    # Create message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = "Test Email from LawBox Contact Form"
    
    body = "This is a test email to verify Gmail SMTP configuration."
    message.attach(MIMEText(body, "plain"))
    
    # Connect to Gmail SMTP server
    print("\nConnecting to Gmail SMTP server...")
    server = smtplib.SMTP(smtp_server, smtp_port)
    
    print("Starting TLS encryption...")
    server.starttls()
    
    print("Logging in...")
    server.login(sender_email, password)
    
    print("Sending email...")
    server.send_message(message)
    
    print("\n✓ Email sent successfully!")
    
    server.quit()
    
except smtplib.SMTPAuthenticationError as e:
    print(f"\n✗ Authentication failed: {e}")
    print("\nThis usually means:")
    print("1. The password is incorrect")
    print("2. 'Less secure app access' is disabled (Gmail deprecated this)")
    print("3. You need to use an App Password instead")
    print("\nTo fix this:")
    print("1. Go to Google Account → Security")
    print("2. Enable 2-Step Verification")
    print("3. Generate an App Password")
    print("4. Use the 16-character app password instead of your regular password")
    
except Exception as e:
    print(f"\n✗ Error: {type(e).__name__}: {e}")
