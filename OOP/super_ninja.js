class ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;

    }
    sayname(){
        console.log(this.name);
    }
    showstate(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);

    }
    drinkSake(){
        this.health=10;
    }
}
class Sensei extends ninja{
    constructor(name,health=200,speed=10,strength=10,wisdom =10){
        super(name,health,speed,strength);
        

        this.wisdom=wisdom;
}
speakWisdom(){
    super.drinkSake();
    console.log(this.wisdom);
}
drinkSake(){
    this.health+=10;
}


}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();