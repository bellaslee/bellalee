import React, { useEffect, useRef, useState } from 'react';

function Section({ name, children }) {
  const [active, setActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    getIndex();
    window.addEventListener('scroll', getIndex);
  }, []);

  /**
   * Gets the current position of the image and updates the state to true if the image is visible
   * on the screen and false if it is not.
   */
  const getIndex = () => {
    let top = 0;
    let bottom = 0;

    if (ref.current) {
      let currentPosition = ref.current.getBoundingClientRect();
      top = currentPosition.top;
      bottom = currentPosition.bottom;
    }

    if (top <= (window.innerHeight || document.documentElement.clientHeight)) {
      setActive(true);
    }

    if (bottom < 0 || top >= (window.innerHeight || document.documentElement.clientHeight)) {
      setActive(false);
    }
  }

  return (
    <section
      ref={ref}
      className={`section ${name} ${active ? 'section--active' : ''}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;