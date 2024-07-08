import hello from './hello';
let abc: string = 'hello';
abc = "fdsf";
const abc1: string = 'hello2';
let obj : object = {};

class Cat{

    static className: string = 'Cat';
    name: string;
    constructor(name: string){
        this.name=name;
    }

    static printClassName(){
        console.log(Cat.className
        );
    }
        
    printName(){
        console.log(this.name);
    }
}


const c = new Cat("Garfield")

c.printName();
Cat.printClassName();