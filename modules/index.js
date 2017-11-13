import * as module1 from './module1.js'
// import {load, counter}  from './module1.js'
// import isEmpty from './lodash/isEmpty.js'

document.addEventListener('DOMContentLoaded',()=>{

    let div = document.createElement('div');
    div.innerHTML=`index loaded`;
    // div.innerHTML=`index loaded  ${isEmpty([])}`;
    document.body.appendChild(div);
    module1.load();
    // module1.counter=5;


})
