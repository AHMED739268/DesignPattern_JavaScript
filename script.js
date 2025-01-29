
class Chair {



    constructor() {
        this.numlegs = 4;
        this.style = "CLASSIC";
        this.color = "black";
    }
    //use to string to convert all to string and can print it work like array 
    toString() {
        return `Number of legs: ${this.numlegs}\nStyle: ${this.style}\nColor: ${this.color}`;
    }

}



class Sofa {

    constructor(style) {
        this.numlegs = 4;
        this.style = "normal";
        this.color = "cafe";
        this.numSeats = 6;
    }

    toString() {
        return `Number of legs: ${this.numlegs}\nStyle: ${this.style}\nColor: ${this.color}\nNumber of seats: ${this.numSeats}`;
    }

}



class CoffeeTable {

    constructor() {
        this.numlegs = 4;
        this.style = "normal";
        this.color = "black";
        this.shape = "rectangle";
    }

    toString() {
        return `Number of legs: ${this.numlegs}\nStyle: ${this.style}\nColor: ${this.color}\nShape: ${this.shape}`;
    }

}

//>>>>>>>>>>>>>>>>>>>>>>> THE MAIN CLASSES FINSHED  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>> TYPE OF CHAIR CLASS <<<<<<<


class modelOfChair extends Chair {

    constructor(newStyle) {
        //to access the parent class properties
        super();
        this.style = newStyle;


    }

}
//test of class

// var n=new modelOfChair("old");

// console.log(`${n}`);


//>>>>>>>>> TYPE OF SOFA CLASS <<<<<<<




class modelOfSofa extends Sofa {

    constructor(newStyle) {

        super();
        this.style = newStyle;


    }

}
//test of class
// var n=new modelOfSofa("modern");

// console.log(`${n}`);


//>>>>>>>>> TYPE OF CoffeeTable CLASS <<<<<<<



class modelOfCoffeeTable extends CoffeeTable {

    constructor(newStyle) {

        super();
        this.style = newStyle;


    }

}
//test of class
// var n=new modelOfCoffeeTable("old");

// console.log(`${n}`);

//>>>>>>>>>>>>>>>>>   Factory to create objects of furniture   <<<<<<<<<<<<<<<<

class Factory {

    constructor(typeOfFactory) {
        this.typeOfFactory = typeOfFactory

        this.furniture = [];
        switch (typeOfFactory) {

            case "Modern":
                this.furniture.push(new modelOfSofa("Modern"));
                this.furniture.push(new modelOfCoffeeTable("Modern"));
                this.furniture.push(new modelOfChair("Modern"));
                break;


            case "Victorian":
                this.furniture.push(new modelOfSofa("Victorian"));
                this.furniture.push(new modelOfCoffeeTable("Victorian"));
                this.furniture.push(new modelOfChair("Victorian"));
                break;

            case "ArtDeco":
                this.furniture.push(new modelOfSofa("ArtDeco"));
                this.furniture.push(new modelOfCoffeeTable("ArtDeco"));
                this.furniture.push(new modelOfChair("ArtDeco"));
                break;

            default:

                throw new Error(`Invalid factory type: ${typeOfFactory}`);
 
        }

    }
    toString() {

        for (let item of this.furniture) {
            
       
            console.log(`${item}`);

        }

    }

}

// Finally test the factory with the following code:

var factory = new Factory("ArtDeco");
console.log(`${factory}`);



