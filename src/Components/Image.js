import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.imageRef = React.createRef();
    window.addEventListener('scroll', this.getIndex);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.getIndex);
  }

  /**
   * Gets the current position of the image from the top of the page.
   */
  getIndex = () => {
    let top = 0;
    let bottom = 0;

    if (this.imageRef.current) {
      let currentPosition = this.imageRef.current.getBoundingClientRect();
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
    const { className, src, alt } = this.props;
    return (
      <img ref={this.imageRef} className={`${className} ${this.activeClass()}`} src={src} alt={alt} />
    );
  }
}

export default Image;