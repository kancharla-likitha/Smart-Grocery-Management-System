import { Link } from "react-router-dom";

function GroceryList() {
  return (
    <div className="container">

      <h2>Grocery List</h2>

      <table>

        <thead>

          <tr>

            <th>Item</th>

            <th>Quantity</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Onion</td>

            <td>10 Kg</td>

            <td>

              <button>++</button>

              <br /><br />

              <button>--</button>

            </td>

          </tr>

          <tr>

            <td>Tomato</td>

            <td>5 Kg</td>

            <td>

              <button>++</button>

              <br /><br />

              <button>--</button>

            </td>

          </tr>

        </tbody>

      </table>

      <br />

      <Link to="/dashboard">
        <button>Back</button>
      </Link>

    </div>
  );
}

export default GroceryList;