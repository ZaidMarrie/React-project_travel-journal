import logo from "../assets/logo.svg";

function Header() {
	return (
		<header className="header flex align-items-center">
			<img src={logo} alt="globe illustration" className="header__logo" />
			<span className="header__text">my travel journal.</span>
		</header>
	);
}

export default Header;
