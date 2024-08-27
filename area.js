
class Area {
    
    circleArea = (radius) => {
        const area = Math.PI * Math.pow(radius, 2)
        return area
    }

    squareArea = (side) => {
        const area = Math.pow(side, 2)
        return area 
    }

    rectArea = (length, width) => {
        const area = length * width
        return area 
    }

    triangleArea = (base, height) => {
        const area = (0.5) * (base * height)
        return area
    }

    parallArea = (base, height) => {
        const area = base * height
        return area
    }

    trapArea = (b1, b2, height) => {
        const area = (0.5) * ((b1 + b2) * height)
        return area
    }

    ellipseArea = (a, b) => {
        const area = Math.PI * a * b
        return area
    }
}

export default Area