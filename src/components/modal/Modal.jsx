/* eslint-disable react/prop-types */
import "./Modal.css";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Modal({ showModal, setShowModal, informsUsers }) {
  const imgURL = useRef(),
    firstName = useRef(),
    lastName = useRef(),
    age = useRef(),
    from = useRef(),
    job = useRef(),
    gender = useRef(),
    form = useRef();

  return (
    <div className="modal">
      <div className={showModal ? "overlay flex" : "hidden"}>
        <div
          className="modalClose flex"
          onClick={() => {
            setShowModal(false);
          }}
        >
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
        <form ref={form}>
          <div className="modalTitle">
            <h1>Create New User</h1>
          </div>
          <div className="img input">
            <label className="flex">
              Image URL:
              <input type="url" ref={imgURL} required />
            </label>
          </div>
          <div className="firstName input">
            <label className="flex">
              First Name:
              <input type="text" ref={firstName} required />
            </label>
          </div>
          <div className="lastName input">
            <label className="flex">
              Last Name:
              <input type="text" ref={lastName} required />
            </label>
          </div>
          <div className="age input">
            <label className="flex">
              Age:
              <input type="number" ref={age} required />
            </label>
          </div>
          <div className="from input">
            <label className="flex">
              From:
              <input type="text" ref={from} required />
            </label>
          </div>
          <div className="job input">
            <label className="flex">
              Job:
              <input type="text" ref={job} required />
            </label>
          </div>
          <div className="gender flex">
            Gender:
            <label className="genderItem flex">
              Male
              <input
                type="radio"
                required
                ref={gender}
                name="gender"
                value="Male"
              />
            </label>
            <label className="genderItem flex">
              Female
              <input type="radio" required name="gender" value="Female" />
            </label>
          </div>
          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
              const inform = {
                imgURL: imgURL.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                age: age.current.value,
                from: from.current.value,
                job: job.current.value,
                gender: gender.current.checked ? "Male" : "Female",
                id: uuidv4(),
              };

              console.log(inform);
              informsUsers(inform);

              form.current.reset();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
