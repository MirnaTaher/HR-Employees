import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHolding,faUser ,faDashboard, faDisplay, faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

const Sidbar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-item">
        <FontAwesomeIcon className="sidebar-icon" icon={faDashboard} />
        <p>Dashboard</p>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon className="sidebar-icon" icon={faDisplay} />
        <p>Workplace</p>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon className="sidebar-icon" icon={faMugSaucer} />
        <p>Holidays</p>
      </div>
      <div className='selected sidebar-item'>
        <FontAwesomeIcon className="sidebar-icon" icon={faUser} />
        <p>Employees</p>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon className="sidebar-icon" icon={faHandsHolding} />{" "}
        <p>Inbound Requests</p>
      </div>
    </div>
  );
};

export default Sidbar;
