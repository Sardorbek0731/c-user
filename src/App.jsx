import "./App.css";
import { useState } from "react";

// JSX files
import Header from "./components/navbar/Header";
import ShowUsers from "./components/showUser/showUsers";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

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
