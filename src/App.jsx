import "./App.css";
import { useState } from "react";

// JSX files
import Header from "./assets/Header.jsx";
import ShowUsers from "./assets/ShowUsers.jsx";
import Footer from "./assets/Footer";
import Modal from "./assets/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <ShowUsers setShowModal={setShowModal} />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
