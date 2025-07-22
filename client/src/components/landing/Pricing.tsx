const plans = [
  {
    title: "Free",
    price: "₹0",
    features: ["Upload 5 Excel files/month", "Basic chart options", "Limited downloads"],
  },
  {
    title: "Pro",
    price: "₹299/month",
    features: ["Unlimited uploads", "2D & 3D charts", "Export to PDF/PNG", "Upload history"],
  },
  {
    title: "Enterprise",
    price: "Contact us",
    features: ["Team accounts", "Admin dashboard", "Priority support"],
  }
];

const Pricing = () => (
  <section className="py-16 px-6 h-screen flex flex-col justify-center items-center">
    <h2 className="text-3xl font-semibold text-center mb-10">Pricing</h2>
    <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan, i) => (
        <div key={i} className="p-12 rounded-xl shadow-md border-t border-gray-100/70 hover:shadow-xl shadow-zinc-300 bg-white hover:scale-110 transition duration-300 ease-in-out ">
          <h3 className="text-xl font-semibold">{plan.title}</h3>
          <p className="text-[22px] mt-2 font-semibold">{plan.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 text-start">
            {plan.features.map((f, idx) => (
              <li key={idx}> {f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
