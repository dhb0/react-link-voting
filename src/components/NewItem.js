import React, {useState} from "react";
import uuid from 'react-uuid';

const NewItem = ({setAddNew, items, setItems, showAlert}) => {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        setItems([{name:name, url:url, id:uuid(), vote:0, date:new Date()},...items]);
        setName('');
        setUrl('');
        setAddNew(false);
        showAlert(`${name} was succesfully added!`)
    }
  return (
    <div className="addNew container d-flex flex-column my-5">
      <h5 onClick={()=>setAddNew(false)} style={{cursor:'pointer'}} className="mb-4">
        <i className="fa fa-arrow-left fa-xs" aria-hidden="true"></i> Return to List
      </h5>
      <form onSubmit={submitHandler}>
      <h2>ADD NEW LINK</h2>
        <div className="form-group">
          <label htmlFor="link-name">Link Name:</label>
          <input
            type="text"
            className="form-control w-50 input-lg"
            id="link-name"
            aria-describedby="linkname"
            placeholder="e.g. Alphabet"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linURL">Link URL:</label>
          <input
            type="text"
            className="form-control w-50 input-lg"
            id="linkURL"
            placeholder="e.g. http://abc.xyz"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
