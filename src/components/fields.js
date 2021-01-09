import Button from './button';

function Fields(props) {
	console.log(props.data)
  return (
		<>
			{
				props.data.map(i => {
					return (
						<div>
							<h1>{i.title}</h1>
							<p>{i.text}</p>
						</div>
					)
				})
			}
		</>
	)
};

//teste

export default Fields;
