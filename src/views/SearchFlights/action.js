import axios from 'axios';
import {
  URL_API,
  RM_ALL_FLIGHTS,
  ADD_FLIGHTS,
} from "./../../config/types";



export const searchFlights = (
  {
    from,
    to,
    outboundDate,
    inboundDate,
    cabin,
    adults,
    children,
    infants
  }) => {
  return async (dispatch)=>{
    dispatch({type: RM_ALL_FLIGHTS});
    const postData = {
        tripType: "RT", 
        from: from,  //origem
        to: to,  //destino
        outboundDate: outboundDate,//"2019-12-22", //data de partida
        inboundDate: inboundDate,// "2019-12-28", //data de volta
        cabin: cabin, //classe econômica (EC) ou executiva (EX)
        adults: adults, //adultos
        children: children, //crianças
        infants: infants //bebês
    }
    axios.post(`${URL_API }/search?time=${Date.now()}`, postData)
    .then(res => {
        for(let i=0; i<res.data.airlines.length; i++){
          axios.get(`${URL_API }/search/${res.data.id}/flights?airline=${res.data.airlines[i].label}`)
            .then(res2 => {  
			        dispatch({type: ADD_FLIGHTS, newValue: res2.data});
          })
        }
       })

  };}
