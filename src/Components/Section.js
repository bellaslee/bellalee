import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.sectionRef = React.createRef();
    window.addEventListener('scroll', this.getIndex);
  }

  componentDidMount() {
    this.getIndex();
    this.sectionRef.current.addEventListener('load', this.getIndex);
  }

  /**
   * Gets the current position of the image and updates the state to true if the image is visible
   * on the screen and false if it is not.
   */
  getIndex = () => {
    let top = 0;
    let bottom = 0;

    if (this.sectionRef.current) {
      let currentPosition = this.sectionRef.current.getBoundingClientRect();
      top = currentPosition.top;
      bottom = currentPosition.bottom;
    }

    if (top <= (window.innerHeight || document.documentElement.clientHeight)) {
      this.setState({ active: true });
    }

    if (bottom < 0 || top >= (window.innerHeight || document.documentElement.clientHeight)) {
      this.setState({ active: false });
    }
  }

  /**
   * If the section is active, returns a corresponding string to be used as a class name.
   * @returns {String} - either 'active' or an empty string.
   */
  setActive() {
    if (this.state.active) {
      return 'section--active';
    }
    return '';
  }

  render() {
    return (
      <section
        ref={this.sectionRef}
        className={`section ${this.props.name} ${this.setActive()}`}
      >
        <div className="container">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;