(function() {


// wgt is like [[2,'choice1'], [4,'choice2'], [8,'choice3']]
function Weighted(wgt) {
    var norm = (function() {
        var out=[[],[]], count=0;
        for (var w in wgt) count += wgt[w][0];
        for (var w in wgt) out[0].push(wgt[w][0]/count), out[1].push(wgt[w][1]);
        return out;
    }())

    ,chance = Math.random()
    ,check = 0

    for (var i=0; i<norm[0].length; i++)
        if (chance <= (check += norm[0][i])) return norm[1][i]
}

function Choice(arr) {
    return arr[~~(Math.random() * arr.length)]
}

DUMMY.newSample('weighted', Weighted);
DUMMY.newSample('choice', Choice);


}());
