import '../assets/css/Nav.css';
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.topRef = React.createRef();
    this.bottomRef = React.createRef();
  }

  onClick = () => {
    this.props.onClick();
    this.topRef.current.classList.toggle('active');
    this.bottomRef.current.classList.toggle('active');
  }

  renderNav() {
    if (this.props.navShown) {
      return (
        <section>
          Tester.
        </section>
      )
    }
  }

  render() {
    return (
      <div className="nav">
        {this.renderNav()}
        <div onClick={this.onClick} className="nav-button">
          <img ref={this.topRef} src="./img/assets/navRectangle.png" alt="" className="top" />
          <img ref={this.bottomRef} src="./img/assets/navRectangle.png" alt="" className="bottom" />
        </div>
      </div>
    );
  }
}

export default Nav;