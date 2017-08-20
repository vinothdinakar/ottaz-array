'use strict'

function ottaz(n) {
    console.log('ottaz '+n);
    if(!n) {
        n = 1729;
    }
    var _ottaz = new Array(n);
    for(var v=0;v<n;v++){
        _ottaz[v] = v;
    }

    console.log(_ottaz);
    return _ottaz;
}

module.exports = ottaz;