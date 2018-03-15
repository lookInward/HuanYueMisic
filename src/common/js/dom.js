export function getData(el,name,val){
    const prefix='data-';
    name=prefix+name;
    var a=el.getAtrribute(name);
    alert(a);
}