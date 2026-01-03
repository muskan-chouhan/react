import Pricing from "./components/pricing";
function App() {
  const pricingPlans = [
  {
    id: 1,
    plan: "Free",
    price: 0,
    duration: "month",
    features: ["1 Project", "Community Support", "Basic Access"],
    buttonText: "Start Free",
    popular: false,
  },
  {
    id: 2,
    plan: "Starter",
    price: 199,
    duration: "month",
    features: ["3 Projects", "Email Support", "Basic Analytics"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: 3,
    plan: "Basic",
    price: 299,
    duration: "month",
    features: ["5 Projects", "Priority Email Support", "Community Access"],
    buttonText: "Choose Plan",
    popular: false,
  },
  {
    id: 4,
    plan: "Standard",
    price: 499,
    duration: "month",
    features: ["10 Projects", "Chat Support", "Basic Reports"],
    buttonText: "Upgrade",
    popular: true,
  },
  {
    id: 5,
    plan: "Pro",
    price: 799,
    duration: "month",
    features: ["25 Projects", "Advanced Analytics", "Priority Support"],
    buttonText: "Go Pro",
    popular: true,
  },
  {
    id: 6,
    plan: "Business",
    price: 1299,
    duration: "month",
    features: ["Unlimited Projects", "Team Access", "Advanced Reports"],
    buttonText: "Business Plan",
    popular: true,
  },
  {
    id: 7,
    plan: "Startup",
    price: 1999,
    duration: "month",
    features: ["Unlimited Projects", "Startup Tools", "Email + Chat Support"],
    buttonText: "Start Now",
    popular: false,
  },
  {
    id: 8,
    plan: "Enterprise",
    price: 3499,
    duration: "month",
    features: ["Custom Solutions", "Dedicated Manager", "24/7 Support"],
    buttonText: "Contact Sales",
    popular: true,
  },
  {
    id: 9,
    plan: "Annual Basic",
    price: 2999,
    duration: "year",
    features: ["All Basic Features", "Yearly Discount", "Email Support"],
    buttonText: "Buy Yearly",
    popular: false,
  },
  {
    id: 10,
    plan: "Lifetime",
    price: 9999,
    duration: "lifetime",
    features: ["All Features", "One-time Payment", "Lifetime Access"],
    buttonText: "Buy Lifetime",
    popular: true,
  },
];



  return (
    <div className="parent">
      {pricingPlans.map(function(elm){
         return (
          <div key={elm.id}>
          <Pricing
            plan = {elm.plan}
            price = {elm.price}
            duration = {elm.duration}
            features = {elm.features}
            buttonText = {elm.buttonText}
            popular = {elm.popular}
          />
          </div>
         )
      })}
    </div>
  );
}

export default App;
