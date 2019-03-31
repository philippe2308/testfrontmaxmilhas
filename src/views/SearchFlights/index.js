import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Header} from './../../components/Header';
import {MenuTab} from './../../components/MenuTab';
import {TableFlights} from './../../components/TableFlights';
import {FormSearch} from './../FormSearch';
import {searchFlights} from './action';
import {Alert} from './../../components/Alert';

class SearchFlights extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
        tabActived:0,
        message: '',
        showAlert:false
      }
    }

  searchFlights(data){
    const{from,to,outboundDate,inboundDate}=data;
    if(from===""||to===""){
      this.setState({message:"Escolha os aeroportos de partida e destino!", showAlert:true});
    }else if(outboundDate>inboundDate){
      this.setState({message:"A data de retorno deve ser igual ou após a data da ida!", showAlert:true});
    }else if(from===to){
      this.setState({message:"Os aeroportos de partida e destino devem ser diferentes!", showAlert:true});
    }else{
      
      this.setState({message:"", showAlert:false});
      this.props.searchFlights(data);
    }
  }

  render(){
      const{tabActived, message, showAlert}=this.state;
      const{inbound,outbound}=this.props.SearchFlightsReducer;
      return(<div  style={{backgroundColor: 'rgb(237,243,248)'}}>
            <Header/>
            <FormSearch onClickSearchFlights={(data)=>this.searchFlights(data)}/>
            <MenuTab tabActived={tabActived} onClickTab={(tabIndex)=>this.setState({tabActived:tabIndex})}/>
            <TableFlights flights={(tabActived===0)?outbound:inbound}/>
            <Alert message={message} showAlert={showAlert}/>
          </div>);
  }
}

const mapStateToProps = store => ({
  SearchFlightsReducer:store.SearchFlightsReducer
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({searchFlights}, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchFlights);
  