# Phone E-commerce Website


## Description

This is a full-stack MERN project which is an e-commerce website that sells cellphones. The website allows customers to see the detail and order phones, create an account and log in to see all the orders in the past. 

The application contains two basic roles:
  * Admins, they can manage all the products on the site, for example create, update or delete products. 
  * Users can search, select and order products, or they can even manage all the orders that they have purchased before.

Features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  * Redux to manage application's state

## Demo

-   Click the following link to see the demo: https://phone-shop-ecommerce.onrender.com
-   This account can be used to test the authentication or you can create your own: 
    * Email: test123@gmail.com
    * Password: test123
-   This account can be used to test Paypal payment:
    * Email: sb-n0vgq29855989@business.example.com
    *Password: VOhf@N2r

## Illustrations

### Home page

<img width="1920" alt="" src="https://i.ibb.co/T2ZBScd/Screenshot-2024-03-18-182549.png">

### Product page

<img width="1920" alt="" src="https://i.ibb.co/4NyLt2v/Screenshot-2024-03-18-182646.png">

### Login page

<img width="1920" alt="" src="https://i.ibb.co/W5MN789/Screenshot-2024-03-18-182330.png">

### Payment page

<img width="1920" alt="" src="https://i.ibb.co/C55sDfQ/Screenshot-2024-03-18-182739.png">

## Install

Clone the repo:

```
$ git clone https://github.com/alvinle2901/phone-shop.git
```

Launch server (Back-end):

```
$ cd api
$ npm install
$ npm start
```

Launch website (Front-end):

```
$ cd client
$ npm install
$ npm start
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

## Technical details

-   **`Client Side`**: ReactJS, React-Router, Redux, Styled Component, Paypal Sandbox API.
-   **`Server Side`**: NodeJS, ExpressJS, JSON Web Token, CORS, Mongoose. 
-   **`Deployment`**: Vercel (CI/CD for client), Render (FE side).