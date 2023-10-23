const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.moveTo(50,10)
ctx.lineTo(200,10)
ctx.stroke()

ctx.moveTo(55,10)
ctx.lineTo(55,250)
ctx.stroke()

ctx.moveTo(200,5)
ctx.lineTo(200,55)
ctx.stroke()
