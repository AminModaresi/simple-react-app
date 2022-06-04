import React from "react";
import CoinFilter from "../components/CoinFilter";
import CoinList from "../components/CoinList";
import { Container } from "react-grid-system";
class CoinListPage extends React.Component {
  constructor(){
    super();
    this.onFilterName = this.onFilterName.bind(this);
    this.state ={
        filterName: "",
    }
  }
  onFilterName(filterName){
    this.setState({
      filterName : filterName
    })
  }
  render(){
    return (
        <Container className="section">
          <CoinFilter onFilterName={this.onFilterName}/>
          <CoinList filterName={this.state.filterName}/>
        </Container>
      );
  }
}
export default CoinListPage;