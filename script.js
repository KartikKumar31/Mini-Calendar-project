const date = new Date()

const weekDay= ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"]
const monthName=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]

document.getElementById('date').innerHTML=date.getDate()
document.getElementById('day').innerHTML=weekDay[date.getDay()]
document.getElementById('month').innerHTML= monthName[date.getMonth()]
document.getElementById('year').innerHTML=date.getFullYear()
