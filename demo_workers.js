let i=0;
function timedCount(){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();

    m=checkTime(m);
    s=checkTime(s);
    i=h+":"+m+":"+s;
    postMessage(i);
    setTimeout("timedCount()",1000);
}
function checkTime(i){
    if(i<10){i="0"+i};
    return i;
}
timedCount();