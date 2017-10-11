
// 0 ~ n-1の整数を生成するジェネレータ
exports.range = function*(n) {
    var index = 0;
    while(index < n) {
        yield index;
        index = index + 1;
    }
}

// ランダムな順番の整数が入ったリストを生成する関数
exports.generateRandomIndex = function(n) {
    var indexList = [];
    var randomValueList = [];
    for(let k of exports.range(n)) {
        indexList.push(k);
        randomValueList.push(Math.random());
    }

    return indexList.sort(function(a, b) {
        var x = randomValueList[a];
        var y = randomValueList[b];
        return ((x < y) ? -1 : (x > y) ? 1 : 0);
    });
}

// リストをランダムにシャッフルする関数
exports.shuffle = function(list) {
    
    var newList = [];
    
    var randomIndex = exports.generateRandomIndex(list.length);
    for(let k of randomIndex) {
        newList.push(list[k]);
    }

    return newList;
}

// 辞書のキーをリストに変換する関数
exports.keys2list = function(dict) {
    var list = [];
    for(var key in dict) {
        list.push(key);
    }
    
    return list;
}
