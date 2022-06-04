import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import TodoListCss from "../assets/style/TodoList.module.css"  ;
class TodoListItem extends React.Component {
  constructor(props) {
      super(props);
      this.RemoveItem = this.RemoveItem.bind(this);
  }
  RemoveItem(){
    this.props.removeItem(this.props.todoItemId);
  }
  
  render(){
      return(
        <li className={TodoListCss.todolist__item}>
            <FontAwesomeIcon onClick={this.RemoveItem} icon={faTimes} />
            <p>{this.props.todoItem}</p>
        </li>
      )
  }    
}
export default TodoListItem