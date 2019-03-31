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
    this.props.searchFlights();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({windowHeight:window.innerHeight});
  }
  render(){
      const{tabActived,windowHeight}=this.state;
      return(<div  style={{height:windowHeight, backgroundColor: 'rgb(237,243,248)'}}>
            <Header/>
            <FormSearch/>
            <MenuTab tabActived={tabActived} onClickTab={(tabIndex)=>this.setState({tabActived:tabIndex})}/>
            <TableFlights/>
          </div>);
  }
}

const mapStateToProps = store => ({
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({searchFlights}, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchFlights);
  