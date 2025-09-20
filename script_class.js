class SVG{
    constructor({id, idPath}){
        this.doc= document.getElementById(id);
        this.path= document.getElementById(idPath);
        this.max= 100;
        this.speed= 10;
        this.move= 0;
        this.hover= false;

        this.doc.addEventListener('pointerenter',()=>{
            if(this.move <= this.max){
                this.hover = true;
            };
        });
        this.doc.addEventListener('pointerleave',()=>{
                if(this.move >= 0){
                    this.hover = false;
                };
        });
    };

    setSvg(){
        this.svg = `
            M911 0
            C1414 0 1822 414 1822 925
            C1822 1354 1535 1714 1146 1820
            C1146 1538 1146 1411 1079 1359
            C1244 1338 1359 1256 1424 1147
            L${1699 + (this.move/2)} ${1192 + this.move}
            L1440 1117
            C1450 1097 1458 1076 1465 1055
            L${1750 + (this.move)} 1032
            H1472
            C1479 1005 1483 976 1486 947
            L${1712 + (this.move)} ${860 - this.move} 
            L1487 917
            C1488 817 1459 713 1399 622
            C1422 541 1423 492 ${1378 - this.move} ${388 - (this.move )}
            C1286 375 1235 394 1146 476
            C941 428 839 431 679 476
            C594 402 544 375 ${447 + this.move} ${388 - (this.move )}
            C409 480 408 531 422 622
            C372 704 344 799 341 893
            L${109 - (this.move)} ${838 - this.move}
            L341 929
            C342 951 344 974 348 995
            H${54 - (this.move)}
            L354 1023
            C358 1042 364 1060 371 1079
            L${97 - (this.move/2)} ${1153 + this.move}
            L384 1111
            C441 1232 557 1328 742 1359
            C730 1400 722 1423 700 1460
            C616 1495 569 1496 485 1460
            C394 1252 196 1249 ${253 - (this.move)} ${1271 + this.move/5}
            C309 1293 355 1500 447 1579
            C539 1658 631 1592 679 1605
            C722 1618 686 1791 680 1822
            C288 1718 0 1356 0 925
            C0 414 407 0 911 0Z`;
        this.path.setAttribute('d', this.svg);
    };

    update(){
        if(this.move < this.max && this.hover){
            this.move +=1 * this.speed;
            this.setSvg();
        } else if (this.move > 0 && !this.hover){
            this.move -=1 * this.speed;
            this.setSvg();
        };
    };
};

const github = new SVG({id:'github', idPath:'githubPath'});

function animate(){
    github.update();
    requestAnimationFrame(animate);
};
animate();