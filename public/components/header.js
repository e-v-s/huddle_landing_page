import Image from 'next/image'

export default function Header(props) {
  return (
		<div>
			<Image src="/logo.svg" width='100' height='60' />
			<button>{props.btn}</button>
		</div>
	)
}