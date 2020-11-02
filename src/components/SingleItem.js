import React, { useState } from "react";
import Delete from "./delete.png";
import Modal from "react-modal";

const SingleItem = ({
  name,
  vote,
  id,
  date,
  url,
  items,
  setItems,
  showAlert,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteHandle = () => {
    setItems(items.filter((element) => element.id !== id));
    setModalOpen(false);
    showAlert(`${name} was successfully deleted`);
  };

  const voteUp = () => {
      const mutateArr = JSON.parse(JSON.stringify([...items]))
      let indexNum = mutateArr.findIndex(item=>item.id === id);
      mutateArr[indexNum].vote = mutateArr[indexNum].vote + 1;
      setItems(mutateArr)
      
  }
  const voteDown = () => {
    const mutateArr = JSON.parse(JSON.stringify([...items]));
    let indexNum = mutateArr.findIndex(item=>item.id === id);
    if(mutateArr[indexNum].vote!==0){
        mutateArr[indexNum].vote = mutateArr[indexNum].vote - 1;
    }
    setItems(mutateArr)
    
    
}
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          content: {
            width: "500px",
            height: "350px",
            margin: "auto",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: '5'
          },
        }}
      >
        <header>REMOVE LINK</header>
        <h3>Do you want to remove:</h3>
        <p className="lead">{name}</p>
        <div className="bottom-buttons">
          <button
            type="button"
            className="btn btn-dark mx-5"
            onClick={deleteHandle}
          >
            OK
          </button>
          <button
            type="button"
            className="btn btn-dark mx-5"
            onClick={() => setModalOpen(false)}
          >
            CANCEL
          </button>
        </div>
      </Modal>
      <div className="singleitem my-3 mx-auto">
        <img
          src={Delete}
          className="delete-icon"
          onClick={() => setModalOpen(true)}
        />
        <div className="points">
          <h1>{vote}</h1>
          <p className="lead">POINTS</p>
        </div>
        <div className="infos">
          <h4>{name}</h4>
          <p className="pageLink">{`(${url})`}</p>
          <div className="voting">
            <a onClick={voteUp}>
              <i className="fa fa-arrow-up fa-xs" aria-hidden="true"></i>Up Vote
            </a>
            <a onClick={voteDown}>
              <i className="fa fa-arrow-down fa-xs" aria-hidden="true"></i>Down
              Vote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
