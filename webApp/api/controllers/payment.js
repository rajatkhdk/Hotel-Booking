import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const paymentIntent = async (req, res, next) => {
  try {
    const { products } = req.body;
    console.log(products);

    if (!products) {
      return res.status(400).json({ error: 'Products not provided in request body' });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.room_type,
        },
        unit_amount: product.price * 100, // Stripe expects the amount in the smallest currency unit (e.g., paise for INR)
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    next(error);
  }
};
