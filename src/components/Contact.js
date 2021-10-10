import React from 'react'

export const Contact = () => {
	return (
		<section className="c-contact" id="contact">
			<div className="l-container">
				<h2>Contact</h2>
				<form className="c-contact__form" action="">
					<label htmlFor="">Name</label>
					<input type="text"/>
					<label htmlFor="">Email</label>
					<input type="email" name="" id=""/>
					<label htmlFor="">Message</label>
					<textarea rows="10"></textarea>
					{/* <a href="#" className="btn-main-offer">contact me</a> */}
					<button type="submit">Submit</button>
				</form>

			</div>
		</section>
	)
}


export default Contact