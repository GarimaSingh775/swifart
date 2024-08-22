const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'gbp',
                product_data: {
                  name: item.name,
                  images: [item.image],
                  description: `${item.desc}, 300ml`, 
                  metadata: {
                    id: item.id

                  },
                },
                unit_amount: item.price * 100,
              },
              quantity: item.cartQuantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB', 'IN'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'gbp',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 300,
              currency: 'gbp',
            },
            display_name: 'Swif-Delivery ',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      line_items,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/a8F9kL9zQ2xV7wT5mN3bJ6oP1rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });
  
    res.send({url: session.url});
  });

  module.exports = router;