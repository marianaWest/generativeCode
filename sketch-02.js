const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random'); 


const settings = {
  dimensions: [ 1080, 1080 ],
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};


const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    context.fillRect(0, 0, width, height);

    context.fillStyle = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.5;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.4;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(0, 0);
      context.rotate(-angle);
      context.scale(random.range(1, 5), random.range(1, 0.7))
  
      context.beginPath();
      context.rect(-w * 0.8, random.range(0, -h * 0.8), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(0, 0);
      context.rotate(-angle);

      context.lineWidth = random.range(10, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(1, 3), slice * random.range(1, -4), slice * random.range(0, 1));
      context.stroke();

      context.restore();
    };
  };
};



canvasSketch(sketch, settings);
