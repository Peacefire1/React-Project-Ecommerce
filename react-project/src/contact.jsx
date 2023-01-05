import {React} from "react";
import {Container} from "react-bootstrap";
// import {Icon} from "react-bootstrap-icons";
import {GeoAlt, Truck} from "react-bootstrap-icons"

function Contact(){
    return(
        <div className="contact container">
            
            <p>Need help? Call us: (+98) 0234 456 789</p>
            <div className="contact-end">
                <p> <GeoAlt/>  Our store</p>
                <p><Truck/> Track your order</p>           
            </div>
      
        </div>
    )
}

export default Contact;