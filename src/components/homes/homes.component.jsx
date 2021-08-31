import House1 from '../../assets/img/house-1.jpeg';
import House2 from '../../assets/img/house-2.jpeg';
import House3 from '../../assets/img/house-3.jpeg';
import House4 from '../../assets/img/house-4.jpeg';
import House5 from '../../assets/img/house-5.jpeg';
import House6 from '../../assets/img/house-6.jpeg';
import { ReactComponent as IconHeartFull } from '../../assets/img/icon-heart-full.svg';
import { ReactComponent as IconMapPin } from '../../assets/img/icon-map-pin.svg';
import { ReactComponent as IconKey } from '../../assets/img/icon-key.svg';
import { ReactComponent as IconProfileMale } from '../../assets/img/icon-profile-male.svg';
import { ReactComponent as IconExpand } from '../../assets/img/icon-expand.svg';

const Homes = () => (
	<section className="homes">
		<div className="home">
			<img src={House1} alt="House 1" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Beautiful Familiy House</h5>
			<div className="home__location">
				<IconMapPin />
				<p>USA</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>5 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					325 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$1,200,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>

		<div className="home">
			<img src={House2} alt="House 2" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Modern Glass Villa</h5>
			<div className="home__location">
				<IconMapPin />
				<p>Canada</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>6 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					450 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$2,750,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>

		<div className="home">
			<img src={House3} alt="House 3" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Cozy Country House</h5>
			<div className="home__location">
				<svg>
					<use href="img/sprite.svg#icon-map-pin"></use>
				</svg>
				<p>UK</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>4 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					250 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$850,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>

		<div className="home">
			<img src={House4} alt="House 4" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Large Rustical Villa</h5>
			<div className="home__location">
				<IconMapPin />
				<p>Portugal</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>6 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					480 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$1,950,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>

		<div className="home">
			<img src={House5} alt="House 5" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Majestic Palace House</h5>
			<div className="home__location">
				<IconMapPin />
				<p>Germany</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>18 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					4230 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$9,500,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>

		<div className="home">
			<img src={House6} alt="House 6" className="home__img" />
			<IconHeartFull className="home__like" />
			<h5 className="home__name">Modern Familiy Apartment</h5>
			<div className="home__location">
				<IconMapPin />
				<p>Italy</p>
			</div>
			<div className="home__rooms">
				<IconProfileMale />
				<p>3 rooms</p>
			</div>
			<div className="home__area">
				<IconExpand />
				<p>
					180 m<sup>2</sup>
				</p>
			</div>
			<div className="home__price">
				<IconKey />
				<p>$600,000</p>
			</div>
			<button className="btn home__btn">Contact realtor</button>
		</div>
	</section>
);

export default Homes;
