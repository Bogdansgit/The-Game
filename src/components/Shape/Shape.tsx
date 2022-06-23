import { IShape } from "../../interfaces/shape";

type Props = {
	displayShape: IShape[];
}

export const Shape: React.FC<Props> = ({displayShape}) => {

	// const [shapes, setShapes] = useState<IShape[]>([]);

	return (
		<>
			{displayShape.map(el => (
				<div key={el.shapeName} style={el.shapeStyle}></div>
			))}
		</>
	)
}