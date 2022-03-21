console.log("hello world");

const varConst=5;
console.log(varConst);

let hello ="hello";
console.log(hello);
hello ="bonjour";
console.log(hello);


const number = Number(prompt("enter a number"));
if(number>0){
    console.log(number + "is positive");
}else{
    console;log(number+"is negative");
}

const number2 =17;

let i=0;
while(i<= number){
    console.log(i);
    i++;
}
console.log("e count untile"+number);

for (let counter =1; counter<=5;counter++){
    console.log(counter);
}

function sayHello(grettings){
    console.log(grettings);
}
sayHello("bonjour")

class Person{
    constructor(name,adresse,age){
        this.age =age;
        this.adresse = adresse;
        this.name=name;
    }
    introduce(){
        console.log("My name is "+this.name+" i live in "+ this.adresse+" i'm "+this.age+" years old." )
    }
}
gaetan = new Person("Gaëtan","bezier",33);
gaetan.introduce();
mathieu=new Person("Mathieu", "Montpellier",35);
brice = new Person("Brice", "Montpellier", 36);

let people = [gaetan, brice, mathieu];
arthur = new Person("Arthur", "Montpellier",1200);

//Beware
const otherList= Array.from(people);
otherList[2]=arthur;
for(p of people){
    p.introduce();
}
for(p of otherList){
    p.introduce();
}