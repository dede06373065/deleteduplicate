function deleteduplicate(str){
    for(var i=0;i<str.length;i++){
        for(var j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                str.splice(j,1)
                j--
            }
        }
    }
    console.log(str)
    return str
}

deleteduplicate([1,2,5,4,3,4,2,3,3,1,2,3,4,2])