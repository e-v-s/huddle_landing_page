import { css, StyleSheet } from 'aphrodite';

function Button(props) {
	return (
		<>
			<button className={css(style.getStartedBtn)}>Get Started For Free</button>
		</>
	)
}

const style = StyleSheet.create({
	getStartedBtn: {
		borderRadius: '45px',
		backgroundColor: 'hsl(322, 100%, 66%)',
		color: '#fff',
		fontFamily: `'Poppins', sans-serif`,
		fontSize: '12px',
		width: '220px',
		border: 'none',
		padding: '12px',
		marginTop: '20px',
		'@media only screen and (min-width: 720px)': {
			width: '440px',
			fontSize: '22px',
			padding: '24px',
			marginTop: '40px'
		}
	}
});

export default Button;
