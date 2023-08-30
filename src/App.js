import './App.css';
import React, {useState} from "react";
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddItem from './AddItem';
import SearchItems from './SearchItems';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [items, setItems] = useState(JSON>parseFloat(localStorage.getItem('shoppinglist')))
     const [newItem, setNewItem] = useState('')
     const [search, setSearch] = useState('')


      const setAndSaveItems = (newItems) => {
        setItems(newItems)
        localStorage.setItem('shoppinglist', JSON.stringify(newItems))

      }
     const addItem = (item) => {
      
   //   const id = items.length ? items[items.length - 1].id + 1 : 1;
      const id = uuidv4();
      const myNewItem = {id, checked: false, item};
      const listItems = [...Object.values(items), myNewItem]
      setAndSaveItems(listItems);
     }

     const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} :item);
      setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')

  }
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItems search={search} setSearch={setSearch}/>
      <Content 
      items={Object.values(items).filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))} 
      handleCheck={handleCheck} 
      handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
