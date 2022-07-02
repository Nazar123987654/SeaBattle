document.querySelector("#btn").onclick = function () {
    btn.style.display = 'none';
    console.log(arr)
    startx = 100
    starty = 100

    startx_enemy = 500
    //mv_rx=~~(mv_x/20) * 20;
    //mv_ry=~~(mv_y/20) * 20;

    // Draw enemy map
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

    function checkPlace(tempy, tempx) {
        if (tempx < 0) {
            tempx = tempx + 1
        }
        if (tempy < 0) {
            tempy = tempy + 1
        }
        if (tempx > 9) {
            tempx = tempx - 1
        }
        if (tempy > 9) {
            tempy = tempy - 1
        }
        if (arr_enemy[tempy][tempx] != 0) {
            return 0
        } else {
            return 1
        }
    }

    function placeRandomShip4() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 6) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 2, randx + 1)
                    &&
                    checkPlace(randy + 2, randx)
                    &&
                    checkPlace(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }

                // Third block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 3, randx + 1)
                    &&
                    checkPlace(randy + 3, randx)
                    &&
                    checkPlace(randy + 3, randx - 1)
                ) {
                    //console.log("cell3 H is OK")
                } else {
                    shipErrors = 1
                }

                // Fourth block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 4, randx + 1)
                    &&
                    checkPlace(randy + 4, randx)
                    &&
                    checkPlace(randy + 4, randx - 1)
                ) {
                    //console.log("cell4 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                    arr_enemy[randy + 2][randx] = 1
                    arr_enemy[randy + 3][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 6) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 2)
                    &&
                    checkPlace(randy, randx + 2 )
                    &&
                    checkPlace(randy + 1, randx + 2)
                ) {
                    //console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Third block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 3)
                    &&
                    checkPlace(randy, randx + 3)
                    &&
                    checkPlace(randy + 1, randx + 3)
                ) {
                    //console.log("cell3 V is OK")
                } else {
                    shipErrors = 1
                }

                // Fourth block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 4)
                    &&
                    checkPlace(randy, randx + 4)
                    &&
                    checkPlace(randy + 1, randx + 4)
                ) {
                    //console.log("cell4 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                    arr_enemy[randy][randx + 2] = 1
                    arr_enemy[randy][randx + 3] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }


    function placeRandomShip3() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 7) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 2, randx + 1)
                    &&
                    checkPlace(randy + 2, randx)
                    &&
                    checkPlace(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }

                // Third block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 3, randx + 1)
                    &&
                    checkPlace(randy + 3, randx)
                    &&
                    checkPlace(randy + 3, randx - 1)
                ) {
                    //console.log("cell3 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                    arr_enemy[randy + 2][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 7) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 2)
                    &&
                    checkPlace(randy, randx + 2 )
                    &&
                    checkPlace(randy + 1, randx + 2)
                ) {
                    console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Third block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 3)
                    &&
                    checkPlace(randy, randx + 3)
                    &&
                    checkPlace(randy + 1, randx + 3)
                ) {
                    //console.log("cell3 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                    arr_enemy[randy][randx + 2] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }

    
    function placeRandomShip2() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 8) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy + 2, randx + 1)
                    &&
                    checkPlace(randy + 2, randx)
                    &&
                    checkPlace(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }


                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 8) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx + 2)
                    &&
                    checkPlace(randy, randx + 2 )
                    &&
                    checkPlace(randy + 1, randx + 2)
                ) {
                    //console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }


                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }


    function placeRandomShip1() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            //console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 9) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }



                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                } else {
                   // console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 9) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlace(randy - 1, randx - 1)
                    &&
                    checkPlace(randy, randx - 1)
                    &&
                    checkPlace(randy + 1, randx - 1)
                    &&
                    checkPlace(randy + 1, randx)
                    &&
                    checkPlace(randy + 1, randx + 1)
                    &&
                    checkPlace(randy, randx + 1)
                    &&
                    checkPlace(randy - 1, randx + 1)
                    &&
                    checkPlace(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }



                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }


    placeRandomShip4()
    placeRandomShip3()
    placeRandomShip3()
    placeRandomShip2()
    placeRandomShip2()
    placeRandomShip2()
    placeRandomShip1()
    placeRandomShip1()
    placeRandomShip1()
    placeRandomShip1()
    
    function checkPlaceMy(tempy, tempx) {
        if (tempx < 0) {
            tempx = tempx + 1
        }
        if (tempy < 0) {
            tempy = tempy + 1
        }
        if (tempx > 9) {
            tempx = tempx - 1
        }
        if (tempy > 9) {
            tempy = tempy - 1
        }
        if (arr[tempy][tempx] != 0) {
            return 0
        } else {
            return 1
        }
    }

    function placeRandomMyShip4() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            //console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 6) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 2, randx + 1)
                    &&
                    checkPlaceMy(randy + 2, randx)
                    &&
                    checkPlaceMy(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }

                // Third block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 3, randx + 1)
                    &&
                    checkPlaceMy(randy + 3, randx)
                    &&
                    checkPlaceMy(randy + 3, randx - 1)
                ) {
                    //console.log("cell3 H is OK")
                } else {
                    shipErrors = 1
                }

                // Fourth block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 4, randx + 1)
                    &&
                    checkPlaceMy(randy + 4, randx)
                    &&
                    checkPlaceMy(randy + 4, randx - 1)
                ) {
                    //console.log("cell4 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy + 1][randx] = 1
                    arr[randy + 2][randx] = 1
                    arr[randy + 3][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 6) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 2)
                    &&
                    checkPlaceMy(randy, randx + 2 )
                    &&
                    checkPlaceMy(randy + 1, randx + 2)
                ) {
                    //console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Third block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 3)
                    &&
                    checkPlaceMy(randy, randx + 3)
                    &&
                    checkPlaceMy(randy + 1, randx + 3)
                ) {
                    //console.log("cell3 V is OK")
                } else {
                    shipErrors = 1
                }

                // Fourth block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 4)
                    &&
                    checkPlaceMy(randy, randx + 4)
                    &&
                    checkPlaceMy(randy + 1, randx + 4)
                ) {
                    //console.log("cell4 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy][randx + 1] = 1
                    arr[randy][randx + 2] = 1
                    arr[randy][randx + 3] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }


    function placeRandomMyShip3() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            //console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 7) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 2, randx + 1)
                    &&
                    checkPlaceMy(randy + 2, randx)
                    &&
                    checkPlaceMy(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }

                // Third block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 3, randx + 1)
                    &&
                    checkPlaceMy(randy + 3, randx)
                    &&
                    checkPlaceMy(randy + 3, randx - 1)
                ) {
                    //console.log("cell3 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy + 1][randx] = 1
                    arr[randy + 2][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 7) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 2)
                    &&
                    checkPlaceMy(randy, randx + 2 )
                    &&
                    checkPlaceMy(randy + 1, randx + 2)
                ) {
                    //console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Third block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 3)
                    &&
                    checkPlaceMy(randy, randx + 3)
                    &&
                    checkPlaceMy(randy + 1, randx + 3)
                ) {
                    //console.log("cell3 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy][randx + 1] = 1
                    arr[randy][randx + 2] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }

    
    function placeRandomMyShip2() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            //console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 8) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }

                // Second block H check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy + 2, randx + 1)
                    &&
                    checkPlaceMy(randy + 2, randx)
                    &&
                    checkPlaceMy(randy + 2, randx - 1)
                ) {
                    //console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }


                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy + 1][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 8) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }

                // Second block V check 3
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx + 2)
                    &&
                    checkPlaceMy(randy, randx + 2 )
                    &&
                    checkPlaceMy(randy + 1, randx + 2)
                ) {
                    //console.log("cell2 Vert is OK")
                } else {
                    shipErrors = 1
                }


                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                    arr[randy][randx + 1] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }


    function placeRandomMyShip1() {
        do {
            var shipErrors = 0
            let direction = Math.floor(Math.random() * 2)
            let randx = Math.floor(Math.random() * 10)
            let randy = Math.floor(Math.random() * 10)
            //console.log(direction, randx, randy)
            if (direction == 0) {
                if (randy > 9) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block V check around
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }



                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 9) {
                    shipErrors = 1
                }
                if (!checkPlaceMy(randy, randx)) {
                    shipErrors = 1
                    //console.log("ERR: cell is buisy")
                }
                // first block H check around and x != 0, y != 0
                if (
                    shipErrors == 0
                    &&
                    checkPlaceMy(randy - 1, randx - 1)
                    &&
                    checkPlaceMy(randy, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx - 1)
                    &&
                    checkPlaceMy(randy + 1, randx)
                    &&
                    checkPlaceMy(randy + 1, randx + 1)
                    &&
                    checkPlaceMy(randy, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx + 1)
                    &&
                    checkPlaceMy(randy - 1, randx)
                ) {
                    //console.log("cell1 H is OK")
                } else {
                    shipErrors = 1
                }



                if (shipErrors == 0) {
                    arr[randy][randx] = 1
                } else {
                    //console.log("ERR: Save array")
                }
            }
        } while (shipErrors != 0)
    }

    placeRandomMyShip4()
    placeRandomMyShip3()
    placeRandomMyShip3()
    placeRandomMyShip2()
    placeRandomMyShip2()
    placeRandomMyShip2()
    placeRandomMyShip1()
    placeRandomMyShip1()
    placeRandomMyShip1()
    placeRandomMyShip1()
    console.log(arr_enemy)
    paint()
    console.log(arr_enemy)
    paint_enemy()
}

function paint_enemy() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr_enemy[j][i] == 0) {
                ctx.fillStyle = "white"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "black"
                ctx.strokeRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
            } else if (arr_enemy[j][i] == 4) {
                ctx.fillStyle = "grey"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "grey"
                ctx.strokeRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
            }
            else if (arr_enemy[j][i] == 3) {
                ctx.fillStyle = "red"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "blue"
                ctx.strokeRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
            }
            else if (arr_enemy[j][i] == 2) {
                ctx.fillStyle = "orange"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                }
            else if (arr_enemy[j][i] == 1) {
                ctx.fillStyle = "white"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "black"
                ctx.strokeRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
            }
        }
    }
}
