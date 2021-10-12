import React from 'react'
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {

	toast.configure()
	function sendEmail(e){
		e.preventDefault();	
	
		emailjs.sendForm("service_xxxztpp","template_v79l1b2",e.target,"user_aUfO9xWoraVDrtpXOEK8T")
		.then(res=>{
			console.log(res);
			toast("Your form is submitted successfully",{position : 'top-center'});
			document.getElementById("btnsubmit").value = ""; 
		}).catch( err=> console.log(err));
		
	}
	return (
		<section className="c-contact" id="contact">
			<div className="l-container" >
				<h2 data-aos = "fade-left">Contact</h2>
				<form className="c-contact__form" action="" onSubmit={sendEmail}>
					<label htmlFor="">Name</label>
					<input type="text" name = "name"/>
					<label htmlFor="">Email</label>
					<input type="email" name="useremail" id=""/>
					<label htmlFor="">Message</label>
					<textarea rows="10" name = "message"></textarea>
					<button type="submit">Submit</button>
				</form>

			</div>
		</section>
	)
}


export default Contact