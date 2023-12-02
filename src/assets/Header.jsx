import "./Header.css";

function Header() {
  return (
    <div className="header flex">
      <div className="logo">
        <h1>
          <span className="spanLogo">C</span>User
        </h1>
      </div>
      <div className="howManyUsers">
        <h2>No users :(</h2>
      </div>
    </div>
  );
}

export default Header;
