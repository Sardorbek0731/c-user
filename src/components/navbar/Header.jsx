/* eslint-disable react/prop-types */
import "./Header.css";

function Header({ userInform }) {
  return (
    <div className="header flex">
      <div className="logo">
        <h1>
          <span className="spanLogo">C</span>User
        </h1>
      </div>
      <div className="howManyUsers">
        <h2>
          {userInform.length ? "You have: " + userInform.length : "No user :("}
        </h2>
      </div>
    </div>
  );
}

export default Header;
