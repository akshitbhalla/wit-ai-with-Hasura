import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type your query here"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          style={{
        margin: '0 auto',
        maxWidth: 800
      }}
        />
      </div>
    );
  }
}
