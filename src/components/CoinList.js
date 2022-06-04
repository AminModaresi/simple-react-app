import axios from "axios";
import React from "react";
import CoinItem from "./CoinItem";
import "../assets/style/CoinList.css";
class CoinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        listCoin: [],
        filterList : []
    }
  }
  componentDidMount(){
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false")
      .then(response => {
          return response.data;
      })
      .then(data => {
          this.setState({
                listCoin: data
          })
      })
  }
  render() {
    return (
      <>
        <h1 className="title">
            Coin List
        </h1>
        <ul>
            {this.state.listCoin.map((coin, index) => {
                if(this.props.filterName === ""){
                    return <CoinItem key={index} name={coin.name} price={coin.current_price} image={coin.image}/>
                }else{
                  if(coin.name.toLowerCase().includes(this.props.filterName.toLowerCase())){
                    return <CoinItem key={index} name={coin.name} price={coin.current_price} image={coin.image}/>
                  }
                }
            })}
            
        </ul>
      </>
    );
  }
}

export default CoinList;