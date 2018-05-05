class Pilasos {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
        this.newgazan = [];
        this.maxx = matrix[0].length - 1;
        this.maxy = matrix.length - 1;
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


    gg() {
        if (matrix[this.y][this.x] == 1) {
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (matrix[this.y][this.x] == 2) {
            for (var i in grassEatArr) {
                if (grassEatArr[i].x == this.x && grassEatArr[i].y == this.y) {
                    grassEatArr.splice(i, 1);
                }
            }
        }
        else if (matrix[this.y][this.x] == 3) {
            for (var i in gazanArr) {
                if (gazanArr[i].x == this.x && gazanArr[i].y == this.y) {
                    gazanArr.splice(i, 1);
                }

            }
        }
        else if (matrix[this.y][this.x] == 4) {
            for (var i in TunArr) {
                if (TunArr[i].x == this.x && TunArr[i].y == this.y) {
                    TunArr.splice(i, 1);
                }
            }
        }
    }

    move() {
        if (this.x < this.maxx && this.y == 0) {
            matrix[this.y][this.x] = 0;
            this.gg();
            this.x++;
            matrix[this.y][this.x] = this.index;
        }

        else if (this.x == this.maxx && this.y < this.maxy) {
            matrix[this.y][this.x] = 0;
            this.gg();
            this.y++;
            matrix[this.y][this.x] = this.index;
        }

        else if (this.y == this.maxy && this.x > 0) {
            matrix[this.y][this.x] = 0;
            this.gg();
            this.x--;
            matrix[this.y][this.x] = this.index;

        }
        else if (this.x == 0 && this.y > 0) {
            matrix[this.y][this.x] = 0;
            this.gg();
            this.y--;
            matrix[this.y][this.x] = this.index;
        }

    }

}