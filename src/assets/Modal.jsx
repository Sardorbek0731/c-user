import "./Modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="overlay flex">
        <div className="modalClose flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <form>
          <div className="modalTitle">
            <h1>Create New User</h1>
          </div>
          <div className="img input">
            <label className="flex">
              Image URL:
              <input type="text" />
            </label>
          </div>
          <div className="firstName input">
            <label className="flex">
              First Name:
              <input type="text" />
            </label>
          </div>
          <div className="lastName input">
            <label className="flex">
              Last Name:
              <input type="text" />
            </label>
          </div>
          <div className="age input">
            <label className="flex">
              Age:
              <input type="text" />
            </label>
          </div>
          <div className="from input">
            <label className="flex">
              From:
              <input type="text" />
            </label>
          </div>
          <div className="job input">
            <label className="flex">
              Job:
              <input type="text" />
            </label>
          </div>
          <div className="gender">
            <label className="flex">
              Gender:
              <div className="male genderItem flex">
                Male
                <input type="radio" name="gender" value="Male" />
              </div>
              <div className="feMale genderItem flex">
                Female
                <input type="radio" name="gender" value="Female" />
              </div>
            </label>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
