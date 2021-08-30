import LogoBbc from '../../assets/img/logo-bbc.png';
import LogoForbes from '../../assets/img/logo-forbes.png';
import LogoTechcrunch from '../../assets/img/logo-techcrunch.png';
import LogoBi from '../../assets/img/logo-bi.png';

const Header = () => (
	<header class="header">
		<img src="img/logo.png" alt="Nexter logo" class="header__logo" />
		<h3 class="heading-3">Your own home:</h3>
		<h1 class="heading-1">The ultimate personal freedom</h1>
		<button class="btn header__btn">View our properties</button>
		<div class="header__seenon-text">Seen on</div>
		<div class="header__seenon-logos">
			<img src={LogoBbc} alt="Seen on logo 1" />
			<img src={LogoForbes} alt="Seen on logo 2" />
			<img src={LogoTechcrunch} alt="Seen on logo 3" />
			<img src={LogoBi} alt="Seen on logo 4" />
		</div>
	</header>
);

export default Header;
