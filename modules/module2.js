export function load(){
    let div = document.createElement('div');
    div.innerHTML=`<div>module 2 loaded</div>`;
    document.body.appendChild(div);
}
console.log('module 2');
