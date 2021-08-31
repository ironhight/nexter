import { ReactComponent as IconGlobal } from '../../assets/img/icon-global.svg';
import { ReactComponent as IconTrophy } from '../../assets/img/icon-trophy.svg';
import { ReactComponent as IconMapPin } from '../../assets/img/icon-map-pin.svg';
import { ReactComponent as IconKey } from '../../assets/img/icon-key.svg';
import { ReactComponent as IconPresentation } from '../../assets/img/icon-presentation.svg';
import { ReactComponent as IconLock } from '../../assets/img/icon-lock.svg';

const Features = () => (
	<section className="features">
		<div className="feature">
			<IconGlobal className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
			<p className="feature__text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
				voluptatibus.
			</p>
		</div>

		<div className="feature">
			<IconTrophy className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">Only the best properties</h4>
			<p className="feature__text">
				Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
			</p>
		</div>

		<div className="feature">
			<IconMapPin className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
			<p className="feature__text">
				Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
			</p>
		</div>

		<div className="feature">
			<IconKey className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">New home in one week</h4>
			<p className="feature__text">
				Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			</p>
		</div>

		<div className="feature">
			<IconPresentation className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
			<p className="feature__text">
				Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur
				voluptatibus.
			</p>
		</div>

		<div className="feature">
			<IconLock className="feature__icon" />
			<h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
			<p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
		</div>
	</section>
);

export default Features;
