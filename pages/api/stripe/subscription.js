import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { customerId, priceId } = req.body;
  if ([customerId, priceId].includes(undefined)) {
    return res
      .status(400)
      .json({ error: "Missing required session parameters" });
  }

  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
      items: [
        {
          price: priceId,
        },
      ],
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      payment_behavior: "default_incomplete",
    });
    res
      .status(200)
      .json({
        id: subscription.id,
        client_secret: subscription.latest_invoice.payment_intent.client_secret,
      });
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
};
