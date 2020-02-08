function setup() {
  createCanvas(400, 400);
  noFill();
  series(0,1);
}

function series(a,b)
{
 ellipse(b,24,42)
  print (b);
  if (b<100)
  {series(b,a+b);
  }
}