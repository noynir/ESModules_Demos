import * as _ from '../lodash/lodash.js'
import * as module1 from './module1.js';

const DOMLoaded = async func ()=>{

    let div = document.createElement('div');
    // div.innerHTML=`index loaded`;
    document.body.appendChild(div);
    module1.load();
    div.innerHTML=`index loaded is empty ${_.isEmpty([])}`;
}
document.addEventListener('DOMContentLoaded',DOMLoaded);
