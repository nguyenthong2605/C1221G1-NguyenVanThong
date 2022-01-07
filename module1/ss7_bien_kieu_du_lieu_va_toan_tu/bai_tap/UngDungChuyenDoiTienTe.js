function tinhToan() {

    let tien = document.getElementById('tien').value;
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let vnd1 = document.getElementById('VND1').value;
    let vnd2 = document.getElementById('VND2').value;
    let usd1 = document.getElementById('USD1').value;
    let usd2 = document.getElementById('USD2').value;

    if(a == vnd1 && b == usd2) {
        tien = tien / 23000
    } else if ((a == vnd1 && b == vnd2) || (a == usd1 && b == usd2)){
        tien = tien
    }
    else {
        tien = tien*23000
    }


    alert(tien);


}