import React from "react";
import "../styles/Modal.css";

const Modal = () => {
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>Book A Trial Class</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="number" placeholder="Age" required />
          <input type="text" placeholder="Location" required />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
