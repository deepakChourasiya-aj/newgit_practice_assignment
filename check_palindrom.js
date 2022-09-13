
// cheking palindrom 
let str = 'deepak';

let newstr =''
for(let i=0;i<=str.length;i++){
   newstr+= str[i];
}

if(str==newstr){
    console.log('not Palindrom');
}else{
    console.log('palindrom');
}