import Register from "./Register";
import Login from "./Login";
import Payment from "./Payment";
import Staff from "./Staff";

function App() {
  return (
    <div>
      <h1>International Payments Portal</h1>

      <Register />
      <Login />

      <hr />

      <Payment />

      <hr />

      <Staff />
    </div>
  );
}

export default App;