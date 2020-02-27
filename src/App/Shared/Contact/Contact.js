import React, { Component } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import {
	FaInstagram,
	FaTelegram,
	FaLinkedinIn,
	FaGithub,
	FaMobileAlt,
	FaRegEnvelope,
} from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			description: ''
		};
	}

	sendFeedback = (templateId, variables) => {
		window.emailjs
			.send('gmail', templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
			})
			.catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
	};

	render() {
		return (
			<div className="contact-main-container">
				<h2 className="contact-title">ارتباط با من</h2>
				<div className="row row-fix d-flex align-items-center justify-content-center">
					<div className="my-3 col-lg-6">
						<ScrollAnimation
							animateOnce={true}
							offset={50}
							animateIn="bounceInRight"
							className="contact-container"
						>
							<form
								className="form-container"
								onSubmit={(e) => {
									e.preventDefault();
									emailjs
										.sendForm(
											'mysite_feedback',
											'template_TgahJ8vR',
											e.target,
											'user_QfYKlyVWQe2V9qqDu4f6d'
										)
										.then(
											(result) => {
												console.log(result.text);
											},
											(error) => {
												console.log(error.text);
											}
										);
									this.setState({
										name: '',
										email: '',
										description: ''
									});
								}}
							>
								<div className="row row-fix">
									<div className="my-2 col-md-6">
										<input
											className="form-name"
											placeholder="اسمت رو بنویس"
											type="text"
											name="name"
											value={this.state.name}
											onChange={(e) => {
												this.setState({
													name: e.target.value
												});
											}}
										/>
									</div>
									<div className="my-2 col-md-6">
										<input
											className="form-email"
											placeholder="ایمیلت رو بنویس"
											type="email"
											name="email"
											value={this.state.email}
											onChange={(e) => {
												this.setState({
													email: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<textarea
									className="form-textArea"
									rows="4"
									placeholder="مطلب مورد نظرت رو بنویس..."
									name="description"
									value={this.state.description}
									onChange={(e) => {
										this.setState({
											description: e.target.value
										});
									}}
								/>
								<input className="form-submit" type="submit" value="ارسال" />
							</form>
						</ScrollAnimation>
					</div>
					<div className="my-3 col-lg-6">
						<ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight">
							<p className="contact-icons-text">
								اگه دوست داشتین میتونین من رو تو فضای مجازی دنبال کنید:
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							offset={50}
							animateIn="bounceInRight"
							className="d-flex align-items-center justify-content-center"
						>
							<a href="https://www.instagram.com/amirhosein_haerian/">
								<FaInstagram className="contact-icons" color="#c13584" />
							</a>
							<a href="https://t.me/AHaerian">
								<FaTelegram className="contact-icons" color="#0088cc" />
							</a>
							<a href="https://www.linkedin.com/in/amirhosein-haerian-665879153/">
								<FaLinkedinIn className="contact-icons" color="#0077b5" />
							</a>
							<a href="https://github.com/amirhossein-haerian">
								<FaGithub className="contact-icons" color="#333" />
							</a>
						</ScrollAnimation>
						<ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight">
							<p className="contact-icons-text my-3">یا از طریق تلفن و ایمیل با من در ارتباط باشید:</p>
							<p className="phone-mail">
								amirhoseinhaerian@gmail.com <FaRegEnvelope className="phone-mail-icon" />
							</p>
							<p className="phone-mail">
								09195326163 <FaMobileAlt className="phone-mail-icon" />
							</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
