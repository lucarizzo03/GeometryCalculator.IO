import React, { useState } from 'react';
import Area from '../utils/area';
import Perimeter from '../utils/perimeter';
import Volume from '../utils/volume';

const GeometryCalculator = () => {
    const [shape, setShape] = useState('circle');
    const [dimensions, setDimensions] = useState({ radius: '', side: '', length: '', width: '', base: '', height: '', a: '', b: '', c: '', d: '' });
    const [results, setResults] = useState({ area: '', perimeter: '', volume: '' });

    const areaCalculator = new Area();
    const perimeterCalculator = new Perimeter();
    const volumeCalculator = new Volume();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDimensions(prev => ({ ...prev, [name]: value }));
    };

    const calculate = () => {
        let area = 0;
        let perimeter = 0;
        let volume = 0;

        switch (shape) {
            case 'circle':
                const radius = parseFloat(dimensions.radius);
                area = areaCalculator.circleArea(radius);
                perimeter = perimeterCalculator.circlePerim(radius);
                break;
            case 'square':
                const side = parseFloat(dimensions.side);
                area = areaCalculator.squareArea(side);
                perimeter = perimeterCalculator.squarePerim(side);
                volume = volumeCalculator.cubeVol(side); 
                break;
            case 'rectangle':
                const length = parseFloat(dimensions.length);
                const width = parseFloat(dimensions.width);
                area = areaCalculator.rectArea(length, width);
                perimeter = perimeterCalculator.rectPerim(length, width);
                break;
            case 'triangle':
                const base = parseFloat(dimensions.base);
                const height = parseFloat(dimensions.height);
                area = areaCalculator.triangleArea(base, height);
                perimeter = perimeterCalculator.trianglePerim(parseFloat(dimensions.a), parseFloat(dimensions.b), parseFloat(dimensions.c));
                break;
            case 'parallelogram':
                const pBase = parseFloat(dimensions.base);
                const pHeight = parseFloat(dimensions.height);
                area = areaCalculator.parallArea(pBase, pHeight);
                perimeter = perimeterCalculator.parallPerim(parseFloat(dimensions.a), parseFloat(dimensions.b));
                break;
            case 'trapezoid':
                const b1 = parseFloat(dimensions.a);
                const b2 = parseFloat(dimensions.b);
                const tHeight = parseFloat(dimensions.height);
                area = areaCalculator.trapArea(b1, b2, tHeight);
                perimeter = perimeterCalculator.trapazoidPerim(parseFloat(dimensions.a), parseFloat(dimensions.b), parseFloat(dimensions.c), parseFloat(dimensions.d));
                break;
            case 'ellipse':
                const a = parseFloat(dimensions.a);
                const b = parseFloat(dimensions.b);
                area = areaCalculator.ellipseArea(a, b);
                break;
            case 'cube':
                const cubeSide = parseFloat(dimensions.side);
                volume = volumeCalculator.cubeVol(cubeSide);
                break;
            case 'cylinder':
                const cylRadius = parseFloat(dimensions.radius);
                const cylHeight = parseFloat(dimensions.height);
                volume = volumeCalculator.cylinderVol(cylRadius, cylHeight);
                break;
            case 'cone':
                const coneRadius = parseFloat(dimensions.radius);
                const coneHeight = parseFloat(dimensions.height);
                volume = volumeCalculator.coneVol(coneRadius, coneHeight);
                break;
            case 'pyramid':
                const pyramidBase = parseFloat(dimensions.base);
                const pyramidHeight = parseFloat(dimensions.height);
                volume = volumeCalculator.pyramidVol(pyramidBase, pyramidHeight);
                break;
            default:
                break;
        }

        setResults({ area, perimeter, volume });
    };

    return (
        <div>
            <h1>Geometry Calculator</h1>
            <select value={shape} onChange={(e) => setShape(e.target.value)}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="parallelogram">Parallelogram</option>
                <option value="trapezoid">Trapezoid</option>
                <option value="ellipse">Ellipse</option>
                <option value="cube">Cube</option>
                <option value="cylinder">Cylinder</option>
                <option value="cone">Cone</option>
                <option value="pyramid">Pyramid</option>
            </select>

            {shape === 'circle' && (
                <div>
                    <label>Radius: 
                        <input
                            type="number"
                            name="radius"
                            value={dimensions.radius}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'square' && (
                <div>
                    <label>Side Length: 
                        <input
                            type="number"
                            name="side"
                            value={dimensions.side}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'rectangle' && (
                <div>
                    <label>Length: 
                        <input
                            type="number"
                            name="length"
                            value={dimensions.length}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Width: 
                        <input
                            type="number"
                            name="width"
                            value={dimensions.width}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'triangle' && (
                <div>
                    <label>Base: 
                        <input
                            type="number"
                            name="base"
                            value={dimensions.base}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side A: 
                        <input
                            type="number"
                            name="a"
                            value={dimensions.a}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side B: 
                        <input
                            type="number"
                            name="b"
                            value={dimensions.b}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side C: 
                        <input
                            type="number"
                            name="c"
                            value={dimensions.c}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'parallelogram' && (
                <div>
                    <label>Base: 
                        <input
                            type="number"
                            name="base"
                            value={dimensions.base}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side A: 
                        <input
                            type="number"
                            name="a"
                            value={dimensions.a}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side B: 
                        <input
                            type="number"
                            name="b"
                            value={dimensions.b}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'trapezoid' && (
                <div>
                    <label>Base 1: 
                        <input
                            type="number"
                            name="a"
                            value={dimensions.a}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Base 2: 
                        <input
                            type="number"
                            name="b"
                            value={dimensions.b}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side A: 
                        <input
                            type="number"
                            name="a"
                            value={dimensions.a}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side B: 
                        <input
                            type="number"
                            name="b"
                            value={dimensions.b}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side C: 
                        <input
                            type="number"
                            name="c"
                            value={dimensions.c}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Side D: 
                        <input
                            type="number"
                            name="d"
                            value={dimensions.d}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'ellipse' && (
                <div>
                    <label>Major Axis (a): 
                        <input
                            type="number"
                            name="a"
                            value={dimensions.a}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Minor Axis (b): 
                        <input
                            type="number"
                            name="b"
                            value={dimensions.b}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'cube' && (
                <div>
                    <label>Side Length: 
                        <input
                            type="number"
                            name="side"
                            value={dimensions.side}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'cylinder' && (
                <div>
                    <label>Radius: 
                        <input
                            type="number"
                            name="radius"
                            value={dimensions.radius}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'cone' && (
                <div>
                    <label>Radius: 
                        <input
                            type="number"
                            name="radius"
                            value={dimensions.radius}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            {shape === 'pyramid' && (
                <div>
                    <label>Base Area: 
                        <input
                            type="number"
                            name="base"
                            value={dimensions.base}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Height: 
                        <input
                            type="number"
                            name="height"
                            value={dimensions.height}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            )}

            <button onClick={calculate}>Calculate</button>

            <div>
                <h2>Results</h2>
                {results.area !== '' && <p>Area: {results.area}</p>}
                {results.perimeter !== '' && <p>Perimeter: {results.perimeter}</p>}
                {results.volume !== '' && <p>Volume: {results.volume}</p>}
            </div>
        </div>
    );
};

export default GeometryCalculator;
