import React, { useState, useEffect } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Step 1

  useEffect(() => {
    // Update the document's class when the selectedCategory state changes
    document.body.className = selectedCategory === "All" ? "selectCategory" : "!selectCategory";
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    // Step 2
    setSelectedCategory(e.target.value);
  };

  // Step 3: Filter items based on the selected category
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className={`SelectedCategory ${selectedCategory === "All" ? "selectCategory" : "!selectCategory"}`}>
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
