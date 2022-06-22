//window.addEventListener("load",() =>{
const canvas=document.querySelector("#canvas");
const ctx=canvas.getContext("2d");
let ship_4

function paint(){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if ( arr[j][i] == 0 ) {
                ctx.fillStyle="white"
                ctx.fillRect(startx + (20 * i),starty + (20 * j),20,20)
                ctx.strokeStyle="black"
                ctx.strokeRect(startx + (20 * i),starty + (20 * j),20,20)
            } else {
                ctx.fillStyle="blue"
                ctx.fillRect(startx + (20 * i),starty + (20 * j),20,20)
                ctx.strokeStyle="blue"
                ctx.strokeRect(startx + (20 * i),starty + (20 * j),20,20)
            }
        }
    }
}


 
//document.addEventListener('mousemove', handleMouseEvent);
//document.addEventListener('mouseup', handleMouseEvent1);
//document.addEventListener('mousedown', handleMouseEvent1);
//canvas.onmu
is_draggable = 0
//x=0
//y=0
arr = new Array ();
arr[0] = new Array(0,0,0,0,0,0,0,0,0,0)
arr[1] = new Array(0,4,0,0,0,0,0,0,0,0)
arr[2] = new Array(0,4,0,0,0,0,0,0,0,0)
arr[3] = new Array(0,4,0,0,0,0,0,0,0,0)
arr[4] = new Array(0,4,0,0,0,0,0,0,0,0)
arr[5] = new Array(0,0,0,0,0,0,0,0,0,0)
arr[6] = new Array(0,0,0,0,0,0,0,2,0,0)
arr[7] = new Array(0,0,0,0,0,0,0,2,0,0)
arr[8] = new Array(0,0,0,3,3,3,0,0,0,0)
arr[9] = new Array(0,0,0,0,0,0,0,0,0,0)




arr_enemy = new Array ();
arr_enemy[0] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[1] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[2] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[3] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[4] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[5] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[6] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[7] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[8] = new Array(0,0,0,0,0,0,0,0,0,0)
arr_enemy[9] = new Array(0,0,0,0,0,0,0,0,0,0)


let mouse_down = function(event) {
    //EventTarget.preventDefault()
    console.log(event)
    x=event.offsetX
    y=event.offsetY
    console.log(x,y)
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    //ctx.fillStyle='red'
    //ctx.strokeStyle='black'
    //ctx.fillRect(x,y,20,20)
    is_draggable = 1
}
function is_ship(x,y){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if ( arr[x][y] == 4 ) {
                return true;
            } 
            else {
                return false
            }
        }
    }
}

function define_ship(x,y){
    ship_tenp
}
let mouse_up = function(event) {
    //EventTarget.preventDefault()
    console.log(event)
    //x=event.offsetX
    //y=event.offsetY
    //console.log(x,y)
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    //ctx.fillStyle='red'
    //ctx.strokeStyle='black'
    //ctx.fillRect(x,y,20,20)
    is_draggable = 0
    old_rx=(old_rx-100)/20
    old_ry=(old_ry-100)/20
    console.log(old_rx)
    console.log(old_ry)
    //arr[old_rx][old_ry] = 5
    //zzz = arr[old_rx][old_ry]
    console.log(arr)
}

let mouse_move = function(event) {
    //EventTarget.preventDefault()
    console.log(event)
    //tmp_x=event.offsetX
    //tmp_y=event.offsetY
    //if (x < 200 || y < 200 || x > 220 || y > 220) {
    if (is_draggable) {
        
        old_x=x
        old_y=y
        old_rx=~~(old_x/20) * 20;
        old_ry=~~(old_y/20) * 20;
        
        x=event.offsetX
        y=event.offsetY
        mv_x=event.offsetX
        mv_y=event.offsetY
        mv_rx=~~(mv_x/20) * 20;
        mv_ry=~~(mv_y/20) * 20;

        if (mv_rx != old_rx || mv_ry !=old_ry) {
if(mv_rx<300&&mv_ry<300&&mv_rx>80&&mv_ry>80&&old_rx>80&&old_ry>80&&old_rx<290&&old_ry<300){
            ctx.fillStyle="white"
            ctx.fillRect(old_rx,old_ry,20,20)
            ctx.strokeStyle="black"
            ctx.strokeRect(old_rx,old_ry,20,20)
}
        }



        if(mv_rx<300&&mv_ry<300&&mv_rx>80&&mv_ry>80&&old_rx>80&&old_ry>80&&old_rx<290&&old_ry<300){
        console.log(mv_rx,mv_ry)
        ctx.fillStyle="blue"
        ctx.fillRect(mv_rx,mv_ry,20,20)

        }
    }


}
canvas.onmousedown = mouse_down
canvas.onmousemove = mouse_move
canvas.onmouseup = mouse_up
canvas.height=350
canvas.width=750
let range=0
let range2=0
for(let i=0;i<10;i++){
    ctx.strokeRect(100,100+range,20,20)
    range+=20
    range2=0
    for(let j=0;j<10;j++){
        ctx.strokeRect(100+range-20,100+range2,20,20)
        range2+=20
        
    }
    }
    range=0
    for(let i=0;i<10;i++){
        ctx.strokeRect(500,100+range,20,20)
        range+=20
        range2=0
        for(let j=0;j<10;j++){
            ctx.strokeRect(500+range-20,100+range2,20,20)
            range2+=20
            
        }
        }
        ctx.fillStyle="blue"
    ctx.fillRect(200,200,20,20)
    /*ctx.fillStyle="white"
    ctx.fillRect(200,200,20,20)
    ctx.strokeRect(200,200,20,20)*/

    /*function handleMouseEvent(event){
        x=event.offsetX
        y=event.offsetY
        //ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle='red'
        //ctx.strokeStyle='black'
        ctx.fillRect(x,y,20,20)
        //ctx.strokeRect(x,y,20,20)
    }*/
//})