import '../assets/css/Nav.css';
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.topRef = React.createRef();
    this.bottomRef = React.createRef();
  }

  linkConfig = [
    {
      page: "Home",
      link: "/"
    },
    {
      page: "About",
      link: "/about"
    }
  ]

  /**
   * Toggles the active class for the images that create the menu icon.
   */
  onClick = () => {
    this.props.onClick();
    this.topRef.current.classList.toggle('active');
    this.bottomRef.current.classList.toggle('active');
  }

  /**
   * If the navigation is active, returns a corresponding string to be used as a class name.
   * @returns {String} - either 'hidden' or an empty string.
   */
  setActive() {
    if (this.props.active) {
      return '';
    }
    return 'hidden';
  }

  /**
   * Checks whether or not the entered page name matches the current page prop and
   * returns a corresponding string to be used as a class name.
   * @param {String} name - the name of the page that the prop should be checked against.
   * @returns {String} - either 'current' or an empty string.
   */
  checkCurrentPage(name) {
    if (name === this.props.currentPage) {
      return 'current';
    }
    return '';
  }

  /**
   * Determines whether the navigation menu icon should be dark or light.
   * @returns {String} - url to the image for the navigation menu rectangles.
   */
  imageSource() {
    let color;
    if (this.props.active) {
      color = 'light';
    } else {
      color = 'dark';
    }
    return `./img/assets/nav-rectangle-${color}.png`;
  }

  render() {
    return (
      <section id="nav">
        <section id="nav-view" className={`${this.setActive()}`}>
          <ul className="link-list">
            {
              this.linkConfig.map((link) => {
                return (
                  <li key={link.page} className={this.checkCurrentPage(link.page)}>
                    <a href={link.link}>{link.page}</a>
                  </li>
                )
              })
            }
          </ul>
        </section>
        <div id="nav-button" onClick={this.onClick}>
          <img ref={this.topRef} src={this.imageSource()} alt="" className="top" />
          <img ref={this.bottomRef} src={this.imageSource()} alt="" className="bottom" />
        </div>
      </section>
    );
  }
}

export default Nav;