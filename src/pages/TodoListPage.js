import React from "react";
import TodoListInput from "../components/TodoListInput"
import TodoList from "../components/TodoList"
import { Container, Row, Col } from "react-grid-system";
class TodoListPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      todoItems: [],
      todoItem: "",
      todoItemId: 0,
    };
  }
  onSubmit(todoItem, todoItemId) {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { todoItem : todoItem, todoItemId : todoItemId },
      ]
    })
  }
  removeItem(todoItemId){
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => todoItem.todoItemId !== todoItemId)
    })
  }
  render() {
    return (
      <div className="section">
        <Container>
          <Row>
            <Col md={4}>
              <TodoListInput onSubmit={this.onSubmit}/>
            </Col>
            <Col md={8}>
              <TodoList removeItem={this.removeItem} todoItems={this.state.todoItems}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TodoListPage;
