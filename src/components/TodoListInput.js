import React from "react";
import Dialog from "./Dialog";
import { Button } from "antd";
import TodoListInputCss from "../assets/style/TodoListInput.module.css";
class TodoListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      todoItemId: 0,
      showDialog: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ToggleDialog = this.ToggleDialog.bind(this);
  }
  handleChange(event) {
    this.setState({
      todoItem: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.todoItem.length > 0) {
      this.setState({
        todoItemId: this.state.todoItemId + 1,
      });
      this.props.onSubmit(this.state.todoItem, this.state.todoItemId);
      this.setState({
        todoItem: "",
      });
    }else{
        this.ToggleDialog();
    }
  }
  ToggleDialog() {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  }
  render() {
    return (
      <>
        <form className={TodoListInputCss.additem_form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todoItem}
            onChange={this.handleChange}
            placeholder="Enter a new todo item"
            className={TodoListInputCss.additem_input}
          />
          <Button htmlType="submit" className={TodoListInputCss.additem_btn}>
            Add
          </Button>
        </form>
        {this.state.showDialog && (
          <Dialog>
            <p className="title">Please Enter Todo Item</p>
            <Button
              onClick={this.ToggleDialog}
              type="primary"
              className="ant-btn-danger"
            >
              Exit
            </Button>
          </Dialog>
        )}
      </>
    );
  }
}
export default TodoListInput;
