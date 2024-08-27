
class Perimeter {

    circlePerim = (radius) => {
        const perim = (2 * Math.PI) * radius
        return perim
    }

    squarePerim = (side) => {
        const perim = 4 * side
        return perim
    }

    rectPerim = (length, width) => {
        const perim =  2 * (length + width)
        return perim
    }

    trianglePerim = (a, b, c,) => {
        const perim = a + b + c
        return perim
    }

    parallPerim = (a, b) => {
        const perim = 2 * (a + b)
        return perim
    }

    trapazoidPerim = (a, b, c, d) => {
        const perim = a + b + c + d
        return perim 
    }

}

export default Perimeter