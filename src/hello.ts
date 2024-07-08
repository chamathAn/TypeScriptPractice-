interface IAnimal{
    name: string;
    makeVoice(): void;
}


class Dog implements IAnimal{
    name: string = "Dog";
    makeVoice(): void {
        console.log("woof");
    }
}

class Cat implements IAnimal{
    name: string = "Cat";
    makeVoice(): void {
        console.log("meow");
    }
}

const hello = () => {
    const animal:IAnimal = new Dog();
    animal.makeVoice(); 
}
export default  hello;