import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StaticSearchBarr from './StaticSearchBar';
import Searchbarrr from './MaterialUIAutocompleteSearch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Searchbarrr/>, document.getElementById('root'));
registerServiceWorker();
