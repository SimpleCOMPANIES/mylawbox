# Django Backend Email Setup

## Setup Instructions

1. **Create a `.env` file** in the backend directory:
   ```bash
   cd backend
   cp .env.example .env
   ```

2. **Configure your email credentials** in `.env`:
   ```
   EMAIL_HOST_USER=your-email@outlook.com
   EMAIL_HOST_PASSWORD=your-app-password
   EMAIL_RECIPIENT=rzade@simpleciti.com
   SECRET_KEY=generate-a-secure-random-key
   ```

3. **For Office 365/Outlook**, you may need to:
   - Use an app password instead of your regular password
   - Enable SMTP authentication in your email settings

4. **Deploy your Django backend** to a hosting service:
   - **PythonAnywhere** (easy for Django)
   - **Railway** (easy deployment)
   - **Heroku**
   - **AWS/Azure**
   - **DigitalOcean**

5. **Update frontend environment variable**:
   Create `.env.production` in the frontend directory:
   ```
   REACT_APP_API_URL=https://your-backend-domain.com
   ```

6. **For production**, update `backend/settings.py`:
   - Set `DEBUG = False`
   - Update `ALLOWED_HOSTS` with your domain
   - Update `CORS_ALLOWED_ORIGINS` with your production domain

## Testing Locally

```bash
# Backend
cd backend
python manage.py runserver

# Frontend (in another terminal)
cd frontend
npm start
```

The contact form will now send emails using Django's email backend.
