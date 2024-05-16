let xhr=new XMLHttpRequest()
city='Hyderabad'
xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5a7e305a2f72ca5f904d20a8f43b1a1`)
xhr.send()
xhr.onload=function(){
    data=JSON.parse(xhr.response)
    console.log(data)
    console.log(data.main.temp)
}