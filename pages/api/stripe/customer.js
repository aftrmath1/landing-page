import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { email, name } = req.body;
  if ([email, name].includes(undefined)) {
    return res
      .status(400)
      .json({ error: `Missing required session parameters` });
  }

  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });
    return res.status(200).json({ customer });
  } catch (err) {
    return res.status(400).json({ error: { message: err.message } });
  }
};
