function modifyArray(nums) {
    var x= function(n){
        if(n%2==0)
            return n*2;
        else
            return n*3;
    }
    var newArr= nums.map(x);
    return newArr;
}
