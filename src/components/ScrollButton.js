import React from 'react'
import { jsx, css, keyframes } from '@emotion/core';

/* Thanks to Qbrid's React Button at https://codepen.io/Qbrid/pen/GjVvwL */

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }


  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <p
        css={css`
          animation: ${bounce} 2s ease 10;
        `}
        onClick={() => {
          this.scrollToTop();
        }}
      >
        👆
      </p>
    );
  }
}

export default ScrollButton
