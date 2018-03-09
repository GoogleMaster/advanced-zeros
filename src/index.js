module.exports = function getZerosCount(number, base) {
    // your implementation
    var nat = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; //список простых чисел от 2 до 256
    var dividers = [];

    function countMinN(n,m){
        while(n % m == 0){
            var count = count || 0;
            count++;
            n /= m;
        }
        return count;
    }

    function countMinNFact(n,m){
        var count = 0;
        for(let i = m; i <= number; i *= m){
            count += Math.floor(n / i);
        }
        return count;
    }

    for(let i = 0; i < nat.length; i++){
        if(base % nat[i] == 0){
            dividers.push([nat[i],countMinN(base,nat[i])]);
        }
        if(nat[i+1] > base) break;
    }

    for(let i = 0; i < dividers.length; i++){
        dividers[i] = [dividers[i][0],dividers[i][1],Math.floor(countMinNFact(number,dividers[i][0])/dividers[i][1])];
    }
    dividers.sort(function(a,b){return a[2]-b[2];});

    return dividers[0][2];
}