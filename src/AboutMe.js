import React, { Component } from 'react';
import './App.css';
import './extra/styles/aboutme.css';
import { FaQuoteRight } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';


class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="description-main-container">
				<h2 className="aboutme-title">درباره من</h2>
				<ScrollAnimation animateOnce={true} animateIn="bounceInRight" className="description-text-container">
					<FaQuoteLeft className="left-quote" />
					<FaQuoteRight className="right-quote" />
					<p className="description-text">
						امیرحسین حائریان هستم ، تهران بزرگ شدم ولی اصالتا یزدیم. متولد سال 1376 هستم و مجردم ، به علت
						حضور 30 ماهه پدرم در جبهه از خدمت سربازی معاف شدم و در تلاشم این فرصت دو ساله ای که برام به وجود
						اومده رو روی بهبود مهارت های کاریم تمرکز کنم.
					</p>
					<p className="description-text">
						فیلم دیدن علاقه اصلیمه و بیشتر وقتای آزادم رو در حال فیلم دیدن هستم همچنین سفر کردن و کسب تجربه
						های جدید رو هم دوست دارم و اگر شرایط فراهم باشه حتما به سفر میرم.
					</p>
					<p className="description-text">
						فارغ التحصیل رشته مهندسی فناوری اطلاعات (IT) هستم و علاقم به این رشته بر میگرده به دوران مدرسم
						که توی کلاس های اشنایی با کامپیوتر شرکت میکردم ، بعد از کنکور هم IT دانشگاه سمنان قبول شدم و هم
						IT دانشگاه آزاد واحد تهران جنوب که به توصیه خانواده و برای نزدیکی به خانواده دانشگاه آزاد رو
						انتخاب کردم.
					</p>
					<p className="description-text">
						دوران چهار ساله دانشگاه دورانی با تجربه های متفاوت و خیلی مفید برای من بود ، من قبل از دوران
						دانشگاه تجربه زیادی تو برنامه نویسی نداشتم و میشه گفت منطق برنامه نویسی رو با زبان C و سرفصل های
						دانشگاهی یاد گرفتم اما کم کم علاقم و همچنین شوق یادگیریم بیشتر شد و سعی میکردم با انجام دادن
						پروژه های درس های مختلف خودم رو به چالش بکشم حتی بعضا پروژه های بقیه رو هم انجام میدادم تا این
						که با چند تا از دوستام تصمیم گرفتیم کار کردن و تمرین کردن به صورت یک تیم رو تجربه کنیم که تجربه
						خیلی ارزشمندی بود. توی این کار های تیمی بود که بنا به نیاز مدتی به یادگیری توسعه Front-End مشغول
						شدم و این آغاز مسیرم بود!
					</p>
					<p className="description-text">
						دلیل انتخابم برای تبدیل شدن به یک Front-End Developer به این خاطر بود که احساس میکنم در این کار
						توانایی و استعداد دارم و همچنین وقتی با یک سایت یا اپلیکیشن کار میکنم راحتی و زیبایی اون برام
						خیلی با اهمیته و معتقدم اگر یک Front-End کار نتونه کارش رو درست انجام بده زحماتی که باقی در
						Back-End کشیدن دیده نمیشه به همین دلیل دوست دارم توانایی هام رو در این موضوع که برام دغدغه هست
						افزایش بدم.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateOnce={true} animateIn="bounceInRight" className='aboutme-bottom'>
					<div className="row row-fix d-flex justify-content-center align-items-center">
						<div className="col-lg-2">
							<img className="my-3 img-fluid aboutme-image" src={require('./image/personal.jpg')} />
						</div>
						<div className="col-lg-10">
							<div className="my-3 important-description-text-container">
								<p className="description-text">
									«مدت زمان خیلی زیادی نیست که دارم روی Front-End کار میکنم اما معتقدم حتی اگر مدت
									زمان زیادی هم روی Front-End کار کنم باز هم باید یاد بگیرم و اطلاعاتم رو بروز نگه
									دارم چرا که استفاده از تکنولوژی های به روزه که کار ها رو از هم متمایز میکنه»
								</p>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		);
	}
}

export default AboutMe;
