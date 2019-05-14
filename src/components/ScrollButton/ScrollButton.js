import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Spring } from 'react-spring/renderprops';
import debounce from 'lodash.debounce'

/* Thanks to Brian Han for this button. Uses emotion instead of styled components because already had
emotion installed */

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  position: fixed;
  right: 2rem;
  font-size: 200%;
  bottom: 1rem;
  z-index: 1;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
`;

class ScrollButton extends React.PureComponent {
  state = {
    windowPosition: null,
    downScrollTriggered: false,
    isBottom: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let windowPosition = window.pageYOffset;
    this.setState({ windowPosition });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = debounce(() => {
    let previousPosition = this.state.windowPosition;
    let currentPosition = window.pageYOffset;
    let isBottomNow =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (previousPosition > currentPosition && !isBottomNow) {
      this.setState({ downScrollTriggered: false });
    } else {
      this.setState({ downScrollTriggered: true });
    }
    this.setState({ windowPosition: currentPosition, isBottom: isBottomNow });
  }, 500);

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <Spring
        from={{ transform: 'translateY(100px)' }}
        to={{
          transform: this.state.downScrollTriggered
            ? 'translateY(0px)'
            : 'translateY(100px)',
        }}
      >
        {props => (
          <StyledButton style={props} onClick={this.scrollToTop}>
            <span
              css={css`
                font-size: 200%;
              `}
              role="img"
              aria-label="scroll to top"
            >
              ☝️
            </span>
          </StyledButton>
        )}
      </Spring>
    );
  }
}

export default ScrollButton
