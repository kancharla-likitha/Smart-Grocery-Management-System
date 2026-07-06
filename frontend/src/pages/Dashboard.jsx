import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">

      <h1>Dashboard</h1>

      <h3>Welcome to Smart Grocery Management</h3>

      <br />

      <Link to="/add">
        <button>Add Grocery Item</button>
      </Link>

      <br /><br />

      <Link to="/grocery">
        <button>View Grocery List</button>
      </Link>

    </div>
  );
}

export default Dashboard;