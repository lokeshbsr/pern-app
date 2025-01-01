import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/api/items");
    setItems(response.data);
  };

  const addItem = async () => {
    if (!newItem) return;
    await axios.post("http://localhost:5000/api/items", { name: newItem });
    setNewItem("");
    fetchItems();
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemList;
