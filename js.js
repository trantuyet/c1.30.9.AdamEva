function Apple(weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    }
}
function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.saySomething = function (text) {
        console.log(text);
    };
    this.eatApple = function (apple) {
        if (apple.weight  > 0){
            apple.weight --;
            this.weight++;
            console.log(this.name + " cắn 1 miếng! ")
        }

    };
    this.getName = function () {
        return this.name;
    };
    this.getWeight = function () {
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

if (apple.weight == 0) {
    console.log("Hết táo !");
}
