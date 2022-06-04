import React from "react";
import "../assets/style/CoinFilter.css"
class CoinFilter extends React.Component{
    constructor(props){
        super(props);
        this.handelFilterName = this.handelFilterName.bind(this);
        this.state = {
            filterName: "",
        }
        this.input = React.createRef();
    }
    handelFilterName(event){
        this.setState({ 
            filterName: this.input.value
        });
        this.props.onFilterName(event.target.value);
    }
    render(){
        return(
            <div className="box-filter">
                <input ref={this.input} type="text" value={this.state.filterName} onChange={this.handelFilterName} placeholder="Search" />
            </div>
        )
    }
}

export default CoinFilter