import React from "react";
import TodoListItem from "./TodoListItem";
import TodoListCss from "../assets/style/TodoList.module.css"  ;
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      showDialog: true,
    };
  }
  removeItem(todoItemId) {
    this.props.removeItem(todoItemId);
  }
  render() {
    return (
      <ul className={TodoListCss.todolist}>
        {this.props.todoItems.map((todoItem) => (
          <TodoListItem
            key={todoItem.todoItemId}
            todoItemId={todoItem.todoItemId}
            todoItem={todoItem.todoItem}
            removeItem={this.removeItem}
          />
        ))}
      </ul>
    );
  }
}
export default TodoList;
