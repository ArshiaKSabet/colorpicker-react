import ColorDisplay from './ColorDisplay';
import ColorPicker from './ColorPicker';
import { useState } from 'react';

const Color = (props) => {
	const [color, setColor] = useState('#ff0000');

	return (
		<div>
			<ColorDisplay color={color} />
			<ColorPicker setColor={setColor} color={color} />
		</div>
	);
};

export default Color;
