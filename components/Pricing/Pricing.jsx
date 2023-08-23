import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import CTA from '../CTA'

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/month" },
  ],
  tiers: [
    {
      name: "Starter",
      productId: "prod_ODjk3tWXhIuy5r",
      href: "/register",
      price: { monthly: "$60", annually: "$48" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "250 Active Leads",
        "500 Monthly Emails",
        "Unlimited Campaigns",
        "Send Emails via Pipeline",
        "Email Support",
      ],
      priceId: "price_1NRIHEKQQyy4BdVzqnVYnRAq",
      mostPopular: false,
      comingSoon: true,
    },
    {
      name: "Growth",
      productId: "prod_ODjmMknxjs2UeX",
      href: "/register",
      price: { monthly: "$110", annually: "$88" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "500 Active Leads",
        "1000 Monthly Emails",
        "Unlimited Campaigns",
        "Send via Pipeline",
        "Premium Support",
      ],
      priceId: "price_1NRIIVKQQyy4BdVzoWLPH3Jd",
      mostPopular: true,
      comingSoon: false,
    },
    {
      name: "Hypergrowth",
      productId: "prod_ODjmmKs88eIRk4",
      href: "/register",
      price: { monthly: "$299", annually: "$239" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "2500 Active Leads",
        "5000 Monthly Emails",
        "Unlimited Campaigns",
        "Send via Pipeline",
        "Premium Support",
      ],
      priceId: "price_1NRIIyKQQyy4BdVzEsrA92so",
      mostPopular: false,
      comingSoon: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function PricingBody() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  const handleBuyPlanClick = async tier => {
    const res = await fetch("/api/stripe-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: tier.productId,
        priceId: tier.priceId,
        userId: "iOrJ2z7ABYgDy8gSgTnOaoDOWPH3",
      }),
    });

    const { sessionId } = await res.json();
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: tier.priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/failed`,
      clientReferenceId: "iOrJ2z7ABYgDy8gSgTnOaoDOWPH3",
      sessionId: sessionId,
    });
  };

  return (
    <div className="pb-32">
      <main>
        {/* Pricing section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-accent">
              Choose an affordable plan that’s packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div> */}

          <div className="mt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-xl bg-black p-1 text-center text-xs font-semibold leading-5 text-white"
            >
              <RadioGroup.Label className="sr-only">
                Payment frequency
              </RadioGroup.Label>
              {pricing.frequencies.map(option => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "bg-gray-600" : "",
                      "cursor-pointer rounded-xl px-2.5 py-1 flex justify-center items-center"
                    )
                  }
                >
                  {option.label == "Annually" ? (
                    <div className="flex justify-center items-center gap-x-2">
                      <p>Annually</p>
                      <p className="bg-yellow-200 text-yellow-800 rounded-3xl px-2 py-1 text-xs 2xl:text-sm">
                        Save 20%
                      </p>
                    </div>
                  ) : (
                    <span>{option.label}</span>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricing.tiers.map(tier => (
              <div
                key={tier.id}
                // className={classNames(
                //   tier.mostPopular
                //     ? "bg-white/5 ring-2 ring-indigo-500"
                //     : "ring-1 ring-white/10",
                //   "rounded-3xl p-8 xl:p-10"
                // )}
                className={
                  "relative p-8 border border-gray-300 rounded-2xl shadow-sm flex flex-col"
                }
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-black"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  ) : null}
                  {/* {tier.comingSoon ? (
                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Coming Soon
                    </p>
                  ) : null} */}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-500">
                    {frequency.priceSuffix}
                  </span>
                </p>
                {!tier.comingSoon ? (
                <Link
                  // href={tier.href}
                  href={"#"}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-black text-white shadow-sm hover:opacity-50 focus-visible:outline-primary"
                      : "bg-black hover:opacity-50 text-white focus-visible:outline-white",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300"
                  )}
                  onClick={() =>
                    handleBuyPlanClick(tier.productId, tier.priceId)
                  }
                >
                  Coming soon
                </Link>
                ) : (
                  <div
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-gray-900 text-white shadow-sm hover:opacity-50 focus-visible:outline-primary"
                      : "bg-gray-900 hover:opacity-50 text-white focus-visible:outline-white",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 cursor-pointer"
                  )}
                >
                  Coming soon
                </div>
                )}
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map(feature => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-green-500"
                        aria-hidden="true"
                      />
                      <p className="text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <CTA/>
      </main>
    </div>
  );
}
