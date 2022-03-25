import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faCirclePause,faTrash, faPhone, faEnvelope, faExclamation } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import "./Employees.css";
Modal.setAppElement(document.getElementById("employees"));
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Mai Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Present",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Absent",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "On Leave",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Holiday",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Weekend",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Present",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Absent",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "On Leave",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Holiday",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Weekend",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Present",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Absent",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "On Leave",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Holiday",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Weekend",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Present",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Absent",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "On Leave",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Holiday",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
    {
      id: uuidv4(),
      name: "Sara Khaled Ahmed",
      role: "HR Head",
      team: "Business Development",
      status: "Weekend",
      src: "../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    },
  ]);
  const [searchVal, setSearchVal] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="employees">
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button onClick={openModal}>+ Add new</button>
      </div>
      <div className="d-flex flex-wrap">
        {employees
          .filter((employee) => {
            if (searchVal === "") {
              return employee;
            } else if (
              employee.name.toLowerCase().includes(searchVal.toLowerCase())
            ) {
              return employee;
            }
          })
          .map((employee) => {
            return (
              <div className="employees__card" key={employee.id}>
                <div className="d-flex employee-flex-direction">
                  <div className="employee-img">
                    <img src={require("../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")} alt={employee.name} />
                    <div>
                      <FontAwesomeIcon className="icon" icon={faPen} />
                      <FontAwesomeIcon className="icon" icon={faCirclePause} />
                      <FontAwesomeIcon className="icon clickable" icon={faTrash} onClick={(e)=>{setEmployees(employees.filter((elem)=> elem.id != employee.id))}} />
                    </div>
                  </div>

                  <div className="employee-info">
                    <h2 className="employee-name">{employee.name}</h2>
                    <p className="employee-role">{employee.role}</p>
                    <p className="employee-team">{employee.team}</p>
                    <div className="d-flex justify-content-between">
                      <p className={`employee-status bg-${employee.status.replace(/ /g, "")}`}>
                        {employee.status}
                      </p>
                      <div className="d-flex">
                        <div className="right-icons justify-content-center align-items-center">
                          <FontAwesomeIcon className="right-icon" icon={faEnvelope} />
                        </div>
                        <div className="right-icons justify-content-center align-items-center">
                          <FontAwesomeIcon className="right-icon" icon={faPhone} />
                        </div>
                        <div className="right-icons justify-content-center align-items-center box-shadow">
                          <FontAwesomeIcon className="right-icon" icon={faExclamation} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Employee</h2> */}
      </Modal>
    </div>
  );
};

export default Employees;
