import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';
import AutoCompleteSearch from './AutoCompleteExampleSimple';
import Header from './header'

export default class StaticSearchBar extends React.Component {

  render() {
    return (

      <MuiThemeProvider>
       
      <SearchBar
       onChange={() => console.log('onChange')}
       onRequestSearch={() => console.log('onRequestSearch')}
       placeholder="Start typing already!"
       style={{
         margin: '0 auto',
         maxWidth: 800
       }}
     />

     <AutoCompleteSearch/>

        </MuiThemeProvider>
         );
}
}
