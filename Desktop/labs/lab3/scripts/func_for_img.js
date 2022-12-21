let arr_d_img = [];
var m = 10;

function traffic_img(){
    for (let i = 0; i < 5; i++){
        let temp = document.getElementsByClassName("d_img");
        arr_d_img.push(temp[i]);
        temp[i].style.position = "relative";
        temp[i].style.top = "0px";
    }
    let timer = setInterval(function(){
        m += 10;
        for (let i = 0; i < 5; i++){
            arr_d_img[i].style.top = m + 25 + "px";
            arr_d_img[i].style.transform = "rotate(" + m + 1 + "deg)";
        }
        if (m > 2000) clearInterval(timer);
    }, 50);
    console.log("traffic_img - run")
}

let str = ""

function generate_tree(node, sep){
    // node - DOM object
    str += sep + node + "<br/>"
    if (node.childNodes.length != 0){
        for (let i = 0; i < node.childNodes.length;i++)
            console.log("node --- " + node), generate_tree(node.childNodes[i], sep + '&nbsp;&nbsp;');
    }
}

window.addEventListener('scroll', function() {
    if (m > 2000)
        for (let i = 0; i < 5; i++)
            arr_d_img[i].remove();    
});