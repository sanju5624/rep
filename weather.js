function func(){
    let city=document.getElementById("city").value
    let res=document.getElementById("result")
    console.log(city)
let xhr=new XMLHttpRequest()
xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5a7e305a2f72ca5f904d20a8f43b1a1`)
xhr.send()
xhr.onload=function(){
    data=JSON.parse(xhr.response)
    res.textContent=xhr.response
    console.log(data)
    console.log(data.main.temp)
}
}