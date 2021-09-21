// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get PI(){
        return Math.PI
    }

    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return 2 * this.radius * this.PI
    }

    get area(){
        return this.radius ** 2 * this.PI
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }
    set circumference(circumference){
        this.radius = circumference / 2 / this.PI
    }

    set area(area){
        this.radius = Math.sqrt(area / this.PI)
    }
}