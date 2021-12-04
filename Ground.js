class Ground
{
    constructor(x,y,sx,sy)
    {
      this.x = x;
      this.y = y;
      this.sx = sx;
      this.sy = sy;

      var option = {
        isStatic:true
      };

      this.body = Bodies.rectangle(x, y, sx, sy, option);
      World.add(world, this.body);
    }

    display()
    {
      rectMode(CENTER);
      stroke(0);
      fill(255);
      rect(this.body.position.x, this.body.position.y, this.sx, this.sy);
    }
}