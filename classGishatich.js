class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
        this.newgazan = [];
    }
    getNewCordiantes() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell1(ch, ch1) {
        this.getNewCordiantes();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch || matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;



    }
    chooseCell(character) {
        this.getNewCordiantes();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newgazan = new Gishatich(newX, newY, this.index);
            gazanArr.push(newgazan);
            this.energy = 8;
        }
    }


    eat() {

        var emptyCells = this.chooseCell1(2, 5);
        var newCell = random(emptyCells);

        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            if (matrix[newY][newX] == 2) {
                for (var i in grassEatArr) {
                    if (grassEatArr[i].x == newX && grassEatArr[i].y == newY) {
                        grassEatArr.splice(i, 1);
                    }
                }
            }
            else if (matrix[newY][newX] == 5) {
                this.die();
            }
            matrix[newY][newX] = 3;
            this.energy++;
            if (this.energy >= 15) {
                this.mul();


            }

        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    move() {

        var emptyCells = this.chooseCell1(0, 1);
        var newCell = random(emptyCells);


        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;

        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gazanArr) {
            if (this.x == gazanArr[i].x && this.y == gazanArr[i].y) {
                gazanArr.splice(i, 1);
                break;
            }
        }

    }


}






