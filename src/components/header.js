function Header(props) {
	return (
		<>
			<img src={props.src} alt="logo" />
			<button>{props.btn}</button>
		</>
	)
}
export default Header;
