# Notes App

A full-stack web application for creating and managing personal notes. Users can register, log in, and perform CRUD operations on their notes securely.

## Features

- User authentication (registration and login) with JWT tokens
- Create, view, and delete personal notes
- Responsive React frontend
- RESTful Django REST Framework backend
- PostgreSQL database
- CORS enabled for frontend-backend communication

## Tech Stack

### Backend

- **Django** - Web framework
- **Django REST Framework** - API framework
- **Django Simple JWT** - JWT authentication
- **PostgreSQL** - Database
- **django-cors-headers** - CORS handling

### Frontend

- **React** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **JWT Decode** - Token handling

## Project Structure

```
notes-app/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── requirements.txt
│   └── .gitignore
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── constants.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
├── .python-version
├── pyproject.toml
├── README.md
└── uv.lock
```

## Installation

### Prerequisites

- Python 3.12+
- Node.js 18+
- PostgreSQL
- uv (Python package manager)

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables. Create a `.env` file in the `backend/` directory:

   ```
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PWD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   SECRET_KEY=your_django_secret_key
   ```

4. Run migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. (Optional) Create a superuser:

   ```bash
   python manage.py createsuperuser
   ```

6. Start the Django server:
   ```bash
   python manage.py runserver
   ```

The backend will be running at `http://127.0.0.1:8000/`.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the `frontend/` directory:

   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running at `http://localhost:5173/`.

## Usage

1. Open your browser and go to `http://localhost:5173/`
2. Register a new account or log in with existing credentials
3. Create new notes using the form
4. View and delete your notes in the notes section

## API Endpoints

### Authentication

- `POST /api/token/` - Obtain JWT token pair
- `POST /api/token/refresh/` - Refresh access token
- `POST /api/user/register/` - Register new user

### Notes

- `GET /api/notes/` - List user's notes (authenticated)
- `POST /api/notes/` - Create new note (authenticated)
- `DELETE /api/notes/delete/<id>/` - Delete note by ID (authenticated)

## Development

### Running Tests

```bash
cd backend
python manage.py test
```

### Linting

```bash
cd frontend
npm run lint
```

### Building for Production

```bash
cd frontend
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
