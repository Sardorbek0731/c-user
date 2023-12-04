import "./App.css";
import { useState } from "react";

// JSX files
import Header from "./components/navbar/Header.jsx";
import ShowUsers from "./components/showUser/showUsers.jsx";
import Footer from "./components/footer/Footer.jsx";
import Modal from "./components/modal/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userInform, setUserInform] = useState([]);

  const informsUsers = (inform) => {
    setUserInform((prev) => {
      return [...prev, inform];
    });
  };

  const deleteUser = (id) => {
    const deleted = userInform.filter((inform) => {
      return inform.id !== id;
    });

    setUserInform(deleted);
  };

  return (
    <>
      <Header userInform={userInform} />
      <ShowUsers
        setShowModal={setShowModal}
        userInform={userInform}
        deleteUser={deleteUser}
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
