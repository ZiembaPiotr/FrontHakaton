import React, {useContext, useEffect} from 'react';
import "../styles/list.css"
import ListItem from "./ListItem";
import {FilterTypeContext} from "../providers/filterTypeProvider";

const List = () => {
  let test = ["work", "health", "food", "work", "health", "food", "work", "hotels", "hotels", "hotels", "hotels", "hotels", "health", "food", "work", "hotels", "work", "health", "food", "work", "health", "food", "work", "hotels", "health", "food", "work", "health", "food", "work", "health", "food", "work", "hotels", "health", "food", "work", "health", "food", "work", "health", "food", "work", "hotels", "health", "food"]
  const { filterType } = useContext(FilterTypeContext);

  return (
    <div className="list" style={{maxHeight: window.innerHeight, overflow: "auto"}}>
      {!filterType ? test.map((item, index) => (
        <ListItem key={index} iconType={item}/>
      )) : test.filter((item) => item === filterType).map((item, index) => (
        <ListItem key={index} iconType={item}/>
        ))
      }
    </div>
  );
};

export default List;
