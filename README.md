# Swifkart Online Store

Swifkart is an e-commerce application currently under development, featuring a full-stack architecture. The project includes a React and Redux frontend, a Node.js and Express backend, and MongoDB for data storage. It also integrates Stripe for secure payment processing.

## Features

- **User Authentication**: Secure user registration and login with JWT.
- **Product Management**: Add, update, and delete products.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Order Processing**: Place orders and pay securely using Stripe.

## Project Structure

- **Frontend**: Built with React and Redux
  - User interface for browsing products, managing a shopping cart, and processing payments.

- **Backend**: Utilizes Node.js, Express, and MongoDB
  - RESTful API for handling user authentication, product management, and order processing.
  - Stripe integration for secure payment processing.

## Demo Website

The Swifkart application has been deployed using Vercel. The environment variables have been configured in the Vercel dashboard, and the deployment is integrated with the GitHub repository. You can access the live demo at:

[swifkart.vercel.app](https://swifkart.vercel.app)

## Usage

1. Access the demo website at [swifkart.vercel.app](https://swifkart.vercel.app).
2. Add products to the cart.
3. Proceed to checkout.
4. Complete payments using Stripe:
   - Use the following test card information:
     - **Card Number**: 4242 4242 4242 4242
     - **Expiry Date**: Any future date
     - **CVC**: Any 3-digit number
     - **Billing Postal Code**: Any postal code
   - Click **Pay**.
   - You will be redirected to a success page.

For more details on testing payments, refer to the [Stripe Testing Documentation](https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=stripe-hosted&locale=en-GB#testing).

## Technologies Used

- **Frontend**: React.js, React-Redux, React-Router-Dom, Vite, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Processing**: Stripe
- **Other**: Git, GitHub, JavaScript, Toast Notifications, Helmet-Async, Vercel Deployment

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
