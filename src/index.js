import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from "./container/BlogPost/BlogPost";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<BlogPost />, document.getElementById('content'));
reportWebVitals();
