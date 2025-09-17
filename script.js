const github = document.getElementById('github');
const githubPath = document.getElementById('githubPath');
const max = 100;
const speed = 10;
let move = 0;
let hover = false;
let touch = false;
let githubSVG = `
        M911 0
        C1414 0 1822 414 1822 925
        C1822 1354 1535 1714 1146 1820
        C1146 1538 1146 1411 1079 1359
        C1244 1338 1359 1256 1424 1147
        L${1699 + (move/2)} 1192.43
        L1440 1117
        C1450 1097 1458 1076 1465 1055
        L${1750 + (move/2)} 1032
        H1472
        C1479 1005 1483 976 1486 947
        L${1712 + (move/2)} 860 
        L1487 917
        C1488 817 1459 713 1399 622
        C1422 541 1423 492 1378 ${388 - (move/5)}
        C1286 375 1235 394 1146 476
        C941 428 839 431 679 476
        C594 402 544 375 447 ${388 - (move/5)}
        C409 480 408 531 422 622
        C372 704 344 799 341 893
        L${109 - (move/2)} 838
        L341 929
        C342 951 344 974 348 995
        H${54 - (move/2)}
        L354 1023
        C358 1042 364 1060 371 1079
        L${97 - (move/2)} 1153
        L384 1111
        C441 1232 557 1328 742 1359
        C730 1400 722 1423 700 1460
        C616 1495 569 1496 485 1460
        C394 1252 196 1249 ${253 - (move/2)} 1271
        C309 1293 355 1500 447 1579
        C539 1658 631 1592 679 1605
        C722 1618 686 1791 680 1822
        C288 1718 0 1356 0 925
        C0 414 407 0 911 0Z`;
githubPath.setAttribute('d', githubSVG);
github.style.fill = 'white';

window.addEventListener('touchstart', () => touch = true)
window.addEventListener('mousemove', () => touch = false)

github.addEventListener('mouseenter',()=>{
    if(move <= max && !touch){
        hover = true;
    }
})

github.addEventListener('mouseleave',()=>{
        if(move >= 0 && !touch){
            hover = false;
        }
})

github.addEventListener('touchstart',(e)=>{
    touch = true;
    if(move <= max && touch){
        hover = true;
    }
},{passive: false})

github.addEventListener('touchend',()=>{
    touch = true;
    if(move <= max && touch){
        hover = false;
    }
})

function update(){
    githubSVG = `
        M911 0
        C1414 0 1822 414 1822 925
        C1822 1354 1535 1714 1146 1820
        C1146 1538 1146 1411 1079 1359
        C1244 1338 1359 1256 1424 1147
        L${1699 + (move/2)} 1192.43
        L1440 1117
        C1450 1097 1458 1076 1465 1055
        L${1750 + (move/2)} 1032
        H1472
        C1479 1005 1483 976 1486 947
        L${1712 + (move/2)} 860 
        L1487 917
        C1488 817 1459 713 1399 622
        C1422 541 1423 492 1378 ${388 - (move/5)}
        C1286 375 1235 394 1146 476
        C941 428 839 431 679 476
        C594 402 544 375 447 ${388 - (move/5)}
        C409 480 408 531 422 622
        C372 704 344 799 341 893
        L${109 - (move/2)} 838
        L341 929
        C342 951 344 974 348 995
        H${54 - (move/2)}
        L354 1023
        C358 1042 364 1060 371 1079
        L${97 - (move/2)} 1153
        L384 1111
        C441 1232 557 1328 742 1359
        C730 1400 722 1423 700 1460
        C616 1495 569 1496 485 1460
        C394 1252 196 1249 ${253 - (move/2)} 1271
        C309 1293 355 1500 447 1579
        C539 1658 631 1592 679 1605
        C722 1618 686 1791 680 1822
        C288 1718 0 1356 0 925
        C0 414 407 0 911 0Z`;
        githubPath.setAttribute('d', githubSVG);
}
function animate(){
    if(move < max && hover){
        move +=1 * speed;
        update();
    }
    if (move > 0 && !hover){
        move -=1 * speed;
        update();
    }
    requestAnimationFrame(animate);
}
animate();