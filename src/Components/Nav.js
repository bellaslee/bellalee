import '../assets/css/Nav.css';
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
    this.topRef = React.createRef();
    this.bottomRef = React.createRef();
  }

  linkConfig = [
    {
      page: "Home",
      link: "/"
    },
    // {
    //   page: "About",
    //   link: "/about"
    // }
  ]

  /**
   * Toggles the active class for the images that create the menu icon.
   */
  onClick = () => {
    this.setState({
      showing: this.state.showing === true ? false : true
    });
    this.setActive();
    this.topRef.current.classList.toggle('nav__icon-component__top--active');
    this.bottomRef.current.classList.toggle('nav__icon-component__bottom--active');
  }

  /**
   * If the navigation is active, returns a corresponding string to be used as a class name.
   * @returns {String} - either 'hidden' or an empty string.
   */
  setActive() {
    if (this.state.showing) {
      return '';
    }
    return 'nav__menu--hidden';
  }

  /**
   * Checks whether or not the entered page name matches the current page prop and
   * returns a corresponding string to be used as a class name.
   * @param {String} name - the name of the page that the prop should be checked against.
   * @returns {String} - either 'current' or an empty string.
   */
  checkCurrentPage(name) {
    if (name === this.props.currentPage) {
      return 'nav__link-list__item--current';
    }
    return '';
  }

  /**
   * Determines whether the navigation menu icon should be dark or light.
   * @returns {String} - url to the image for the navigation menu rectangles.
   */
  imageSource() {
    let color;
    if (this.state.showing) {
      color = 'light';
    } else {
      color = 'dark';
    }
    return `./img/assets/nav-rectangle-${color}.png`;
  }

  render() {
    return (
      <section className="nav">
        <section className={`nav__menu ${this.setActive()}`}>
          <ul className="link-list nav__link-list">
            {
              this.linkConfig.map((link) => {
                return (
                  <li key={link.page} className={`nav__link-list__item ${this.checkCurrentPage(link.page)}`}>
                    <a href={link.link}>{link.page}</a>
                  </li>
                )
              })
            }
          </ul>
        </section>
        <div className="nav__button" onClick={this.onClick}>
          <img ref={this.topRef} src={this.imageSource()} alt="" className="nav__icon-component nav__icon-component__top" />
          <img ref={this.bottomRef} src={this.imageSource()} alt="" className="nav__icon-component nav__icon-component__bottom" />
        </div>
      </section>
    );
  }
}

export default Nav;