var canvas = new fabric.Canvas("canvas");
 block_y = 80;
 block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= {};
var chances = {
	rr : 0,
	gr : 0,
	br : 0,
	pr : 0,
	yr : 0
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;

	if(keyPressed == '82') {
		if(chances.rr == 0){
			block_x = 1;
			new_image("rr1.png");chances.rr++;
		}
	}
	if(keyPressed == '71'){
		if(chances.gr == 0){
			block_x = 200;
			new_image("gr.png");chances.gr++;
		}
	}
	if(keyPressed == '89'){
		if(chances.br == 0){
			block_x = 350;
			new_image("yr.png");chances.br++;
		}
	}
	if(keyPressed == '80'){
		if(chances.pr == 0){
			block_x = 600;
			new_image("pr.png");chances.pr++;
		}
	}
	if(keyPressed == '66'){
		if(chances.yr == 0){
			block_x = 700;
			new_image("br.png");chances.yr++;
		}
	}	
}

