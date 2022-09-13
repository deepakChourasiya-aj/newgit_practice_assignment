
let num = 7;
let count=0;

for(let i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
}
if(count==2){
    console.log('Yes prime')
}else{
    console.log('Not prime')
};
