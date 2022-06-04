import React from "react";
import "../assets/style/CoinItem.css"
class CoinItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="coin-item">
        <div className="coin-item__image">
          <img src={this.props.image} />
        </div>
        <div className="coin-item__name">
          <span>{this.props.name}</span>
        </div>
        <div className="coin-item__price">
          <span>{this.props.price}</span>
        </div>
      </li>
    );
  }
}
export default CoinItem;
