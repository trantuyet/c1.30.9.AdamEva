class Apple{
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        if ( this.weight == 0 ) {
            console.log("Hết táo rồi! ");
        }
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    saySomething(text) {
        console.log(text);
    };

    eatApple(apple) {
        if (apple.weight > 0) {
            apple.weight--;
            this.weight++;
            console.log(this.name + " cắn 1 miếng! ");
        }

    };

    getName() {
        return this.name;
    };

    getWeight() {
        return this.weight;
    };
}
let Adam = new Human("Adam", true, 100);
let Eva = new Human("Eva", false, 50);
let apple = new Apple(10);
let a = apple.getWeight();

    while (apple.weight  > 0){
        Adam.eatApple( apple );
        Eva.eatApple(apple);

    }

apple.getWeight() ;

