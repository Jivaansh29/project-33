class Snow{
  constructor(x,y){
      var snowoptions ={
          friction:0.001,
          restitution:0.02,
          isStatic:false
      }
      this.snow=Bodies.circle(x,y,5,snowoptions)
      this.r=5
      var rand=Math.round(random(1,2))
      var img
      if (rand===1) {
         img="snow4.webp" 
      }
      else{
          img="snow5.webp"
      }
      this.image=loadImage(img);
      World.add(world,this.snow)
  }
  UpdateY(){
      if(this.snow.position.y>windowHeight){
          Matter.Body.setPosition(this.snow,{x:random(0,1200),y:random(0,1200)})
      }
    }
      showsnow(){
          fill("blue")
          imageMode(CENTER)
          image(this.image,this.snow.position.x,this.snow.position.y,40,40)
      }
  
}
