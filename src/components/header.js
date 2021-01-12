import { css, StyleSheet } from 'aphrodite';

function Header(props) {
	return (
		<div className={css(style.header)}>
			<img className={css(style.logo)} src={props.src} alt="logo" />
			<button className={css(style.headerBtn)}>{props.btn}</button>
		</div>
	)
}

const style = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'baseline', 
		padding: '20px',
		'@media only screen and (min-width: 720px)': {
			padding: '80px'
		}
	},
	headerBtn: {
		borderRadius: '45px',
		width: '100px',
		border: '1px solid hsl(322, 100%, 66%)',
		backgroundColor: '#fff',
		color: 'hsl(322, 100%, 66%)',
		padding: '6px',
		fontSize: '12px',
		'@media only screen and (min-width: 720px)': {
			width: '200px',
			fontSize: '24px',
			padding: '12px'
		}
	},
	logo: {
		width: '110px',
		'@media only screen and (min-width: 720px)': {
			width: '280px'	
		}
	}
})

export default Header;
