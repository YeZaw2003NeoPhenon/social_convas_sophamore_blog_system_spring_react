## Blog Post Management System
Welcome to the Blog Post Management System – a stupenfying feature-rich, user-friendly platform for managing your blog posts with ease.
This system integrates modern technologies to deliver a seamless experience for both administrators and users.

## Description
This project is designed to simplify the process of managing blog content.
It provides judicious CRUD operations and an intuitive user interface.
Gobbled up with React and Spring Boot, it ensures a dynamic and responsive user experience as well as brimming with vehement Handling of components make the project exquisite.

## Features
- CRUD Operations: Easily create, read, update, and delete blog posts.
- Form Validation: Robust validation with Formik and Yup.
- Smooth Navigation: Utilizes React Router for a seamless browsing experience.
- Responsive Design: Ensures usability across various devices.
- Loading Spinner: Visual feedback for asynchronous operations.
- PostgreSQL Integration: Reliable data storage with PostgreSQL.

### Backend

- **Spring REST API** - Framework for building the backend API
- **MyBatis** - Persistence framework for interacting with the database
- **PostgreSQL** - Relational database

### Frontend

- **React** - JavaScript library for building user interfaces
- **React Router** - For navigation
- **Formik** - For form management and validation
- **Axios** - For making HTTP requests
- **Bootstrap** - For responsive design

  ## 🛠️ Installation
Follow these steps to set up the project locally:

**Prerequisites**

``Ensure you have the following installed:
Java JDK 11+
Maven
Node.js & npm
PostgreSQL``

## Backend Setup

```git clone https://github.com/YeZaw2003NeoPhenon/emp_ms_react_project.git
cd emp_ms_react_project/backend```

```Create a PostgreSQL database.```
```Update src/main/resources/application.properties with your database credentials:```

```spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
spring.datasource.username=your_database_username
spring.datasource.password=your_database_password```

## Contributing

** Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. **

`` Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request ``


```./mvnw spring-boot:run```

### Frontend Setup

```cd ../frontend```

**Install Dependencies:**
```npm install```

**Start the Development Server:**
```npm start```

**Access the Application:**
```Open your browser and navigate to http://localhost:3000.
The application will prompt you to log in or create an account.```

### API Endpoints

## Authentication
``POST /api/auth/login:`` Authenticate user and obtain a token.
``POST /api/auth/register:`` Register a new user.

## Posts
``GET /api/posts:`` Retrieve all posts.
``GET /api/posts/{id}:`` Retrieve a post by ID.
``POST /api/posts:`` Create a new post.
``PUT /api/posts/{id}:`` Update a post by ID.
``DELETE /api/posts/{id}:`` Delete a post by ID.

### Contributing

## Fork the Repository:
**We welcome contributions to enhance the project! Follow these steps to contribute:
Click the "Fork" button at the top right of the repository page.**

## Create a New Branch:
```git checkout -b feature/your-feature```

## Make Your Changes:
Implement your feature or bug fix.

## Commit Your Changes:
```git commit -m "Add feature: your feature description"```

## Push To The Branch
```git push origin feature/your-feature```

## Create a Pull Request:
Open a pull request on GitHub and describe your changes.

### Acknowledgements
🙏
Special thanks to the open-source community for the tools and libraries used in this project
