function App() {

  const name = "Anya Chouhan";

  const x = 10;
  const y = 20;

  function greeting() {
    return "hello i am muskan";
  }

  function sum(x, y, op) {
    if (op === '+') {
      return x + y;
    } else if (op === '-') {
      return x - y;
    } else {
      return x * y;
    }
  }

  // object
  const user = {
    name: "Muskan Chouhan",
    age: 24,
    email: "example@gmail.com"
  };

  // array
  const userArr = ['piter', 'brues', 'sam'];

  // image path
  const path =
    "https://images.unsplash.com/photo-1701357511972-578aa648ba4f?w=500&auto=format&fit=crop&q=60";

  return (
    <div>

      <h1>{name ? name : "user not found"}</h1>

      <h1>{x + y}</h1>

      <h1>{greeting()}</h1>

      <h1>{sum(20, 5, '-')}</h1>

      <h1>{user.email}</h1>

      <h1>{userArr[0]}</h1>

      {/* input field */}
      <input type="text" value={name} readOnly />

      <br /><br />

      {/* image */}
      <img src={path} alt="nature" />

    </div>
  );
}

export default App;
