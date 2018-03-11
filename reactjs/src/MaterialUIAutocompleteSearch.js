import React, {Component} from 'react';
import YoutubeFinder        from 'youtube-finder';

import {cyan500} from 'material-ui/styles/colors';
import { AutoComplete }   from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import JSONP              from 'jsonp';
import PaperComponent from './PaperComponent.js';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';

injectTapEventPlugin();

var searchExport;
 var resp;

const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

  const muiTheme = getMuiTheme({
palette: {
  textColor: cyan500,
},
});

class MaterialUIAutocompleteSearch extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.onNewRequest   = this.onNewRequest.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  performSearch() {
      const
        self = this,
        url  = googleAutoSuggestURL + this.state.inputValue;

      if(this.state.inputValue !== '') {
        JSONP(url, function(error, data) {
          let searchResults, retrievedSearchTerms;

          if(error) return error;

          searchResults = data[1];

          retrievedSearchTerms = searchResults.map(function(result) {
            return result[0];
          });

          self.setState({
            dataSource: retrievedSearchTerms
          });
        });
      }
    }
	
     onNewRequest(searchTerm) {
         axios.post('https://app.alumna10.hasura-app.io/backend',{query:searchTerm})
              .then(response => { resp = JSON.stringify(response.data.entities.location[0].value);
                  console.log(response);
                  document.getElementsByClassName('result')[0].innerHTML='location is '+resp; 
              });                                  // SearchTerm- where the value of search is stored.
           //alert(resp);      
                          //To test whether the input is stored in it or not.it is simple alert box
      }
     

  render() {
    return <div><MuiThemeProvider muiTheme={getMuiTheme()}>
      
      <AutoComplete
        searchText    ={this.state.inputValue}
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput}
        onNewRequest  ={this.onNewRequest}

        style={{
                            backgroundColor: '#f5f8fa',
                            borderRadius: '5px',
                            border: '1px solid #e6ecf0',
                            marginTop:'40vh',
                            marginLeft: '30vw',
                            width: '40vw',
                            height: '38px',
                            //margin:'auto',
                            display: 'block',
                      }}
        />

      </MuiThemeProvider>
      <div className="result" style={{color: 'white', fontSize: '200%', fontWeight:'bold' }}></div>
      </div>
  }
}
export {searchExport};
export default MaterialUIAutocompleteSearch;
console.log(searchExport); 
