import Story1 from '../../assets/img/story-1.jpeg';
import Story2 from '../../assets/img/story-2.jpeg';

const Story = () => (
	<>
		<div class="story__pictures">
			<img src={Story1} alt="Couple with new house" class="story__img--1" />
			<img src={Story2} alt="New house" class="story__img--2" />
		</div>
		<div class="story__content">
			<h3 class="heading-3 mb-sm">Happy Customers</h3>
			<h2 class="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
			<p class="story__text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
				voluptatibus. Quidem consequatur harum volupta!
			</p>
			<button class="btn">Find your own home</button>
		</div>
	</>
);

export default Story;
