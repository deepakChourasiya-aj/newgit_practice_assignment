
// cheking palindrom 
let str = 'deepak';
//writing wrong intentionally for assignment ;;
let newstr = ''
for(let i=0;i<=str.length;i++){
   newstr+= str[i];
}

if(str==newstr){
    console.log('Palindrom')
}else{
    console.log('not palindrom')
}