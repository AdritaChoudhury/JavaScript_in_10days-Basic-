var getMaxLessThanK= function(n,k){
    let max_v=0;
    for(var i=1;i<n;i++){
        for(var j=i+1;j<n+1;j++){
            if(Number(i&j)<k && Number(i&j)>max_v)
                max_v=i&j;
        }
    }
    return max_v
}
