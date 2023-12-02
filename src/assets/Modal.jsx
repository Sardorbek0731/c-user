import "./Modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="overlay flex">
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
