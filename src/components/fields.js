import { css, StyleSheet } from 'aphrodite';

import Button from './button';
import Images from './images';
// import screenMockup  from 'gs://huddle-e2c19.appspot.com/screen-mockups.svg';

function Fields(props) {
  return (
		<div>
			<div className={css(style.section)}>
				<h1 className={css(style.title)}>{props.data[0].title}</h1>
				<p className={css(style.text)}>{props.data[0].text}</p>
				<Button />
			</div>
			<Images alt="screen mockup" src="https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/screen-mockups.svg?alt=media&token=56f0cf14-9f04-4558-8459-ba723bc5ded4" />
			{
				props.data.slice(1,3).map(i => {
					return (
						<div className={css(style.section)}>
							<h1 className={css(style.title)}>{i.title}</h1>
							<p className={css(style.text)}>{i.text}</p>
						</div>
					)
				})
			}
		</div>
	)
}

const style = StyleSheet.create({
	section: {
		padding: '16px',
		marginTop: '40px',
		textAlign: 'center'
	},
	title: {
		fontFamily: `'Poppins', sans-serif`,
		fontWeight: '700',
		fontSize: '24px',
	},
	text: {
		fontFamily: `'Open Sans', sans-serif`,
		fontWeight: '300',
		fontSize: '14px',
		padding: '14px'
	}
})

export default Fields;
