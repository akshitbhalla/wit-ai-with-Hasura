import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 50,
  width: 800,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',


};

const PaperComponent = () => (
  <div>
    <Paper style={style} zDepth={5} />
  </div>
);

export default PaperComponent;
