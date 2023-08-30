import React from 'react'
import {useState} from "react"
import {FaTrashAlt} from "react-icons/fa"
import ItemLists from "./ItemLists";

const Content = ({items, handleCheck, handleDelete}) => {
  
    // const handleNameChange = () => {
    //     const names = ['Bob', 'Kevin', 'Dave']
    //     const int = Math.floor(Math.random() * 3);
    //     return names[int]
    // }
  return (
    <main>
      {items.length ? (
       <ItemLists
         items={items}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />

      ) : (
  <p style={{marginTop: '2rem'}}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content