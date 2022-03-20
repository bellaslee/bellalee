import React from 'react';
import Image from './Image';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.sectionRef = React.createRef();
    window.addEventListener('scroll', this.getIndex);
  }
  
  componentDidMount() {
    this.sectionRef.current.addEventListener('load', this.getIndex);
  }

  /**
   * Gets the current position of the image from the top of the page.
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

  activeClass() {
    if (this.state.active) {
      return 'active';
    }
    return '';
  }
  render() {
    return (
      <section ref={this.sectionRef} id={`${this.props.name}`} className={`block ${this.activeClass()}`}>
        <div className="container">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;