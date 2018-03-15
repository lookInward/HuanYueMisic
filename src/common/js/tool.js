function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}//这里+1是为了能取到max的值

export function upset(arr){
    for(let i=0;i<arr.length;i++){
        let j=getRandomInt(0,i);
        let t=arr[i];
        arr[i]=arr[j];
        arr[j]=t;
    }//每一个数组元素都和一个随机位置的元素互换
    return arr;
}