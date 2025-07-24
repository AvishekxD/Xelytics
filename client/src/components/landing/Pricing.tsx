"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: "free",
    title: "Free",
    price: "₹0",
    features: [
      "Upload 5 Excel files/month",
      "Basic chart options",
      "Limited downloads",
      "View only mode",
      "Community support",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    price: "₹299/month",
    features: [
      "Unlimited uploads",
      "2D & 3D charts",
      "Export to PDF/PNG",
      "Upload history",
      "Priority email support",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "Contact us",
    features: [
      "Team accounts",
      "Admin dashboard",
      "Priority support",
      "SSO Integration",
      "Custom deployment",
    ],
  },
];

const PricingCard = ({
  plan,
  isHovered,
  setHovered,
  isDefault,
}: {
  plan: typeof plans[0];
  isHovered: boolean;
  setHovered: (id: string | null) => void;
  isDefault?: boolean;
}) => {
  const baseStyles =
    "p-12 rounded-xl shadow-md border-t border-gray-100/70 bg-white cursor-pointer h-[480px] w-[350px] transition duration-500 ease-in-out hover:bg-gray-200/20";

  const bgGray = "bg-gray-50";
  const isActive = isHovered || isDefault;

  return (
    <motion.div
      onMouseEnter={() => setHovered(plan.id)}
      onMouseLeave={() => setHovered(null)}
      className={`${baseStyles} ${isActive ? bgGray : ""}`}
      animate={{
        scale: isHovered ? 1.05 : isDefault ? 1.05 : .95,
      }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {plan.id === "pro" && (
        <div className="absolute top-4 right-2 bg-neutral-800 text-white text-xs px-3 py-2 rounded-full shadow">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold">{plan.title}</h3>
      <p className="text-[22px] mt-2 font-semibold">{plan.price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 text-start">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      className="py-20 px-6 min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">Pricing</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isHovered={hoveredCard === plan.id}
            isDefault={plan.id === "pro" && !hoveredCard}
            setHovered={setHoveredCard}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
