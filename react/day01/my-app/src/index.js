import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './jsx/Header'
import Header2 from './jsx/Header2'
import Li from './jsx/list'


import * as serviceWorker from './serviceWorker';

const obj ={
    ham:true,
    back:false,
    email:false,
}

ReactDOM.render(
    <div>
        <Header  type='ham'/>
        <Header />
        <Header type='back'/>
        <Header2 obj={obj} ></Header2>
        <Li num={1}></Li>
    </div>
   
, document.getElementById('root'));

serviceWorker.unregister();

