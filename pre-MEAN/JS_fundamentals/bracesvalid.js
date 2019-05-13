function bracesValid(str){
    var arr = [];
    for(var i=0; i<str.length; i++){
        switch (str[i]){
            case '{': // if( str[i] == '{' )
                arr.push(1); 
                break;
            case '[': 
                arr.push(2);
                break;
            case '(':
                arr.push(3);
                break;
            case '}':
                if(arr.pop()==1){
                    break;
                } else {
                    return false;
                }
            case ']':
                if(arr.pop()==2){
                    break;
                } else {
                    return false;
                }
            case ')':
                if(arr.pop()==3){
                    break;
                } else {
                    return false;
                }
            default:
        }
    }
    return (arr.length == 0);
}

console.log(bracesValid("[]}"));
console.log(bracesValid("()[]{}"));
console.log(bracesValid("{(this)[is]{test}}"));
console.log(bracesValid("{[]}"));
console.log(bracesValid("[{]}"));