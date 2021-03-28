function convertToRoman(a) {
    let slg = '' + a
    let res = ''
    let du = a % 10
    let du2 = a % 100 - a%10
    let du3 = a % 1000 - du - du2
    let lanchay = 0
    let newa = 0
    if (slg.length >= 4) {lanchay = 4; newa = (a -du3 - du2-du) / 1000} else (lanchay = slg.length)
    let res1 = ''
    for (let i = 0; i < newa; i ++ ) {res1 = 'M' + res1}
    for (let i = 1; i <= lanchay ; i ++ ) {
        if ( i == 1) {
            if (du <= 3) {for (let i = 1 ; i <= du ; i ++) {res += 'I'}}
            if (du == 4) {res += 'IV'}
            if (du == 5) {res += 'V'}
            if (du >= 6 && du <= 8) {res += 'V'; for (let i = 6 ; i <= du ; i ++) {res += 'I'}}
            if (du == 9) {res += 'IX'}
            // if (du == 0) {res += 'X'}
        }

        if ( i == 2) {
            if (du2 == 10) {res = 'X' + res}
            if (du2 == 20) {res = 'XX'+ res}
            if (du2 == 30) {res = 'XXX' + res}
            if (du2 == 40 ) {res = 'XL' + res}
            if (du2 == 50) {res = 'L' + res}
            if (du2 == 60 ) {res = 'LX' + res}
            if (du2 == 70 ) {res = 'LXX' + res}
            if (du2 == 80 ) {res = 'LXXX' + res}
            if (du2 == 90 ) {res = 'XC' + res}
            // if (du2 == 0) {res = 'C'  + res}
        }
        if (i == 3) {
            if (du3 == 100) {res = 'C' + res}
            if (du3 == 200) {res = 'CC'+ res}
            if (du3 == 300) {res = 'CCC' + res}
            if (du3 == 400) {res = 'CD' + res}
            if (du3 == 500) {res = 'D' + res}
            if (du3 == 600) {res = 'DC' + res}
            if (du3 == 700) {res = 'DCC' + res}
            if (du3 == 800) {res = 'DCCC' + res}
            if (du3 == 900) {res = 'CM' + res}
        }

        if (i >= 4) {
            res = 'M' + res
        }
    }
    
    return res1+res
}

console.log(convertToRoman(11900))