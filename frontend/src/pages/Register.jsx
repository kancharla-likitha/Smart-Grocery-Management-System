import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <h2>Register</h2>

      <input type="text" placeholder="Full Name" />

      <input type="email" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <button>Create Account</button>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;