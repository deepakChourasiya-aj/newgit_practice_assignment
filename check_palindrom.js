
// cheking palindrom 
let str = 'deepak';

let newstr =''
for(let i=str.length-1;i>=0;i++){
   newstr+= str[i];
}

if(str==newstr){
    console.log('Palindrom');
}else{
    console.log('not palindrom');
}