import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StaticSearchBarr from './StaticSearchBar';
import Searchbarrr from './MaterialUIAutocompleteSearch';
import registerServiceWorker from './registerServiceWorker';
import Header from './header'

ReactDOM.render(<Header/>, document.getElementById('text'));
ReactDOM.render(<Searchbarrr/>, document.getElementById('root'));
registerServiceWorker();
