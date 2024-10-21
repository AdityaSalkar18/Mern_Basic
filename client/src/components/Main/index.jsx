import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const NavbarS = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    
    <header className={`${styles.header} d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom`}>
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <span className={`fs-4 mx-3 ${styles.webtitle}`}>Library Management </span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navlink">
        <li><Link to="/" className="nav-link px-2 link-light">Home</Link></li>
        <li><Link to="/bookrec" className="nav-link px-2 link-light">BookRec</Link></li>
        <li><Link to="/useraccount" className="nav-link px-2 link-light">Account</Link></li>
       
        <li><Link to="/mydetails" className="nav-link px-2 link-light">MyDetails</Link></li>
      </ul>
      <div>
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>
      </div>

      <div className="dropdown text-end px-3">
        <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="mdo" width="38" height="38" className="rounded-circle" />
        </Link>
        <ul className="dropdown-menu text-small">
          <li><Link to="#" className="dropdown-item">Settings</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link to="/useraccount" className="dropdown-item">Account</Link></li>
          <li><Link to="/notifi" className="dropdown-item">Notification</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link to="#" className="dropdown-item" onClick={handleLogout}>Sign out</Link></li>
        </ul>
      </div>
    </header>
    



    
  );
};

export default NavbarS;
