import axios from 'axios';
import {
  URL_API
} from "./../../config/types";



export const searchFlights = () => {
  return async (dispatch)=>{
    const postData = {
        tripType: "RT", 
        from: "REC",  //origem
        to: "RIO",  //destino
        outboundDate: "2019-12-22", //data de partida
        inboundDate: "2019-12-28", //data de volta
        cabin: "EC", //classe econômica (EC) ou executiva (EX)
        adults: 2, //adultos
        children: 1, //crianças
        infants: 0 //bebês
    }
    
    axios.post(`${URL_API }/search?time=${Date.now()}`, postData)
    .then(res => {
        console.log(res);
        
        axios.get(`${URL_API }/search/${res.data.id}/flights?airline=${res.data.airlines[0].label}`)
            .then(res2 => {
                console.log(res2);
            })
       })

  };}
