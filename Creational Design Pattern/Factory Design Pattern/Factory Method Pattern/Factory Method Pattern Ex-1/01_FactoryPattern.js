/**
 * Product Classes
 **/
class Cirlce {
    draw(){
        console.log('A Circle Drawing...');
        return true;
    }
}

class Rectangle {
    draw(){
        console.log('A Rectangle Drawing...');
        return true;
    }
}

/**
 * Factory class
 **/
class FactoryMethod {
    static createShape(factoryType){
        switch (factoryType){
            case "circle":
                return new Cirlce();
            case "rectangle":
                return new Rectangle();
            default:
                throw new Error("Unknown Factory Type");
        }
    }
}

/**
 * Client code
 **/
try {
    const circle = FactoryMethod.createShape('circle');
    circle.draw();

    const rectangle = FactoryMethod.createShape('rectangle');
    rectangle.draw();

    const line = FactoryMethod.createShape('line');
    line.draw();
} catch(err) {
    console.log(err.message);
}