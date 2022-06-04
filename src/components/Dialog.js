import React from "react";
import DialogCss from '../assets/style/Dialog.module.css'
class Dialog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={DialogCss.dialog}>
                <div className={DialogCss.dialog_content}>
                  {this.props.children}
                </div>
            </div>
        )
    }
}
export default Dialog