# FPMOZ Car Rental

## Overview
FPMOZ Car Rental is a comprehensive full-stack vehicle rental management system developed as a collaborative college project. The platform offers an intuitive interface for vehicle rentals and reservations, complete with role-based access control and secure CRUD operations.

## Key Features
- Vehicle browsing and detailed view
- Secure user authentication and authorization
- Reservation management system
- Admin dashboard for fleet management
- User profile and reservation history
- Custom RESTful API
- Responsive design for all devices

## Technology Stack

### Frontend
- React (Create React App)
- Tailwind CSS for utility-first styling
- Component-based architecture
- Responsive UI/UX design
- Modern JavaScript practices

### Backend
- Node.js with Express
- MongoDB database
- RESTful API architecture
- JWT authentication
- Role-based access control

## Application Screenshots

### Landing Page
The welcoming frontend interface showcasing available services and featured vehicles:
![Landing Page](https://github.com/user-attachments/assets/8a01c619-2cad-4fdc-a9bb-013f9d788c77)

### Vehicle Fleet
Browse through our extensive collection of available vehicles:
![Vehicle Fleet](https://github.com/user-attachments/assets/f4fa4bad-8bb1-498b-b69e-1ab4d5e03317)

### Vehicle Details
Detailed vehicle information and booking interface:
![Vehicle Details](https://github.com/user-attachments/assets/cfe2cc02-13df-46e1-9695-0964f8799e1d)

## System Architecture

### Use Case Diagram
Illustrates system functionality and user interactions:
![Use Case Diagram](https://github.com/user-attachments/assets/91fdaa5a-ddc5-490e-a089-e8d52fb2499a)

### Component Architecture
Shows the system's technical structure and relationships:
![Component Diagram](https://github.com/user-attachments/assets/36ea28bc-880e-4ee5-8fba-96512f955104)

### Database Schema
Represents data model and relationships:
![Database Diagram](https://github.com/user-attachments/assets/64657b25-158f-427e-850c-491c3f3ffc6a)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fpmoz-car-rental.git

# Install frontend dependencies
cd fpmoz-car-rental/client
npm install

# Install backend dependencies
cd ../server
npm install

# Start development servers
# Frontend (in client directory)
npm start

# Backend (in server directory)
npm run dev
```

## Future Enhancements
- TypeScript migration for improved type safety and code quality
- Enhanced booking validation system
- Advanced search and filtering capabilities
- Integration with payment gateways

## Environment Variables
Create a `.env` file in the server directory with the following:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## API Documentation
The API endpoints are organized around the following resources:

- `/api/auth` - Authentication routes
- `/api/vehicles` - Vehicle management
- `/api/reservations` - Reservation handling
- `/api/users` - User management (admin only)

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- FPMOZ faculty mentors and advisors
- Project collaborators and contributors
