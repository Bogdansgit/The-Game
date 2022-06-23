import { useState } from 'react';
import { IShape } from '../../interfaces/shape';
import { storage } from '../Shape/const';
import { Shape } from '../Shape/Shape';
import './Table.scss';

export const Table: React.FC = () => {

	const [activeControl, setActiveControl] = useState<boolean>(false);
	const [displayShape, setDisplayShape] = useState<IShape[]>([]);
	const [error, setError] = useState<string>('')

	const errorText = 'Tут поки що немає фігур для видалення!!! Натисніть кнопку "+" ';

	const changeOnActiveControl = () => {
		setActiveControl(true);
	}

	const changeOffActiveControl = () => {
		setActiveControl(false);
		setDisplayShape([]);
		setError('');
	}

	const removeRanromShape = () => {
		if (displayShape.length === 0) {
			setError(errorText);
			return;
		} else {
			setDisplayShape(displayShape.filter(el => el
				.shapeName !== displayShape[Math.floor(Math.random() * displayShape.length + 0)].shapeName));
		}
	}

	const addRandomShape = () => {
		setDisplayShape([
			...displayShape,
			storage[Math.floor(Math.random() * storage.length + 0)]
		])
		setError('');
	}

	return (
		<div className='table'>
			<div className='screen'>
				<Shape displayShape={displayShape} />
				<div className='error'>{error}</div>
			</div>
			<div className='control'>
				<div className='item1'>
					{activeControl ? 
					<button
						name='stop'
							type='button'
							className='btn'
							onClick={changeOffActiveControl}
						>STOP</button> :
						<button
							type='button'
							className='btn'
							onClick={changeOnActiveControl}
						>START</button>}
				</div>
				{activeControl && 
					<div className='item2'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={removeRanromShape}
						>-</button>
						<div className='count'>{displayShape.length}</div>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={addRandomShape}
						>+</button>
					</div>
				}
			</div>
		</div>
	)
}
