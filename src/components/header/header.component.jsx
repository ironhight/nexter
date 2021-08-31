import LogoBbc from '../../assets/img/logo-bbc.png';
import LogoForbes from '../../assets/img/logo-forbes.png';
import LogoTechcrunch from '../../assets/img/logo-techcrunch.png';
import LogoBi from '../../assets/img/logo-bi.png';
import Logo from '../../assets/img/logo.png';

const Header = () => (
	<header className="header">
		<img src={Logo} alt="Nexter logo" className="header__logo" />
		<h3 className="heading-3">Your own home:</h3>
		<h1 className="heading-1">The ultimate personal freedom</h1>
		<button className="btn header__btn">View our properties</button>
		<div className="header__seenon-text">Seen on</div>
		<div className="header__seenon-logos">
			<img src={LogoBbc} alt="Seen on logo 1" />
			<img src={LogoForbes} alt="Seen on logo 2" />
			<img src={LogoTechcrunch} alt="Seen on logo 3" />
			<img src={LogoBi} alt="Seen on logo 4" />
		</div>
	</header>
);

export default Header;
