import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Images/profile.jpeg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form>
          <div className="row">
            <div className="col-md-4">
              <img src={img} alt="" style={{ height: "500px" }} />
            </div>

            <div className="col-md-6">
              <div className="profile_head">
                <h6>Himanshu Verma</h6>
                <h5>Web developer</h5>
                <p className="profile-rating mt-3 mb-5">
                  {" "}
                  Ranking <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-button"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>



        <div className="row">


          {/* left side url   */}


          <div className="col-mg-4">
            <div className="profile-work">
              <p>work link</p>
            </div>
          </div>

             <div className="col-md-8 pl-5 about-info">
             <div className="tab-content profile-tab " id="myTabContent">
             <div className="tab-pane fade show active" id="home" role="tabpanel" >
               <div className="row">
                 <div className="col-md-6">
                   <label>User Id</label>
                 </div>

                 <div className="col-md-6">
                  <p>dsbflbafsigilbgflibasifh</p>
              
                 </div>
               </div>
    
               <div className="row">
                 <div className="col-md-6">
                   <label>Name</label>
                 </div>

                 <div className="col-md-6">
                  <p>Himanshu Verma</p>
              
                 </div>
               </div>

               <div className="row">
                 <div className="col-md-6">
                   <label>email</label>
                 </div>

                 <div className="col-md-6">
                  <p>Himan@gmail.com</p>
              
                 </div>
               </div>

               <div className="row">
                 <div className="col-md-6">
                   <label>Phone</label>
                 </div>

                 <div className="col-md-6">
                  <p>9827924979848</p>
              
                 </div>
               </div>

               <div className="row">
                 <div className="col-md-6">
                   <label>Profession</label>
                 </div>

                 <div className="col-md-6">
                  <p>Web Developer</p>
              
                 </div>
               </div>
             </div>
             </div>

             </div>


       
        </div>






        </form>
      </div>
    </>
  );
};

export default About;
