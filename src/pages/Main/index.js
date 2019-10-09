import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import AceEditor from 'react-ace';
import { Container } from './style';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <SplitPane split="horizontal">
          <AceEditor />
          <div style={{ backgroundColor: 'blue' }}>RIGHT</div>
        </SplitPane>
      </Container>
    );
  }
}
