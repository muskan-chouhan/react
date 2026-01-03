function Pricing(props) {
  return (
    <div className="pricing-card">
      <h2 className="plan-name">{props.plan}</h2>

      <p className="price">
        ₹{props.price} <span>/{props.duration}</span>
      </p>

      <ul className="features">
        {props.features.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <button className="btn">{props.buttonText}</button>
    </div>
  );
}

export default Pricing;
