class Chain{

     constructor(bodyA,bodyB){
        var option = {

            bodyA:bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length:10
         }
            
         this.chain = Constraint.create(option) 
        World.add(world, this.chain);
       
     }
    display(){
        var posA=this.chain.bodyA.position
    var  posB=this.chain.bodyB.position
    line(posA.x,posA.y,posB.x,posB.y)
    }
}