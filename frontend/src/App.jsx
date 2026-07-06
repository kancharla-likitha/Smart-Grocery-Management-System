import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import GroceryList from "./pages/GroceryList";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/grocery" element={<GroceryList />} />
      <Route path="/add" element={<AddItem />} />
    </Routes>
  );
}

export default App;