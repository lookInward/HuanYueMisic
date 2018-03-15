var wins = [];     
var countTemp = 0;      

function getCount(x,y){
    let xm=x-5,ym=y-5;
for (var i = 0; i < x; i++) {
    wins[i] = [];
    for (var j = 0; j < y; j++) {
        wins[i][j] = []
    }
}

for (var i = 0; i < x; i++) {
    for (var j = 0; j < ym; j++) {
        for (var k = 0; k < 5; k++) {
            wins[i][j + k][countTemp] = true;
        }
        countTemp++;
    }
}

for (var i = 0; i < y; i++) {
    for (var j = 0; j < xm; j++) {
        for (var k = 0; k < 5; k++) {
            wins[j + k][i][countTemp] = true;
        }
        countTemp++;
    }
}

for (var i = 0; i < xm; i++) {
    for (var j = 0; j < ym; j++) {
        for (var k = 0; k < 5; k++) {
            wins[i + k][j + k][countTemp] = true;
        }
        countTemp++;
    }
}

for (var i = 0; i < xm; i++) {
    for (var j = y-1; j > 3; j--) {
        for (var k = 0; k < 5; k++) {
            wins[i + k][j - k][countTemp] = true;
        }
        countTemp++;
    }
}
return countTemp;
}

export var count = getCount(20,20);
export var allwins = wins;


export function robotAI(x,y,over,count, allwins, meWin, robotWin, chessBoard) {
    if(over){
        return ;
    }
    let meScore = [];
    let robotScore = [];
    let max = 0;
    let u=0,v=0;
    let coord={};

    for (let i = 0; i < x; i++) {
        meScore[i] = [];
        robotScore[i] = [];
        for (let j = 0; j < y; j++) {
            meScore[i][j] = 0;
            robotScore[i][j] = 0;
        }
    }
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            if (chessBoard[i][j] == 0) {
                for (let k = 0; k < count; k++) {
                    if (allwins[i][j][k]) {
                        if (meWin[k] == 1) {
                            meScore[i][j] += 200;
                        } else if (meWin[k] == 2) {
                            meScore[i][j] += 400;
                        } else if (meWin[k] == 3) {
                            meScore[i][j] += 2000;
                        } else if (meWin[k] == 4) {
                            meScore[i][j] += 10000;
                        }
                        if (robotWin[k] == 1) {//白方，有1个子
                            robotScore[i][j] += 220;
                        } else if (robotWin[k] == 2) {
                            robotScore[i][j] += 420;
                        } else if (robotWin[k] == 3) {
                            robotScore[i][j] += 2200;
                        } else if (robotWin[k] == 4) {
                            robotScore[i][j] += 20000;
                        }
                    }
                }
                if(meScore[i][j] > max ){
                    max = meScore[i][j] ;
                    u = i ;
                    v = j ;
                }else if(meScore[i][j] = max){
                    if(robotScore[i][j] > robotScore[u][v]){
                        u = i ;
                        v = j ;
                    }
                }
                if(robotScore[i][j] > max ){
                    max = robotScore[i][j] ;
                    u = i ;
                    v = j ;
                }else if(robotScore[i][j] = max){
                    if(meScore[i][j] > meScore[u][v]){
                        u = i ;
                        v = j ;
                    }
                }
            }
        }
    }
    coord.x=u;
    coord.y=v;
    return coord;
}




