import * as module2  from './module2.js'

export function load(){

    let div = document.createElement('div');
    div.innerHTML=`<div>module 1 loaded</div>`;
    document.body.appendChild(div);
    module2.load();
}
export let counter = 2;

export let obj={ a:1 }
