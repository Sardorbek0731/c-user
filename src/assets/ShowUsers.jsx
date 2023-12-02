/* eslint-disable react/prop-types */
import "./ShowUsers.css";

function ShowUsers({ setShowModal }) {
  return (
    <>
      <div className="showUsers flex">
        <h1 className="noUsers">No Users</h1>
      </div>
      <div
        className="addUsers flex"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <h3>Create User</h3>
      </div>
    </>
  );
}

export default ShowUsers;
