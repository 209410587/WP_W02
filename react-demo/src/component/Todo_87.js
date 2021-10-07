import { useState } from 'react';
import Modal_87 from './Modal_87';
import Backdrop_87 from './Backdrop_87';

function Todo_87(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_87 />}
      {showModal && (
        <Modal_87 text="Are you sure?" onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_87;
