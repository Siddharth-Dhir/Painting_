var Mevent ="Empty";
var LastX, LastY;
Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");
color ="Black";
lineWidth=1;
Canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color= document.getElementById("Color").value;
    lineWidth= document.getElementById("Width").value;
    Mevent="mouseDown";

}

Canvas.addEventListener("mousemove",MyMouseMove);
function MyMouseMove(e){
    currentX=e.clientX - Canvas.offsetLeft;
    currentY=e.clientY - Canvas.offsetTop;
    if(Mevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        console.log("Last Position Of X And Y Are= ");
        console.log("X= " +LastX +" Y= " + LastY);
        ctx.moveTo(LastX,LastY);
        console.log("Current Position Of X And Y Are= ");
        console.log("X= " +currentX +" Y= " + currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();


    }
    LastX= currentX;
    LastY= currentY;


}


Canvas.addEventListener("mouseup", MyMouseUp);
function MyMouseUp(e){
    Mevent="mouseUp";
}
Canvas.addEventListener("mouseleave", MyMouseLeave);

function MyMouseLeave(e){
    Mevent="mouseLeave";
}
function Clear(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}
var last_position_of_x, last_position_of_y;
var width = screen.width;
new_width = screen.width-70;
new_height = screen.height-300;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(width < 992){
        
        document.getElementById("myCanvas").width= new_width;
        document.getElementById("myCanvas").height= new_height;
        document.body.style.overflow="Hidden";


    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("Colour").value;
        width_of_line = document.getElementById("Width").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

