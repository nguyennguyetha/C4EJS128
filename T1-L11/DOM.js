//S1: Define elements
//S2: Logic data solving 
//S3: Change it 

console.log("Clock")
const DayEle = document.getElementById("day")
console.log(DayEle);
console.log (DayEle.innerHTML) //Take HTML in this tag 
console.log(DayEle.innerText); // Take this text in this tag 
// Change Friday (FRI) to Sunday (SUN) 
DayEle.innerHTML ="SUN";
DayEle.style.color ="pink" 
DayEle.style.border = "10px solid black"
// Remember CSS & HTML at the previous lessons 

const Ele = document.getElementsByTagName("div"); //Run a HTML Collection (Array)
console.log(Ele)


//To take big elements from HTML 
const BigEle = document.getElementsByClassName("class name")
for(const Ele of BigEle){
    console.log(Ele.innerText);
}

//To take minimal elements from HTML 
const MiniEle = document.querySelectorAll("Class name")
console.log(MiniEle)

//To take one element from HTML 
const OneEle = document.querySelector("#day");
console.log (OneEle);

//To set an interval (Time)
setInterval(() => {
    const second = new Date().getSeconds();
    console.log(second);
},1000)





