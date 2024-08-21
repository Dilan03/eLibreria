# **E-libreria**

This is a e-commerce bookstore application for the software project management class. 
[visit site](https://e-libreria-46b75.web.app/)

## Features

### User Features
- **Account Creation**: Users can sign up to create an account.
- **Login**: Existing users can log in to access their accounts.
- **Book Browsing**: Users can browse through a vast collection of books.
- **Add to Cart**: Users can add books to their shopping cart.
- **Checkout**: Users can finalize their purchases and place orders.

### Admin Features
- **Book Management (CRUD)**: Administrators can create, read, update, and delete book listings.
- **User Management**: Administrators can manage user accounts, including editing details and handling user-related issues.
- **Order Management**: Administrators can manage and oversee customer orders, including tracking and fulfillment.

## **Technologies**

- **React**
- **Vite**
- **Tailwind CSS**
- **Firebase**
  - **Authentication**
  - **Firestore Database**

## Credits
- UI Desing in figma: [Israel Chacon](https://github.com/IsraelChacon).
- Frontend developement: [Dilan Garcia](https://github.com/Dilan03).

## **Installation Instructions**
To play *Deroached*, follow these steps:

1. Click the provided download [Link](https://dregen-erado.itch.io/deroached).
2. Download the **DEROACHED.zip** file.
3. Extract the contents of the zip file.
4. Double-click **DEROACHED.exe** to start the game.

## Installation Guide

To set up and run the e-commerce bookstore project locally, follow these steps:

# 1. Clone the Repository
git clone https://github.com/Dilan03/eLibreria.git
cd eLibreria

# 2. Install Dependencies
npm install
# or
# yarn install

# 3. Set Up Firebase
# - Go to the Firebase Console: https://console.firebase.google.com/
# - Create a new project or use an existing one.
# - Set up Authentication and Firestore Database.
# - Obtain your Firebase configuration details from the Firebase Console.
# - Create a `.env` file in the root of your project and add your Firebase configuration:
#   VITE_FIREBASE_API_KEY=your_api_key
#   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
#   VITE_FIREBASE_PROJECT_ID=your_project_id
#   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
#   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
#   VITE_FIREBASE_APP_ID=your_app_id

# 4. Start the Development Server
npm run dev
# or
# yarn dev

