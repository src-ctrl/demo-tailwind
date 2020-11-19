import _ from 'lodash';
import css from './index.css';

function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
   return element;
 }
 
 document.body.appendChild(component());