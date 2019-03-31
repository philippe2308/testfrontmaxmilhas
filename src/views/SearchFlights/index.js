import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Header} from './../../components/Header';
import {FormSearch} from './../FormSearch';

class SearchFlights extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render(){
        return(<div>
            <Header/>
            <FormSearch/>
            </div>);
    }
}

const mapStateToProps = store => ({
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchFlights);
  