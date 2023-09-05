import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <>
      <div className="contact_info mt-3" >

        <div className="container-fluid" >

          <div className="row">
            <div className="col-md-10 offset-lg-1 d-flex justify-content-between ">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    <h6>Phone</h6>
                  </div>

                  <div className="contact_info_text">+484638363837</div>
                </div>
              </div>

              {/* email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    <h6>Email</h6>
                  </div>

                  <div className="contact_info_text">
                    vermahim6356@gmail.com
                  </div>
                </div>
              </div>

              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    <h6>Address</h6>
                  </div>

                  <div className="contact_info_text">delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* contact us form  */}




      <div className="contact_form">
        <div className="container">
         <div className="row">
           <div className="col-lg-10 offset-lg-1">
           <div className="contact_form_container py-5">
             <div className="contact_form_title">
               <h6>Get in touch</h6>
             </div>

             <form  id="contact_form ">

             <div className="contact_form_name d-flex justify-content-evenly align-items-between">

               <input type="text" id="contact_form_name" className="contact_form_name" placeholder="Your name" required="true" />
               <input type="email" id="contact_form_email" className="contact_form_email" placeholder="Your email" required="true" />

               <input type="number" id="contact_form_phone" className="contact_form_phone" placeholder="Your phone" required="true" />

             </div>


             <div className="contact_form_text mt-4">
               <textarea className="text_field contact_form_message" placeholder="Message" id="" cols="75" rows="10"></textarea>
             </div>
             <div className="contact_form_button">
               <button type="submit" className="button contact_submit_button">Send Message</button>
             </div>




             </form>


           </div>

           </div>
         </div>


        </div>
      </div>
    </>
  );
};

export default Contact;
