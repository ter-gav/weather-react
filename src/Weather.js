import React from "react";
import axios from "axios";

export default function Weather(props) {
function handleResponse(response) {
alert(`The weather in ${props.city} is ${response.data.main.temp}ºC`);

}

let apiKey = "f408b458699300138b2f973b8c6a1c4a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse)

    return <div>Hello
    </div>
}