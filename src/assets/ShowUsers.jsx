/* eslint-disable react/prop-types */
import "./ShowUsers.css";

function ShowUsers({ setShowModal, usersBe }) {
  return (
    <>
      <div className={usersBe ? "hidden" : "showUsers flex"}>
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
        <div className="user flex">
          <div className="userImg">
            <img
              src="https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/12/np_file_200271.jpeg"
              alt="User Image"
            />
          </div>
          <div className="userName userItems">
            <h1>Leo Messi, 36 age</h1>
          </div>
          <div className="userFrom userItems">
            <h3>From: Argentina</h3>
          </div>
          <div className="userGender userItems">
            <h3>Gender: male</h3>
          </div>
          <button className="userDel">Delete</button>
        </div>
      </div>
    </>
  );
}

export default ShowUsers;
