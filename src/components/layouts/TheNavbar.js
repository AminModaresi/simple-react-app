import React from "react";
import { Container } from "react-grid-system";
import { Link } from "react-router-dom";
import TheNavbarCss from "../../assets/style/TheNavbar.module.css";
class TheNavbar extends React.Component {
  render() {
    return (
      <header className={TheNavbarCss.header}>
        <Container className="flex justify-content">
          <div>React App</div>
          <nav className={TheNavbarCss.navbar}>
            <ul className={TheNavbarCss.navbar_list}>
              <li className={TheNavbarCss.navbar_list_item}>
                <Link to="/">Coin List</Link>
              </li>
              <li className={TheNavbarCss.navbar_list_item}>
                <Link to="/todo-list">Todo List</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}
export default TheNavbar;
