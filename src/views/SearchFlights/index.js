import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Header} from './../../components/Header';
import {MenuTab} from './../../components/MenuTab';
import {TableFlights} from './../../components/TableFlights';
import {FormSearch} from './../FormSearch';
import {searchFlights} from './action';

class SearchFlights extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
        tabActived:0
      }
    }

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    this.searchFlights({ 
      from: 'CNF',  //origem
      to: 'BSB',  //destino
      outboundDate: "2019-04-07", //data de partida
      inboundDate:  "2019-04-12", //data de volta
      cabin: "EC", //classe econômica (EC) ou executiva (EX)
      adults: 2, //adultos
      children: 1, //crianças
      infants: 0 //bebês

    });
  }
  resize() {
    this.setState({windowHeight:window.innerHeight});
  }

  searchFlights(data){
    this.props.searchFlights(data);
  }

  render(){
      const{tabActived,windowHeight}=this.state;
      const{inbound,outbound}=this.props.SearchFlightsReducer;
      return(<div  style={{height:windowHeight, backgroundColor: 'rgb(237,243,248)'}}>
            <Header/>
            <FormSearch onClickSearchFlights={(data)=>this.searchFlights(data)}/>
            <MenuTab tabActived={tabActived} onClickTab={(tabIndex)=>this.setState({tabActived:tabIndex})}/>
            <TableFlights flights={(tabActived===0)?outbound:inbound}/>
          </div>);
  }
}

const mapStateToProps = store => ({
  SearchFlightsReducer:store.SearchFlightsReducer
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({searchFlights}, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchFlights);
  