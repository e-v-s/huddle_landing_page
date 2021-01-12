import { css, StyleSheet } from 'aphrodite';

function Images(props) {
	return (
		<>
			<img className={css(style.img)} alt={props.alt} src={props.src} />
		</>
	)
};

const style = StyleSheet.create({
	img: {
		width: '84%',
		display: 'block',
		margin: '80px auto'
	},
});

export default Images;
