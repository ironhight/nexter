import Realtor1 from '../../assets/img/realtor-1.jpeg';
import Realtor2 from '../../assets/img/realtor-2.jpeg';
import Realtor3 from '../../assets/img/realtor-3.jpeg';

const Realtors = () => (
	<div class="realtors">
		<h3 class="heading-3">Top 3 Realtors</h3>
		<div class="realtors__list">
			<img src={Realtor1} alt="Realtor 1" class="realtors__img" />
			<div class="realtors__details">
				<h4 class="heading-4 heading-4--light">Erik Feinman</h4>
				<p class="realtors__sold">245 houses sold</p>
			</div>

			<img src={Realtor2} alt="Realtor 2" class="realtors__img" />
			<div class="realtors__details">
				<h4 class="heading-4 heading-4--light">Kim Brown</h4>
				<p class="realtors__sold">212 houses sold</p>
			</div>

			<img src={Realtor3} alt="Realtor 3" class="realtors__img" />
			<div class="realtors__details">
				<h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
				<p class="realtors__sold">198 houses sold</p>
			</div>
		</div>
	</div>
);

export default Realtors;
