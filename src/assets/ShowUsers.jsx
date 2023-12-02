/* eslint-disable react/prop-types */
import "./ShowUsers.css";

function ShowUsers({ setShowModal, userInform }) {
  return (
    <>
      <div className={userInform.length ? "hidden" : "showUsers flex"}>
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
      <div className="users">
        {userInform.map((inform, i) => {
          return (
            <div className="user flex" key={i}>
              <div className="userImg">
                <img src={inform.imgURL} alt="User Image" />
              </div>
              <div className="userName userItems">
                <h1>
                  {inform.firstName} {inform.lastName}, {inform.age} age
                </h1>
              </div>
              <div className="userFrom userItems">
                <h3>From: {inform.from}</h3>
              </div>
              <div className="userJob userItems">
                <h3>Job: {inform.job}</h3>
              </div>
              <div className="userGender userItems">
                <h3>Gender: {inform.gender}</h3>
              </div>
              <button className="userDel">Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowUsers;
