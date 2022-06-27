//window.addEventListener("load",() =>{
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let ship_4

function paint() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr[j][i] == 0) {
                ctx.fillStyle = "white"
                ctx.fillRect(startx + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "black"
                ctx.strokeRect(startx + (20 * i), starty + (20 * j), 20, 20)
            } else {
                ctx.fillStyle = "blue"
                ctx.fillRect(startx + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "blue"
                ctx.strokeRect(startx + (20 * i), starty + (20 * j), 20, 20)
            }
        }
    }
}

function H_or_V(y, x) {
    if (x != 9) {
        if (arr_enemy[y][x + 1] == 1 || arr_enemy[y][x + 1] == 2) {
            //if (arr_enemy[y + 1][x] == 2 || arr_enemy[y + 1][x] == 1) {
            console.log("Ship H")
            return 1
        }
    }

    if (y != 9) {
        if (arr_enemy[y + 1][x] == 1 || arr_enemy[y + 1][x] == 2) {
            console.log("Ship V")
            return 0
        }
    }

}

function find_dead() {
    let tmp_c = 0
    let tmp_s = 0
    let tmp_stop = 0
    for (let v = 0; v < 10; v++) {
        console.log("Line number: ", v)
        for (let h = 0; h < 10; h++) {
            console.log("Cell number: ", h)
            if (arr_enemy[v][h] != 0 && arr_enemy[v][h] != 3 && arr_enemy[v][h] != 4) {
                // Horizontal
                if (H_or_V(v, h) == 1) {

                    while (h + 1 != 10 && tmp_stop != 1) {
                        if (arr_enemy[v][h + 1] != 0 && arr_enemy[v][h + 1] != 4) {
                            tmp_c = tmp_c + 1
                            tmp_s = tmp_s + arr_enemy[v][h]
                            console.log("Print counter, sum: ", tmp_c, tmp_s)
                        } else {
                            tmp_c = tmp_c + 1
                            tmp_s = tmp_s + arr_enemy[v][h]
                            tmp_stop = 1
                            console.log("Ship end: ")
                        }
                        h = h + 1
                    }

                    if (h == 9 && arr_enemy[v][h + 1] != 0 && arr_enemy[v][h + 1] != 4) {
                        tmp_c = tmp_c + 1
                        tmp_s = tmp_s + arr_enemy[v][h]
                        console.log("Print counter, sum: ", tmp_c, tmp_s)
                        h = h + 1
                    }

                    if (tmp_s % tmp_c == 0 && tmp_s / tmp_c != 1) {
                        for (tmp_c; tmp_c != 0; tmp_c--) {
                            arr_enemy[v][h - tmp_c] = 3
                        }

                    }
                    tmp_c = 0
                    tmp_s = 0
                    tmp_stop = 0
                }

                // Vertical
//                if (H_or_V(v, h) == 0) {
//
//                    while (v + 1 != 10 && tmp_stop != 1) {
//                        if (arr_enemy[v + 1][h] != 0 && arr_enemy[v + 1][h] != 4) {
//                            tmp_c = tmp_c + 1
//                            tmp_s = tmp_s + arr_enemy[v][h]
//                            console.log("Print counter, sum: ", tmp_c, tmp_s)
//                        } else {
//                            tmp_c = tmp_c + 1
//                            tmp_s = tmp_s + arr_enemy[v][h]
//                            tmp_stop = 1
//                            console.log("Ship end: ")
//                        }
//                        v = v + 1
//                    }
//
//                    if (v == 9 && arr_enemy[v + 1][h] != 0 && arr_enemy[v + 1][h] != 4) {
//                        tmp_c = tmp_c + 1
//                        tmp_s = tmp_s + arr_enemy[v][h]
//                        console.log("Print counter, sum: ", tmp_c, tmp_s)
//                        v = v + 1
//                    }
//
//                    if (tmp_s % tmp_c == 0 && tmp_s / tmp_c != 1) {
//                        for (tmp_c; tmp_c != 0; tmp_c--) {
//                            arr_enemy[v - tmp_c][h] = 3
//                        }
//
//                    }
//                    tmp_c = 0
//                    tmp_s = 0
//                    tmp_stop = 0
//                }
            }

            //else {
            //    tmp_c = 0
            //    tmp_s = 0
            //    console.log(tmp_c, tmp_s)
        }
        //arr_enemy[i][0]
    }
}
//}
function bom(x, y) {
    starty = 100
    startx_enemy = 500
    if (arr_enemy[y][x] == 2) {
        //ctx.fillStyle = "orange"
        //ctx.fillRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
        arr_enemy[y][x] = 2
        //ctx.strokeStyle = "red"
        //ctx.strokeRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
        console.log(arr_enemy)
    }
    if (arr_enemy[y][x] == 1) {
        // first block V check aroun
        //ctx.fillStyle = "red"
        //ctx.fillRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
        arr_enemy[y][x] = 2
        //ctx.strokeStyle = "red"
        //ctx.strokeRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
        console.log(arr_enemy)
    }

    if (arr_enemy[y][x] == 0) {
        arr_enemy[y][x] = 4
        //ctx.fillStyle = "grey"
        //ctx.fillRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
        //ctx.strokeStyle = "grey"
        //ctx.strokeRect(startx_enemy + (20 * x), starty + (20 * y), 20, 20)
    }
    find_dead()
    paint_enemy()
    win()
}
function win() {
    let peremoga = 1
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr_enemy[j][i] == 1) {
                //console.log("TTTTT")
                peremoga = 0
            }

        }
    }
    if (peremoga == 1) {
        //console.log("TTTTT")
        alert("win")
    }
}
//document.addEventListener('mousemove', handleMouseEvent);
//document.addEventListener('mouseup', handleMouseEvent1);
//document.addEventListener('mousedown', handleMouseEvent1);
//canvas.onmu
is_draggable = 0
//x=0
//y=0
arr = new Array();
arr[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr[1] = new Array(0, 4, 0, 0, 0, 0, 0, 0, 0, 0)
arr[2] = new Array(0, 4, 0, 0, 0, 0, 0, 0, 0, 0)
arr[3] = new Array(0, 4, 0, 0, 0, 0, 0, 0, 0, 0)
arr[4] = new Array(0, 4, 0, 0, 0, 0, 0, 0, 0, 0)
arr[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr[6] = new Array(0, 0, 0, 0, 0, 0, 0, 2, 0, 0)
arr[7] = new Array(0, 0, 0, 0, 0, 0, 0, 2, 0, 0)
arr[8] = new Array(0, 0, 0, 3, 3, 3, 0, 0, 0, 0)
arr[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)




arr_enemy = new Array();
arr_enemy[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
arr_enemy[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)


let mouse_down = function (event) {
    //EventTarget.preventDefault()
    console.log(event)
    x = event.offsetX
    y = event.offsetY
    console.log(x, y)
    //ctx.clearRect(ed'
    //ctx.strokeStyle='black'
    //ctx.fillRect(x,y,20,20)

    if (x < 300 && y < 300 && x > 80 && y > 80) {
        is_draggable = 1
    }
    if (x < 700 && y < 300 && x > 500 && y > 80) {
        let tmp_x = ~~((x - 500) / 20)
        let tmp_y = ~~((y - 100) / 20)
        console.log("DDDDDD")
        bom(tmp_x, tmp_y)
    }
}



function is_ship(x, y) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr[x][y] == 4) {
                return true;
            }
            else {
                return false
            }
        }
    }
}

function define_ship(x, y) {
    ship_tenp
}
let mouse_up = function (event) {
    console.log(event)
    is_draggable = 0
    old_rx = (old_rx - 100) / 20
    old_ry = (old_ry - 100) / 20
    console.log(old_rx)
    console.log(old_ry)
    //arr[old_rx][old_ry] = 5
    //zzz = arr[old_rx][old_ry]
    console.log(arr)
}

let mouse_move = function (event) {
    //EventTarget.preventDefault()
    console.log(event)
    //tmp_x=event.offsetX
    //tmp_y=event.offsetY
    //if (x < 200 || y < 200 || x > 220 || y > 220) {
    if (is_draggable) {

        old_x = x
        old_y = y
        old_rx = ~~(old_x / 20) * 20;
        old_ry = ~~(old_y / 20) * 20;

        x = event.offsetX
        y = event.offsetY
        mv_x = event.offsetX
        mv_y = event.offsetY
        mv_rx = ~~(mv_x / 20) * 20;
        mv_ry = ~~(mv_y / 20) * 20;

        if (mv_rx != old_rx || mv_ry != old_ry) {
            if (mv_rx < 300 && mv_ry < 300 && mv_rx > 80 && mv_ry > 80 && old_rx > 80 && old_ry > 80 && old_rx < 290 && old_ry < 300) {
                ctx.fillStyle = "white"
                ctx.fillRect(old_rx, old_ry, 20, 20)
                ctx.strokeStyle = "black"
                ctx.strokeRect(old_rx, old_ry, 20, 20)
            }
        }



        if (mv_rx < 300 && mv_ry < 300 && mv_rx > 80 && mv_ry > 80 && old_rx > 80 && old_ry > 80 && old_rx < 290 && old_ry < 300) {
            console.log(mv_rx, mv_ry)
            ctx.fillStyle = "blue"
            ctx.fillRect(mv_rx, mv_ry, 20, 20)

        }
    }


}
canvas.onmousedown = mouse_down
canvas.onmousemove = mouse_move
canvas.onmouseup = mouse_up
canvas.height = 350
canvas.width = 750
let range = 0
let range2 = 0
for (let i = 0; i < 10; i++) {
    ctx.strokeRect(100, 100 + range, 20, 20)
    range += 20
    range2 = 0
    for (let j = 0; j < 10; j++) {
        ctx.strokeRect(100 + range - 20, 100 + range2, 20, 20)
        range2 += 20

    }
}
range = 0
for (let i = 0; i < 10; i++) {
    ctx.strokeRect(500, 100 + range, 20, 20)
    range += 20
    range2 = 0
    for (let j = 0; j < 10; j++) {
        ctx.strokeRect(500 + range - 20, 100 + range2, 20, 20)
        range2 += 20

    }
}
ctx.fillStyle = "blue"
ctx.fillRect(200, 200, 20, 20)
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