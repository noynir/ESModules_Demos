import * as module1 from './module1.js'
// import isEmpty from './lodash/isEmpty.js'
import * as _ from 'lodash/lodash'

document.addEventListener('DOMContentLoaded',()=>{

    let div = document.createElement('div');
    // div.innerHTML=`index loaded`;
    div.innerHTML=`index loaded is empty ${_.isEmpty([])}`;
    document.body.appendChild(div);
    module1.load();

});
module1.counter=4;
//module1.obj.a = 5;

