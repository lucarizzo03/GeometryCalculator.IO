
class Volume {
    
    circleVol = (size) => {
        const vol = Math.pow(size, 3)
        return vol
    }

    squareVol = (l, w, h) => {
        const vol = l * w * h
        return vol
    }

    sphereVol = (radius) => {
        const vol = ((Math.PI * (4/3))) * (Math.pow(radius, 3))
        return vol
    }

    cylinderVol = (radius, height) => {
        const vol = (Math.PI) * (Math.pow(radius, 2)) * height
        return vol
    }

    coneVol = (radius, height) => {
        const vol = ((Math.PI) * (1/3)) * (Math.pow(radius, 2)) * height
        return vol
    }

    pyramidVol = (base, height) => {
        const vol = (1/3) * base * height
        return vol
    }

    cubeVol = (side) => {
        const vol = Math.pow(side, 3)
        return vol 
    }

}

export default Volume
















