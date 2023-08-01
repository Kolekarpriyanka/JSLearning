function reverseString(str) {
    
    
    let reverse =" ";
    let result="";
        for(var index=str.length-1;index>=0;index--){
        const char =str.charAt(index);
       reverse =reverse.concat(char);
           if (str.charAt(index)!=" ") {
                var char1 =(str.charAt(index));
                    result =result.concat(char1);
    
            }
        }
    console.log(`The given sting is :"${str} " after reverse: ${result}`);
    }
    reverseString("Hard work always pays back");
    reverseString("Soon I will be Angular IT Champ");