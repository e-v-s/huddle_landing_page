import { css, StyleSheet } from 'aphrodite';

function Icons(props) {
	return (
		<div>
			<img className={css(style.icons)} src={props.src} alt={props.alt} />
		</div>
	)
}

const style = StyleSheet.create({
	icons: {
		width: '30px',
		'@media only screen and (min-width: 720px)': {
			width: '40px',
		}
	}
})

export default Icons;
