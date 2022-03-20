import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    window.addEventListener('scroll', this.getIndex);
  }

  componentDidMount() {
    if (this.props.animation) {
      this.imageRef.current.addEventListener('load', this.getIndex);
    }
  }

  getIndex = () => {
    let currentIndex = this.imageRef.current.getBoundingClientRect().top;
    const { animation } = this.props;
    animation(currentIndex);
  }

  render() {
    const { className, src, alt } = this.props;
    return (
      <img ref={this.imageRef} className={className} src={src} alt={alt} />
    );
  }
}

export default Image;