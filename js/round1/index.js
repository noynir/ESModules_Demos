import * as module1 from './module1.js';

const DOMLoaded = ()=>{

    let div = document.createElement('div');
    // div.innerHTML=`index loaded`;
    document.body.appendChild(div);
    module1.load();

}
document.addEventListener('DOMContentLoaded',DOMLoaded);




