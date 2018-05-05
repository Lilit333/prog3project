class Sunk {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [];
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
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell1(0, 1);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 4;

            var newSunk = new Sunk(newX, newY, this.index);
            TunArr.push(newSunk);
            this.multiply = 0;
        }
    }
}








