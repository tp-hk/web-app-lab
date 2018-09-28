import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import {
  ButtonGroup,
  Button
} from 'react-bootstrap';

const display = {
  INLINE: 'inline',
  NONE: 'none',
}

class StartOptions extends ComponentBase {
  constructor(props) {
    super(props);

    this.state = {
      showStart: display.INLINE,
      showPause: display.NONE,
      showStop: display.NONE
    }
  }

  handleStartClick = (evt) => {
    evt.preventDefault();

    this.setState({
      showStart: display.NONE,
      showPause: display.INLINE,
      showStop: display.INLINE
    });
  }

  handlePauseClick = (evt) => {
    evt.preventDefault();

    this.setState({
      showStart: display.INLINE,
      showPause: display.NONE,
      showStop: display.INLINE
    });
  }

  handleStopClick = (evt) => {
    evt.preventDefault();

    this.setState({
      showStart: display.INLINE,
      showPause: display.NONE,
      showStop: display.NONE
    });
  }

  render = () => {
    return (
      <SettingContainer
        id='start-options-container'
        title='Start'>
        <ButtonGroup>
          <Button bsStyle='primary' id='simulation-start-btn' style={{ display: this.state.showStart }} onClick={this.handleStartClick} >
            Start
          </Button>
          <Button bsStyle='primary' id='simulation-pause-btn' style={{ display: this.state.showPause }} onClick={this.handlePauseClick} >
            Pause
          </Button>
          <Button bsStyle='primary' id='simulation-stop-btn' style={{ display: this.state.showStop }} onClick={this.handleStopClick} >
            Stop
          </Button>
        </ButtonGroup>
      </SettingContainer>
    )
  }
}

export default StartOptions;



