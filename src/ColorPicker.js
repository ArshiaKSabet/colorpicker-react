const ColorPicker = ({ setColor, color }) => {
	return (
		<div>
			<input
				type="color"
				onChange={(event) => {
					setColor(event.target.value);
				}}
			/>
			<div>Chosen color: {color}</div>
		</div>
	);
};

export default ColorPicker;
