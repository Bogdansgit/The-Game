import { IShape } from "../../interfaces/shape";

export const storage: IShape[] = [
	{shapeName: 'triangleRight', shapeStyle: {
		'height': '0',
		'borderTop': '25px solid transparent',
		'borderLeft': '50px solid orange',
		'borderBottom': '25px solid transparent',
	}},
	{shapeName: 'circle', shapeStyle: {
		'width': '100px',
		'height': '100px',
		'background': 'red',
		'borderRadius': '50%',
	}},
	{shapeName: 'trapezoid', shapeStyle: {
		'borderBottom': '50px solid #555',
		'borderLeft': '25px solid transparent',
		'borderRight': '25px solid transparent',
		'height': '0',
		'width': '100px',
	}},
	{shapeName: 'rectangle', shapeStyle: {
		'height': '50px',
		'width': '100px',
		'backgroundColor': 'yellow',
	}},
	{shapeName: 'parallelogram', shapeStyle: {
		'width': '100px',
		'height': '50px',
		'transform': 'skew(20deg)',
		'background': 'blue',
	}},
	{shapeName: 'triangleUp', shapeStyle: {
		'width': '0',
		'height': '0',
		'borderLeft': '25px solid transparent',
		'borderRight': '25px solid transparent',
		'borderBottom': '50px solid green',
	}},
	{shapeName: 'triangleDown', shapeStyle: {
		'width': '0',
		'height': '0',
		'borderLeft': '25px solid transparent',
		'borderRight': '25px solid transparent',
		'borderTop': '50px solid #555',
	}},
	{shapeName: 'triangleLeft', shapeStyle: {
		'width': '0',
		'height': '0',
		'borderTop': '25px solid #555',
		'borderRight': '50px solid transparent',
		'borderBottom': '25px solid transparent',
	}},
	{shapeName: 'triangleRight', shapeStyle: {
		'width': '0',
		'height': '0',
		'borderTop': '25px solid blue',
		'borderLeft': '50px solid transparent',
		'borderBottom': '25px solid transparent',
	}},
];
