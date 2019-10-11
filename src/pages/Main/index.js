import React, { Component } from 'react';
import AceEditor from 'react-ace';
// Import a Mode (language)
import 'brace/mode/java';
// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';
import SplitPane from 'react-split-pane';
import Chart from '../../components/chart';

// import { StyleContainerButton, StyleButton } from './style';
import './style.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      type: 'start',
      timestamp: 1519780251293,
      select: ['min_response_time', 'max_response_time'],
      group: ['os', 'browser'],
    };
  }

  render() {
    return (
      <SplitPane split="horizontal" minSize={210} width={700} defaultSize={200}>
        <div>
          <AceEditor
            mode="java"
            theme="github"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            value={JSON.stringify(this.state)}
            width="900px"
            height="200px"
          />
        </div>
        <div>
          <Chart />
          {/* <StyleContainerButton>
            <StyleButton> vai </StyleButton>
          </StyleContainerButton> */}
        </div>
      </SplitPane>
    );
  }
}
