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
khalil=new ninja("khalil",100);
khalil.showstate();
khalil.sayname();
khalil.drinkSake();
khalil.sayname();


