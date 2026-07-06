import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <h1>Smart Grocery Management</h1>

      <h2>Login</h2>

      <input type="email" placeholder="Enter Email" />

      <input type="password" placeholder="Enter Password" />

      <Link to="/dashboard">
        <button>Login</button>
      </Link>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;