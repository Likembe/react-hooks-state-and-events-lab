import React, { useState, useEffect } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  useEffect(() => {
    // Update the document's class when the isInCart state changes
    document.body.className = isInCart ? "in-cart" : "not-in-cart";
  }, [isInCart]);

  // Function to handle adding/removing items from the cart
  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={`Item ${isInCart ? "in-cart" : "!in-cart"}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

