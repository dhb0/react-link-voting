import React, { useState, useEffect } from "react";
import NewItem from "./components/NewItem";
import DisplayArea from "./components/DisplayArea";
import Alert from "./components/Alert";
import Modal from "react-modal";

Modal.setAppElement("#root");
const App = () => {
  const initialItems = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  const [addNew, setAddNew] = useState(false);
  const [items, setItems] = useState(initialItems);
  const [alert, setAlert] = useState({ show: false });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const showAlert = (message) => {
    setAlert({ show: true, message: message });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  return (
    <div className="App">
      {addNew ? (
        <NewItem
          setAddNew={setAddNew}
          items={items}
          setItems={setItems}
          showAlert={showAlert}
        />
      ) : (
        <>
          {alert.show && <Alert message={alert.message} />}
          <div
            className="submitlink mx-auto mt-5"
            onClick={() => setAddNew(true)}
          >
            <div className="plus">
              <h1>+</h1>
            </div>
            <h1>SUBMIT A LINK</h1>
          </div>
          <hr className="my-4" />
          <DisplayArea
            items={items}
            setItems={setItems}
            showAlert={showAlert}
          />
        </>
      )}
    </div>
  );
};

export default App;
