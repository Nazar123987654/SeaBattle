document.querySelector("#btn").onclick = function () {
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

    // First random ships positions
    // direction = 0 horisontal
    // direction = 1 vertical


    //let randx_3_1 = Math.floor(Math.random() * 10)
    //let randy_3_1 = Math.floor(Math.random() * 10)
    //let randx_3_2 = Math.floor(Math.random() * 10)
    //let randy_3_2 = Math.floor(Math.random() * 10)
    //let randx_2_1 = Math.floor(Math.random() * 10)
    //let randy_2_1 = Math.floor(Math.random() * 10)
    //let randx_2_2 = Math.floor(Math.random() * 10)
    //let randy_2_2 = Math.floor(Math.random() * 10)
    //let randx_2_3 = Math.floor(Math.random() * 10)
    //let randy_2_3 = Math.floor(Math.random() * 10)
    //let randx_1_1 = Math.floor(Math.random() * 10)
    //let randy_1_1 = Math.floor(Math.random() * 10)
    //let randx_1_2 = Math.floor(Math.random() * 10)
    //let randy_1_2 = Math.floor(Math.random() * 10)
    //let randx_1_3 = Math.floor(Math.random() * 10)
    //let randy_1_3 = Math.floor(Math.random() * 10)
    //let randx_1_4 = Math.floor(Math.random() * 10)
    //let randy_1_4 = Math.floor(Math.random() * 10)


    /*let s4=true
    let s3_1    
    let s3_2
    let s2_1
    let s2_2
    let s2_3
    let s1_1
    let s1_2
    let s1_3
    let s1_4
*/

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
                    console.log("cell1 Vert is OK")
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
                    console.log("cell2 H is OK")
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
                    console.log("cell3 H is OK")
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
                    console.log("cell4 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                    arr_enemy[randy + 2][randx] = 1
                    arr_enemy[randy + 3][randx] = 1
                } else {
                    console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 6) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    console.log("ERR: cell is buisy")
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
                    console.log("cell3 V is OK")
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
                    console.log("cell4 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                    arr_enemy[randy][randx + 2] = 1
                    arr_enemy[randy][randx + 3] = 1
                } else {
                    console.log("ERR: Save array")
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
                    console.log("cell1 Vert is OK")
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
                    console.log("cell2 H is OK")
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
                    console.log("cell3 H is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                    arr_enemy[randy + 2][randx] = 1
                } else {
                    console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 7) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    console.log("ERR: cell is buisy")
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
                    console.log("cell3 V is OK")
                } else {
                    shipErrors = 1
                }

                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                    arr_enemy[randy][randx + 2] = 1
                } else {
                    console.log("ERR: Save array")
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
                    console.log("cell1 Vert is OK")
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
                    console.log("cell2 H is OK")
                } else {
                    shipErrors = 1
                }


                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy + 1][randx] = 1
                } else {
                    console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 8) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    console.log("ERR: cell is buisy")
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


                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                    arr_enemy[randy][randx + 1] = 1
                } else {
                    console.log("ERR: Save array")
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
            console.log(direction, randx, randy)
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
                    console.log("cell1 Vert is OK")
                } else {
                    shipErrors = 1
                }



                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                } else {
                    console.log("ERR: Save array")
                }
            }

            if (direction == 1) {

                if (randx > 9) {
                    shipErrors = 1
                }
                if (!checkPlace(randy, randx)) {
                    shipErrors = 1
                    console.log("ERR: cell is buisy")
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



                if (shipErrors == 0) {
                    arr_enemy[randy][randx] = 1
                } else {
                    console.log("ERR: Save array")
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

  
    //placeRandomShip3()
    //placeRandomShip3()
    //placeRandomShip2()
    //placeRandomShip2()
    //placeRandomShip2()
    //placeRandomShip1()
    //placeRandomShip1()
    //placeRandomShip1()
    //placeRandomShip1()


    // 4xship - horisontal
    /*
        if (direction == 0) {
            if (randx_4 == 9) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 - 1][randy_4] = 4
                arr_enemy[randx_4 - 2][randy_4] = 4
                arr_enemy[randx_4 - 3][randy_4] = 4
            }
            else if (randx_4 == 8) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 - 1][randy_4] = 4
                arr_enemy[randx_4 - 2][randy_4] = 4
                arr_enemy[randx_4 - 3][randy_4] = 4
            }
            else if (randx_4 == 7) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 - 1][randy_4] = 4
                arr_enemy[randx_4 - 2][randy_4] = 4
                arr_enemy[randx_4 - 3][randy_4] = 4
            }
            else if (randx_4 == 0) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 + 1][randy_4] = 4
                arr_enemy[randx_4 + 2][randy_4] = 4
                arr_enemy[randx_4 + 3][randy_4] = 4
            }
            else if (randx_4 == 1) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 + 1][randy_4] = 4
                arr_enemy[randx_4 + 2][randy_4] = 4
                arr_enemy[randx_4 + 3][randy_4] = 4
            }
            else if (randx_4 == 2) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 + 1][randy_4] = 4
                arr_enemy[randx_4 + 2][randy_4] = 4
                arr_enemy[randx_4 + 3][randy_4] = 4
            }
            else {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4 + 1][randy_4] = 4
                arr_enemy[randx_4 + 2][randy_4] = 4
                arr_enemy[randx_4 + 3][randy_4] = 4
            }
        }
    
        // 4xsip vertical
        if (direction == 1) {
            if (randy_4 == 9) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 - 1] = 4
                arr_enemy[randx_4][randy_4 - 2] = 4
                arr_enemy[randx_4][randy_4 - 3] = 4
            }
            else if (randy_4 == 8) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 - 1] = 4
                arr_enemy[randx_4][randy_4 - 2] = 4
                arr_enemy[randx_4][randy_4 - 3] = 4
            }
            else if (randy_4 == 7) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 - 1] = 4
                arr_enemy[randx_4][randy_4 - 2] = 4
                arr_enemy[randx_4][randy_4 - 3] = 4
            }
            else if (randy_4 == 0) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 + 1] = 4
                arr_enemy[randx_4][randy_4 + 2] = 4
                arr_enemy[randx_4][randy_4 + 3] = 4
            }
            else if (randy_4 == 1) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 + 1] = 4
                arr_enemy[randx_4][randy_4 + 2] = 4
                arr_enemy[randx_4][randy_4 + 3] = 4
            }
            else if (randy_4 == 2) {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 + 1] = 4
                arr_enemy[randx_4][randy_4 + 2] = 4
                arr_enemy[randx_4][randy_4 + 3] = 4
            }
            else {
                arr_enemy[randx_4][randy_4] = 4
                arr_enemy[randx_4][randy_4 + 1] = 4
                arr_enemy[randx_4][randy_4 + 2] = 4
                arr_enemy[randx_4][randy_4 + 3] = 4
            }
        }
    
        */

    /*
    direction = Math.floor(Math.random() * 2)

    if (direction == 0) {

        if (randx_3_1 == 9) {
            while (arr_enemy[randx_3_1][randy_3_1] == 4 || arr_enemy[randx_3_1 - 1][randy_3_1] == 4 || arr_enemy[randx_3_1 - 2][randy_3_1] == 4)
                randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 - 1][randy_3_1] = 3
            arr_enemy[randx_3_1 - 2][randy_3_1] = 3
        }
        else if (randx_3_1 == 8) {
            while (arr_enemy[randx_3_1][randy_3_1] == 4 || arr_enemy[randx_3_1 - 1][randy_3_1] == 4 || arr_enemy[randx_3_1 - 2][randy_3_1] == 4)
                randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 - 1][randy_3_1] = 3
            arr_enemy[randx_3_1 - 2][randy_3_1] = 3
        }
        else if (randx_3_1 == 0) {
            while (arr_enemy[randx_3_1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 2][randy_3_1] == 4)
                randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 2][randy_3_1] = 3
        }
        else if (randx_3_1 == 1) {
            while (arr_enemy[randx_3_1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 2][randy_3_1] == 4)
                randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 2][randy_3_1] = 3
        }
        while (arr_enemy[randx_3_1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 1][randy_3_1] == 4 || arr_enemy[randx_3_1 + 2][randy_3_1] == 4) {
            randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 2][randy_3_1] = 3
        }
        if (arr_enemy[randx_3_1][randy_3_1] != 4 || arr_enemy[randx_3_1][randy_3_1 + 1] != 4 || arr_enemy[randx_3_1][randy_3_1 + 2] != 4) {
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 1][randy_3_1] = 3
            arr_enemy[randx_3_1 + 2][randy_3_1] = 3
        }
    }

    if (direction == 1) {
        if (randy_3_1 == 9) {
            //while(arr_enemy[randx_3_1][randy_3_1]==4||arr_enemy[randx_3_1][randy_3_1-1]==4||arr_enemy[randx_3_1-2][randy_3_1]==4)
            randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1][randy_3_1 - 1] = 3
            arr_enemy[randx_3_1][randy_3_1 - 2] = 3
        }
        else if (randy_3_1 == 8) {
            //while(arr_enemy[randx_3_1][randy_3_1]==4||arr_enemy[randx_3_1][randy_3_1-1]==4||arr_enemy[randx_3_1-2][randy_3_1]==4)
            randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1][randy_3_1 - 1] = 3
            arr_enemy[randx_3_1][randy_3_1 - 2] = 3
        }
        else if (randy_3_1 == 0) {
            //while(arr_enemy[randx_3_1][randy_3_1]==4||arr_enemy[randx_3_1][randy_3_1-1]==4||arr_enemy[randx_3_1-2][randy_3_1]==4)
            randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1][randy_3_1 + 1] = 3
            arr_enemy[randx_3_1][randy_3_1 + 2] = 3
        }
        else if (randy_3_1 == 1) {
            //while(arr_enemy[randx_3_1][randy_3_1]==4||arr_enemy[randx_3_1][randy_3_1-1]==4||arr_enemy[randx_3_1-2][randy_3_1]==4)
            randx_3_1 = Math.floor(Math.random() * 10)
            randy_3_1 = Math.floor(Math.random() * 10)
            arr_enemy[randx_3_1][randy_3_1] = 3
            arr_enemy[randx_3_1][randy_3_1 + 1] = 3
            arr_enemy[randx_3_1][randy_3_1 + 2] = 3
        }
        //while(arr_enemy[randx_3_1][randy_3_1]==4||arr_enemy[randx_3_1][randy_3_1+1]==4||arr_enemy[randx_3_1][randy_3_1+2]==4){
        randx_3_1 = Math.floor(Math.random() * 10)
        randy_3_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_1][randy_3_1] = 3
        arr_enemy[randx_3_1][randy_3_1 + 1] = 3
        arr_enemy[randx_3_1][randy_3_1 + 2] = 3
    }
    if (arr_enemy[randx_3_1][randy_3_1] != 4 || arr_enemy[randx_3_1][randy_3_1 + 1] != 4 || arr_enemy[randx_3_1][randy_3_1 + 2] != 4) {
        arr_enemy[randx_3_1][randy_3_1] = 3
        arr_enemy[randx_3_1][randy_3_1 + 1] = 3
        arr_enemy[randx_3_1][randy_3_1 + 2] = 3
    }

}
direction = Math.floor(Math.random() * 2)

if (direction == 0) {

    if (randx_3_2 == 9) {
        while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2 - 1][randy_3_2] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2 - 1][randy_3_2] = 3
        arr_enemy[randx_3_2 - 2][randy_3_2] = 3
    }
    else if (randx_3_2 == 8) {
        while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2 - 1][randy_3_2] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2 - 1][randy_3_2] = 3
        arr_enemy[randx_3_2 - 2][randy_3_2] = 3
    }
    else if (randx_3_2 == 0) {
        while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2 + 1][randy_3_2] == 4 || arr_enemy[randx_3_2 + 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2 + 1][randy_3_2] = 3
        arr_enemy[randx_3_2 + 2][randy_3_2] = 3
    }
    else if (randx_3_2 == 1) {
        while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2 + 1][randy_3_2] == 4 || arr_enemy[randx_3_2 + 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2 + 1][randy_3_2] = 3
        arr_enemy[randx_3_2 + 2][randy_3_2] = 3
    }
    while(arr_enemy[randx_3_2][randy_3_2]==4||arr_enemy[randx_3_2+1][randy_3_2]==4||arr_enemy[randx_3_2+2][randy_3_2]==4){
        randx_3_2=Math.floor(Math.random()*10)
        randy_3_2=Math.floor(Math.random()*10)
        arr_enemy[randx_3_2][randy_3_2]=3
        arr_enemy[randx_3_2][randy_3_2]=3
        arr_enemy[randx_3_2][randy_3_2]=3 
    }
    if (arr_enemy[randx_3_2][randy_3_2] != 4 || arr_enemy[randx_3_2 + 1][randy_3_2] != 4 || arr_enemy[randx_3_2 + 2][randy_3_2] != 4) {
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2 + 1][randy_3_2] = 3
        arr_enemy[randx_3_2 + 2][randy_3_2] = 3
    }
}

if (direction == 1) {
    if (randy_3_2 == 9) {
        while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2][randy_3_2 - 1] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 - 1] = 3
        arr_enemy[randx_3_2][randy_3_2 - 2] = 3
    }
    else if (randy_3_2 == 8) {
        if (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2][randy_3_2 - 1] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 - 1] = 3
        arr_enemy[randx_3_2][randy_3_2 - 2] = 3
    }
    else if (randy_3_2 == 0) {
        if (arr_enemy[randx_3_2][randy_3_1] == 4 || arr_enemy[randx_3_2][randy_3_1 - 1] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 + 1] = 3
        arr_enemy[randx_3_2][randy_3_2 + 2] = 3
    }
    else if (randx_3_2 == 1) {
        if (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2][randy_3_2 - 1] == 4 || arr_enemy[randx_3_2 - 2][randy_3_2] == 4)
            randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 + 1] = 3
        arr_enemy[randx_3_2][randy_3_2 + 2] = 3
    }
    while (arr_enemy[randx_3_2][randy_3_2] == 4 || arr_enemy[randx_3_2][randy_3_2 + 1] == 4 || arr_enemy[randx_3_2][randy_3_2 + 2] == 4) {
        randx_3_2 = Math.floor(Math.random() * 10)
        randy_3_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 + 1] = 3
        arr_enemy[randx_3_2][randy_3_2 + 2] = 3
    }
    if (arr_enemy[randx_3_2][randy_3_2] != 4 || arr_enemy[randx_3_2][randy_3_2 + 1] != 4 || arr_enemy[randx_3_2][randy_3_2 + 2] != 4) {
        arr_enemy[randx_3_2][randy_3_2] = 3
        arr_enemy[randx_3_2][randy_3_2 + 1] = 3
        arr_enemy[randx_3_2][randy_3_2 + 2] = 3
    }

}


direction = Math.floor(Math.random() * 2)

if (direction == 0) {
    if (randx_2_1 == 9) {
        while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1 - 1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1 - 1][randy_2_1] == 4)
            randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1 - 1][randy_2_1] = 2
    }
    else if (randx_2_1 == 0) {
        while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1 + 1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1 + 1][randy_2_1] == 4)
            randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1 + 1][randy_2_1] = 2
    }
    while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1 + 1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1 + 1][randy_2_1] == 4) {
        randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        console.log(randx_2_1, randy_2_1)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1 + 1][randy_2_1] = 2
    }
    if (arr_enemy[randx_2_1][randy_2_1] != 3 || arr_enemy[randx_2_1 + 1][randy_2_1] != 3 || arr_enemy[randx_2_1][randy_2_1] != 4 || arr_enemy[randx_2_1 + 1][randy_2_1] != 4) {
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1 + 1][randy_2_1] = 2
    }
}

if (direction == 1) {
    if (randy_2_1 == 9) {
        while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1 - 1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1][randy_2_1 - 1] == 4)
            randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1][randy_2_1 - 1] = 2
    }
    else if (randy_2_1 == 0) {
        while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1 + 1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1][randy_2_1 + 1] == 4)
            randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1][randy_2_1 + 1] = 2
    }
    while (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1 + 1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1][randy_2_1 + 1] == 4) {
        randx_2_1 = Math.floor(Math.random() * 10)
        randy_2_1 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1][randy_2_1 + 1] = 2
    }
    if (arr_enemy[randx_2_1][randy_2_1] == 3 || arr_enemy[randx_2_1][randy_2_1 + 1] == 3 || arr_enemy[randx_2_1][randy_2_1] == 4 || arr_enemy[randx_2_1][randy_2_1 + 1] == 4) {
        arr_enemy[randx_2_1][randy_2_1] = 2
        arr_enemy[randx_2_1][randy_2_1 + 1] = 2
    }

}


direction = Math.floor(Math.random() * 2)

if (direction == 0) {
    if (randx_2_2 == 9) {
        while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2 - 1][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2 - 1][randy_2_2] == 4)
            randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2 - 1][randy_2_2] = 2
    }
    else if (randx_2_2 == 0) {
        while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randy_2_2 + 1][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2 + 1][randy_2_2] == 4)
            randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2 + 1][randy_2_2] = 2
    }
    while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2 + 1][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2 + 1][randy_2_2] == 4) {
        randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2 + 1][randy_2_2] = 2
    }
    if (arr_enemy[randx_2_2][randy_2_2] != 3 || arr_enemy[randx_2_2 + 1][randy_2_2] != 3 || arr_enemy[randx_2_2][randy_2_2] != 4 || arr_enemy[randx_2_2 + 1][randy_2_2] != 4) {
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2 + 1][randy_2_2] = 2
    }
}

if (direction == 1) {
    if (randy_2_2 == 9) {
        while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2 - 1] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2][randy_2_2 - 1] == 4)
            randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2][randy_2_2 - 1] = 2
    }
    else if (randy_2_2 == 0) {
        while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2 + 1] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2][randy_2_2 + 1] == 4)
            randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2][randy_2_2 + 1] = 2
    }
    while (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2 + 1] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2][randy_2_2 + 1] == 4) {
        randx_2_2 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2][randy_2_2 + 1] = 2
    }
    if (arr_enemy[randx_2_2][randy_2_2] == 3 || arr_enemy[randx_2_2][randy_2_2 + 1] == 3 || arr_enemy[randx_2_2][randy_2_2] == 4 || arr_enemy[randx_2_2][randy_2_2 + 1] == 4) {
        arr_enemy[randx_2_2][randy_2_2] = 2
        arr_enemy[randx_2_2][randy_2_2 + 1] = 2
    }

}



direction = Math.floor(Math.random() * 2)

if (direction == 0) {
    if (randx_2_3 == 9) {
        while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randx_2_3 - 1][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_3] == 4 || arr_enemy[randx_2_3 - 1][randy_2_3] == 4)
            randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_3 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_3] = 2
        arr_enemy[randx_2_3 - 1][randy_2_3] = 2
    }
    else if (randx_2_3 == 0) {
        while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randy_2_3 + 1][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_2] == 4 || arr_enemy[randx_2_3 + 1][randy_2_2] == 4)
            randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_3 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_2] = 2
        arr_enemy[randx_2_3 + 1][randy_2_2] = 2
    }
    while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randy_2_3 + 1][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_2] == 4 || arr_enemy[randx_2_3 + 1][randy_2_2] == 4) {
        randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_2 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_2] = 2
        arr_enemy[randx_2_3 + 1][randy_2_2] = 2
    }
    if (arr_enemy[randx_2_3][randy_2_2] != 3 || arr_enemy[randx_2_3 + 1][randy_2_2] != 3 || arr_enemy[randx_2_3][randy_2_2] != 4 || arr_enemy[randx_2_3 + 1][randy_2_2] != 4) {
        arr_enemy[randx_2_3][randy_2_2] = 2
        arr_enemy[randx_2_3 + 1][randy_2_2] = 2
    }
}

if (direction == 1) {
    if (randy_2_3 == 9) {
        while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_3 - 1] == 3 || arr_enemy[randx_2_3][randy_2_3] == 4 || arr_enemy[randx_2_3][randy_2_3 - 1] == 4)
            randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_3 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_3] = 2
        arr_enemy[randx_2_3][randy_2_3 - 1] = 2
    }
    else if (randy_2_3 == 0) {
        while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_3 + 1] == 3 || arr_enemy[randx_2_3][randy_2_3] == 4 || arr_enemy[randx_2_3][randy_2_3 + 1] == 4)
            randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_3 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_3] = 2
        arr_enemy[randx_2_3][randy_2_3 + 1] = 2
    }
    while (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_3 + 1] == 3 || arr_enemy[randx_2_3][randy_2_3] == 4 || arr_enemy[randx_2_3][randy_2_3 + 1] == 4) {
        randx_2_3 = Math.floor(Math.random() * 10)
        randy_2_3 = Math.floor(Math.random() * 10)
        arr_enemy[randx_2_3][randy_2_3] = 2
        arr_enemy[randx_2_3][randy_2_3 + 1] = 2
    }
    if (arr_enemy[randx_2_3][randy_2_3] == 3 || arr_enemy[randx_2_3][randy_2_3 + 1] == 3 || arr_enemy[randx_2_3][randy_2_3] == 4 || arr_enemy[randx_2_3][randy_2_3 + 1] == 4) {
        arr_enemy[randx_2_3][randy_2_3] = 2
        arr_enemy[randx_2_3][randy_2_3 + 1] = 2
    }

}
while (arr_enemy[randx_1_1][randy_1_1] == 2 || arr_enemy[randx_1_1][randy_1_1] == 3 || arr_enemy[randx_1_1][randy_1_1] == 4) {
    arr_enemy[randx_1_1][randy_1_1] = 1
}
if (arr_enemy[randx_1_1][randy_1_1] != 2 || arr_enemy[randx_1_1][randy_1_1] != 3 || arr_enemy[randx_1_1][randy_1_1] != 4) {
    arr_enemy[randx_1_1][randy_1_1] = 1
}
while (arr_enemy[randx_1_2][randy_1_2] == 2 || arr_enemy[randx_1_2][randy_1_2] == 3 || arr_enemy[randx_1_2][randy_1_2] == 4) {
    arr_enemy[randx_1_2][randy_1_2] = 1
}
if (arr_enemy[randx_1_2][randy_1_2] != 2 || arr_enemy[randx_1_2][randy_1_2] != 3 || arr_enemy[randx_1_2][randy_1_2] != 4) {
    arr_enemy[randx_1_][randy_1_2] = 1
}
while (arr_enemy[randx_1_3][randy_1_3] == 2 || arr_enemy[randx_1_3][randy_1_3] == 3 || arr_enemy[randx_1_3][randy_1_3] == 4) {
    arr_enemy[randx_1_3][randy_1_3] = 1
}
if (arr_enemy[randx_1_3][randy_1_3] != 2 || arr_enemy[randx_1_3][randy_1_3] != 3 || arr_enemy[randx_1_3][randy_1_3] != 4) {
    arr_enemy[randx_1_3][randy_1_3] = 1
}
while (arr_enemy[randx_1_4][randy_1_4] == 2 || arr_enemy[randx_1_4][randy_1_4] == 3 || arr_enemy[randx_1_4][randy_1_4] == 4) {
    arr_enemy[randx_1_4][randy_1_4] = 1
}
if (arr_enemy[randx_1_4][randy_1_4] == 2 || arr_enemy[randx_1_4][randy_1_4] == 3 || arr_enemy[randx_1_4][randy_1_4] == 4) {
    arr_enemy[randx_1_4][randy_1_4] = 1
}

*/
    console.log(arr_enemy)
    paint_enemy()
    console.log(arr_enemy)

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
                ctx.fillStyle = "blue"
                ctx.fillRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
                ctx.strokeStyle = "blue"
                ctx.strokeRect(startx_enemy + (20 * i), starty + (20 * j), 20, 20)
            }
        }
    }
}
