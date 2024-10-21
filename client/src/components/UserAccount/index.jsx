import React , {useEffect, useState}from 'react'
import { Link } from "react-router-dom"; 

import {FaUserEdit} from  'react-icons/fa';
import NavbarS from '../Main';


// import  { useEffect, useState } from 'react';
// import axios from 'axios';

import styles from "./styles.module.css";


export const UserAccount = () => {

  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    bio: "",
    at: "",
    phone: "",
  })
  useEffect(()=>{
    const getProfile = async () => {
      const url = "http://localhost:8080/api/profile/get-my-profile"; // Update the URL to your backend server running on port 8080
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setUserProfile(data);
    }
    getProfile();
  },[])

 


  return (
    <div>
      <NavbarS/>
    
    {/* <h1>This is User Profile Page </h1> */}
    {/* <Link to="/profile"><FaUserEdit/></Link> */}


    

          
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-4 mb-sm-5">
          <div className={`card ${styles.profilecard}`}>
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
            
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                 <img 
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="..."
                  />
                 <Link to="/profile" style={{ fontSize: '20px',}}><FaUserEdit/></Link>
                </div>
                <div className="col-lg-6 px-xl-10">
                 
                  
                  <ul className="list-unstyled mb-1-9">
                    <li className="mb-3 mb-xl-3 display-28">
                      {/* <span className="display-26 text-secondary me-2 font-weight-600">
                        Position:
                      </span> */}
                      <h3 >
                      {/* {profile.name} */}
                      {userProfile.name}
                    </h3>
                    </li>
                    <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                        Phone:
                      </span>
                      {userProfile.phone}
                    </li>
                    
                    <li className="mb-3 mb-xl-3 display-28">
                      <span className="display-26 text-secondary me-2 font-weight-600">
                        Email:
                      </span>
                      {/* {profile.email} */}
                      {userProfile.email}
                    </li>
                    <li className="mb-3 mb-xl-3 display-28">
                      <span className="display-26 text-secondary me-2 font-weight-600">
                        Account:
                      </span>
                      {/* {profile.website} */}
                      {userProfile.at}
                    </li>
                    <li className="display-28">
                      {/* <span className="display-26 text-secondary me-2 font-weight-600">
                        Phone:
                      </span>
                      507 - 541 - 4567 */}
                    </li>
                  </ul>
                  
                </div>
                
              </div>
              
              <div className="mt-4" >
              <span className="display-26 text-secondary me-2 font-weight-600"> Bio:</span>
               <p>{userProfile.bio}</p>
              
             </div>
            </div>
          </div>
        </div>
        
  


        
      </div>
    </div>
                  
          </div>
     
   
   
  )
}

export default UserAccount;


