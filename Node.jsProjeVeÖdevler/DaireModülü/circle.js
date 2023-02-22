function circleArea(r) {
    let pi = 3.14159265359;
    let area = pi * Math.pow(r, 2)
    console.log(
        `Yarıçapı (${r}) olan dairenin alanı: (${parseFloat(area).toFixed(2)})`
    );
}
function circleCircumference (r){
    let pi = 3.14159265359;
    let Circum=2*pi*r
    console.log(
        `Yarıçapı (${r}) olan dairenin çevresi: (${Circum})`
    );
}

module.exports ={circleArea,circleCircumference}
