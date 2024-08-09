import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [itemsState, setItemsState] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  function addSubmitItem(newItem) {
    const updatedItems = [...items, newItem]
    setItems(updatedItems)
  }

  const itemsToDisplay = items.filter((item) => {
    // if (selectedCategory === "All") return true;
    // return item.category === selectedCategory;

    if (search === "") {return true;}
    return item.name.toLowerCase().includes(search.toLowerCase());

  });



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addSubmitItem}/>
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
