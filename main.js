
const hours = document.getElementById('hours');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const showTime = ()=>{
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = zero(dateTime.getMinutes());
    let sec = zero(dateTime.getSeconds());

    if(hr > 12){
        hr = hr -12;
        ampm.innerHTML = "PM";
    }

    hours.innerHTML = zero(hr);
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}
const zero = (num)=>{
    return num <10 ? "0"+num : num 
}
setInterval(showTime,500);