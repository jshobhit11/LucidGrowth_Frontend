# Portfolio Website
## Important Notice

*Admin Credentials:*
- *email:* jshobhit3020@gmail.com
- *Password:* 12345678

*Git Cloning Notice:*
- Please note that if the application does not run directly after cloning the repository, below is the deployed live link.

*Deployed Link:*
- Click [here](https://lucidgrowthproject.netlify.app)
## Flow of Application

### User View
*Register*

![User Register](https://i.imgur.com/RXWgFxC.png)


*Login*

![User Login](https://i.imgur.com/bsFObEy.png)

### Admin View
*Admin View*

- Admins have been assigned special credentials to access the Admin Panel. These credentials are to be used exclusively by admins.
- After logging in, the admin will see the panel where they can have the right to edit and delete the skills and delete the projects and experience as well.


![Admin View](https://i.imgur.com/ncbSlHD.png)
![Admin View](https://i.imgur.com/Mj3YVYt.jpeg)


### Role of multer
*Let us see how we upload the file image*

- I have used multer in the route, where upload folder has been created after the initialization and I have also set the destination path of file image.
 
![Project](https://i.imgur.com/vvDmZg9.jpeg)

- In the projectform.js file, there is an input field of image separately.
 
![ProjectForm](https://i.imgur.com/SfRjsUD.png)


## Introduction

This is an Portfolio website where there are 3 profiles Admin, Collaborator and Viewer. and Admin can add , delete and edit the skills, projects and experiences and Collaborator can collaborate with the portfolio owner by the contacting him/her with the help of concact page and Viewer can see the projects, skills, experiences with SignIn/LogIn in the website.

## Features

- User registration and login
- Admin, Collaborator and Viewer Profile
- Collaborator will not have the access of delete and edit the skills, projects and experience
- Integration with MongoDB for data storage

## Technologies

- Frontend: React, Tailwind CSS
- Backend: Node js, Express js, jwt, multer
- Database: MongoDB

## Getting Started

### Prerequisites

- Node.js
- React js
- MongoDB

### Installation

1. *Clone the repository:*
   git clone https://github.com/jshobhit11/LucidGrowth_Frontend.git

   
2. **Install frontend dependencies:**
    
    cd Frontend
    npm install
3. *Install backend dependencies:*
   
   cd Backend
   npm install
   
### Running the Application
1. **Start the backend server:**
   npm start
2. **Start the frontend server:**
   
    cd Frontend
    npm start
    
## Frontend Components
*HomePage*

The main landing page of the application that provides the basic introduction of the portfolio ownwer.

*Login*
A component that handles user authentication.

*Register*
A component that allows new users to create an account.

*Projects*
A component that shows the project done by the portfolio owner and for the admin, the admin cand add more projects as well.

*Skills*
A component that shows the skills achieved by the owner and admin can add more skills that admin will learn in future.

*Experiences*
A component that shows the experiences that the admin have and will update with the time in future.

# Backend

*Models*

Define the data structure and schema for the application using Mongo DB.

*Routes*

Define the API endpoints for user registration, Projects, skills, Experiences and concact. 

*Multer*

Help in uploading the file image in the projects section.

*Configuration*

Contains configuration settings for the Port no, mongo db url and jwt secret.
