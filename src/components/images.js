import { css, StyleSheet } from 'aphrodite';

function Images(props) {
	return (
		<div className={css(style.imgContainer)} style={props.styleBackground}>
			<img className={css(style.img)} alt={props.alt} src={props.src} style={props.style} />
		</div>
	)
};

const style = StyleSheet.create({
	imgContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		padding: '100px 0'
	},
	img: {
		width: '84%',
		'@media only screen and (min-width: 720px)': {
			width: '70%'
		}
	},
});

export default Images;
