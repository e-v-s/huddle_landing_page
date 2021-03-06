import { css, StyleSheet } from 'aphrodite';

import Button from './button';
import Images from './images';
import Icons from './icons';

function Fields(props) {

  return (
		<div>
		{
			props.data[0].title ? 
			<div>
				<div className={css(style.section)}>
					<h1 className={css(style.title)}>{props.data[0].title}</h1>
					<p className={css(style.text)}>{props.data[0].text}</p>
					<Button />
				</div>
				<Images alt="screen mockup" src="https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/screen-mockups.svg?alt=media&token=56f0cf14-9f04-4558-8459-ba723bc5ded4" />
				<div className={css(style.numbersSection)}>
					<div className={css(style.numberSection)}>
						<Icons src="https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/icon-communities.svg?alt=media&token=7bb8f86e-7d68-4774-b26f-8817f034d80d" />
						<h1 className={css(style.number)}>{props.data[1].title}</h1>
						<p className={css(style.textNumber)}>{props.data[1].text}</p>
					</div>
					<div>
						<Icons src="https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/icon-messages.svg?alt=media&token=a426adf3-baad-44c5-a29c-d213d5edadc9" />
						<h1 className={css(style.number2)}>{props.data[2].title}</h1>
						<p className={css(style.textNumber)}>{props.data[2].text}</p>
					</div>
				</div>
				<div className={css(style.blueSectionContainer)}>
					<Images alt="people chatting" src="https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/illustration-grow-together.svg?alt=media&token=b7d968e3-f139-42a0-bb97-4ebff887c054" style={{backgroundColor: '#F6FBFF'}} styleBackground={{backgroundColor: '#F6FBFF'}} />
					<div className={css(style.blueSection)}>
						<h1 className={css(style.title)}>{props.data[3].title}</h1>
						<p className={css(style.text2)}>{props.data[3].text}</p>
					</div>
				</div>
				<div className={css(style.backgroundSection3)}></div>
				</div> : null
		}
		</div>
	)
}

const style = StyleSheet.create({
	section: {
		padding: '16px',
		paddingTop: '40px',
		textAlign: 'center'
	},
	title: {
		fontFamily: `'Poppins', sans-serif`,
		fontWeight: '700',
		fontSize: '24px',
		color: 'hsl(192, 100%, 9%)',
		'@media only screen and (min-width: 720px)': {
			fontSize: '64px',
		},
	},
	text: {
		fontFamily: `'Open Sans', sans-serif`,
		fontWeight: '300',
		fontSize: '14px',
		padding: '14px',
		color: 'hsl(192, 100%, 9%)',
		'@media only screen and (min-width: 720px)': {
			fontSize: '24px',
			width: '38%',
			margin: '0 auto'
		}
	},
	text2 : {
		fontFamily: `'Open Sans', sans-serif`,
		fontWeight: '300',
		fontSize: '14px',
		padding: '14px',
		color: 'hsl(192, 100%, 9%)',
		'@media only screen and (min-width: 720px)': {
			fontSize: '20px',
			width: '80%',
			textAlign: 'left',
		}
	},
	numbersSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/bg-section-top-mobile-1.svg?alt=media&token=08164d89-5b46-422c-97b8-77ff6e61426e)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'bottom',
		paddingBottom: '120px',
		backgroundSize: 'cover',
		'@media only screen and (min-width: 720px)': {
			backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/bg-section-top-desktop-1.svg?alt=media&token=9f511305-29b3-41c0-9c05-4f733a953533)',
			backgroundSize: '100%',
			backgroundPosition: 'bottom',
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'baseline'
		}
	},
	numberSection: {
		paddingBottom: '80px',
		marginTop: '40px'
	},
	number: {
		fontSize: '64px',
		fontFamily: `'Open Sans', sans-serif`,
		margin: '0 auto',
		color: 'hsl(192, 100%, 9%)',
		'@media only screen and (min-width: 720px)': {
			fontSize: '100px',
		}
	},
	number2: {
		fontSize: '54px',
		fontFamily: `'Open Sans', sans-serif`,
		margin: '0 auto',
		color: 'hsl(192, 100%, 9%)',
		'@media only screen and (min-width: 720px)': {
			fontSize: '100px',
		}
	},
	textNumber: {
		textAlign: 'center',
		marginTop: '8px',
		color: 'grey',
		'@media only screen and (min-width: 720px)': {
			fontSize: '26px',
			paddingBottom: '120px'
		}
	},
	blueSectionContainer: {
		'@media only screen and (min-width: 720px)': {
			display: 'flex',
			flexDirection: 'row-reverse',
		}
	},
	blueSection: {
		paddingBottom: '120px',
		backgroundColor: '#F6FBFF',
		padding: '16px',
		textAlign: 'center',
		'@media only screen and (min-width: 720px)': {
			paddingTop: '10%',
			textAlign: 'left',
			paddingLeft: '120px',
		}
	},
	backgroundSection3: {
		backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/bg-section-bottom-mobile-2.svg?alt=media&token=d6351435-a93d-4ed3-be26-9de0714bded6)',
		backgroundRepeat: 'no-repeat',
		paddingBottom: '120px',
		backgroundSize: 'cover',
		'@media only screen and (min-width: 720px)': {
			backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/huddle-e2c19.appspot.com/o/bg-section-bottom-desktop-2.svg?alt=media&token=99bf59a0-b187-496d-95a8-39f1083021ec)',
			backgroundSize: 'cover',
		}
	}
})

export default Fields;
