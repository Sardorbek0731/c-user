import "./App.css";
import { useState } from "react";

// JSX files
import Header from "./assets/Header.jsx";
import ShowUsers from "./assets/ShowUsers.jsx";
import Footer from "./assets/Footer";
import Modal from "./assets/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userInform, setUserInform] = useState([]);

  const informsUsers = (inform) => {
    setUserInform((prev) => {
      return [...prev, inform];
    });
  };

  return (
    <>
      <Header />
      <ShowUsers
        setShowModal={setShowModal}
        userInform={userInform}
      />
      <Footer />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        informsUsers={informsUsers}
      />
    </>
  );
}

export default App;
