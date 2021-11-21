var canvasTeature
var wascot,useData=[]
function easeOutExpo(x){
return x === 1 ? 1 : 1 - pow(2, -10 * x);
}
function easeOutBounce(x) {
const n1 = 7.5625;
const d1 = 2.75;

if (x < 1 / d1) {
    return n1 * x * x;
} else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
} else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
} else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
}
}

function preload() {
	  wascot=loadJSON("csvjson (1).json")
	 canvasTeature=loadImage("canvas.jpeg")
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	wascot = Object.values(wascot)
	print(wascot)
 	for(let d of wascot){
		if(d.Year=="108"){
			useData.push(d)
			// print(d)
		}
	
	}
	}
	 
function draw() {
	background("#03071e");
	push()
	fill(255)
	textSize(40)
	text("108年各地單身人數統計",width-950,height-100)
	pop()
	 translate(width/2,height/2+100)
	let stColor=color(220,54,28)
	let edColor=color(242,0,255)
	let ap=easeOutBounce(map(frameCount,0,200,0,1,true))
	let ap2=easeOutBounce(map(frameCount,100,250,0,1,true))
	let ap3=easeOutExpo(map(frameCount,0,200,0,1,true))
	let ap4=easeOutExpo(map(frameCount,100,250,0,1,true))
	
	push()
	noFill()
	stroke(255,100)
	for(var i=0;i<50;i++){
		let h =map(pow(i*50,0.95),187,1069,0,-height)*ap3
	circle(0,0,h-110)
	}
	pop()
	
	push()
	rotate(PI/4)
	noFill()
	stroke(255)
	for(var i=0;i<5;i++){
		let h =map(pow(i*500,0.95),187,1069,0,-height)*ap3
	circle(0,0,h-110)
	text(i*500+"人",0,h/2-35)	
	}
	pop()
	
	for(var i=0;i<useData.length;i++){
		let ap5=easeOutBounce(map(frameCount-i*10,100,250,0,1,true))
		let d =useData[i]
		let ratio=map(d.total,187,1069,0,1)*ap5
		let ratio2=map(d.total,187,1069,0,1)*ap4
		let midColor=lerpColor(stColor,edColor,ratio)
		fill(midColor)
		
	push()
		rotate(i*(2*PI/18))
		translate(0,-55)
	 // translate(i*42,0)	
	 let h =map(pow(d.total,0.95),187,1069,0,-height)*ap
	 rect(0,0,8*ap,h)
		circle(0,h,140*ratio*2)
		//  push()
		// fill(255)
		// textSize(40*ratio2)
		// text(d.Location,0,h*ap)
		// pop()
		rotate(-PI/2)
		fill(255)
		textSize(16)
	 text(d.total+"人",0,-3)
	
		
 pop()	
		
	
	}
	
	push()
	
 	blendMode(MULTIPLY)
	
 	image(canvasTeature,-1000,-1000)
	image(canvasTeature,-1000,80)
	
	
	pop()	
	
}