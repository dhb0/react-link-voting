import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import SingleItem from "./SingleItem";
import uuid from 'react-uuid';
const DisplayArea = ({ items, setItems, showAlert }) => {
  const [currentPag, setCurrentPag] = useState(0);
  const [sort, setSort] = useState('')
  let dataToDisplay = JSON.parse(JSON.stringify([...items]));
  if(sort=="ascending"){
    dataToDisplay = dataToDisplay.sort((a,b)=>a.vote-b.vote)
  }else if(sort=="descending"){
    dataToDisplay = dataToDisplay.sort((a,b)=>b.vote-a.vote)
  }
  const chunkArray = (myArray, chunk_size) => {
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}
  let splittedData = chunkArray(dataToDisplay, 5);
  return (
    <div className="container text-center displayarea">
      {(items.length !== 0) && (
        <form className="select-sorting">
          <select className="form-control" value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="">
              Order By
            </option>
            <option value="descending">Most Voted (Z to A)</option>
            <option value="ascending">Less Voted (A to Z)</option>
          </select>
        </form>
      )}
      {(splittedData.length !== 0 && splittedData[currentPag]) ?
        splittedData[currentPag].map((item, index) => {
          return (
            <SingleItem
              name={item.name}
              vote={item.vote}
              id={item.id}
              date={item.date}
              url={item.url}
              items={items}
              setItems={setItems}
              showAlert={showAlert}
              key={uuid()}
            />
          );
        }) : ([...items].length === 0) ? (null) : setCurrentPag(currentPag - 1)}
      {items.length > 5 && (
        <Pagination
          items={items}
          currentPag={currentPag}
          setCurrentPag={setCurrentPag}
          length={splittedData.length}
        />
      )}
    </div>
  );
};

export default DisplayArea;
