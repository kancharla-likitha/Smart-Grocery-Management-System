import { useState } from "react";

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!itemName || !quantity || !unit) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      itemName,
      quantity: Number(quantity),
      unit,
    };

    setItems([...items, newItem]);

    setItemName("");
    setQuantity("");
    setUnit("");
  };

  const increase = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    if (window.confirm("Delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container">

      <h2>Smart Grocery Management</h2>

      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="">Select Unit</option>
        <option value="Kg">Kg</option>
        <option value="Litre">Litre</option>
        <option value="Packet">Packet</option>
        <option value="Piece">Piece</option>
      </select>

      <button className="add-btn" onClick={addItem}>
        ➕ Add Item
      </button>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No Grocery Items Added
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>

                <td>{item.itemName}</td>

                <td>{item.quantity}</td>

                <td>{item.unit}</td>

                <td
                  className={
                    item.quantity <= 2
                      ? "low-stock"
                      : "available"
                  }
                >
                  {item.quantity <= 2
                    ? "Low Stock"
                    : "Available"}
                </td>

                <td>
                  <div className="actions">

                    <button
                      className="plus"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>

                    <button
                      className="minus"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>

                    <button
                      className="delete"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}

export default AddItem;