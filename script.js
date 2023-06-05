let hr=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

function displaytime(){
    let date=new Date();
    //
    let hh=date.getHours()
    let mm=date.getMinutes()
    let ss=date.getSeconds()

    // rotation calculation
    let hrRotate=30*hh+mm/2;
    let minRotate=6*mm;
    let secRotate=6*ss;

    hr.style.transform=`rotate(${hrRotate}deg)`
    min.style.transform=`rotate(${minRotate}deg)`
    sec.style.transform=`rotate(${secRotate}deg)`

}
setInterval(displaytime,1000)
