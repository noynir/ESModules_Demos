import * as module1 from './module1.js';

const DOMLoaded = async () =>{

    let div = document.createElement('div');
    // div.innerHTML=`index loaded`;
    document.body.appendChild(div);
    module1.load();
    let t0 = performance.now();
    const _ = await import('./lodash/lodash.dist.js');
    let t1 = performance.now();
    console.log(`loading loadsh took ${t1-t0}ms`);
    div.innerHTML=`index loaded is empty ${_.isEmpty([])}`;


}
document.addEventListener('DOMContentLoaded',DOMLoaded);
