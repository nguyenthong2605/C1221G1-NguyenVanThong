function tinhToan() {

    let tien = document.getElementById('tien').value;
    let ln1 = document.getElementById('ln1').value;
    let ln2 = document.getElementById('ln2').value;
    let vnd1 = document.getElementById('VND1').value;
    let vnd2 = document.getElementById('VND2').value;
    let usd1 = document.getElementById('USD1').value;
    let usd2 = document.getElementById('USD2').value;

    if(ln1 == vnd1 && ln2 == usd2) {
        tien = tien / 23000
    } else if ((ln1 == vnd1 && ln2 == vnd2) || (ln1 == usd1 && ln2 == usd2)){
        tien = tien
    }
    else {
        tien = tien*23000
    }


    alert(tien);


}