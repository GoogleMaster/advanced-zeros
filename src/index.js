module.exports = function getZerosCount(number, base) {
    // your implementation
    function countMinNFact(n,m,min){
        let count = 0;
        min = min || 1;
        for(let i = min; i <= n; i++){
            let num = i;
            while(num % m == 0){
                count++;
                num /= m;
            }
        }
        return count;
    }
    function countMinN(n,m){
        let count = 0;
        while(n % m == 0){
            n /= m;
            count++;
        }
        return count;
    }

    var result = 0; //количество нулей в конце
    var max; //максимальный делитель числа
    var aux_number = base;
    var nat = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; //список простых чисел от 2 до 256
    var dividers = [];
    for(var i = 0; i < nat.length; i++){
        if(base % nat[i] == 0){
            max = nat[i];
            dividers.push([nat[i],countMinN(base,nat[i])]);
        }
        if(nat[i] > base){
            break;
        }
    }
    var max_count = 0;
    /*while(aux_number % max == 0){
        max_count++;
        aux_number /= max;
    }
    //console.log(max_count);
    if(max_count == 0){
        while(aux_number / max > max){
            max_count++;
            aux_number /= max;
        }
    }*/
    if(dividers.length >= 2 && dividers[0][1] / dividers[dividers.length - 1][1] >= dividers[dividers.length-1][0] * dividers[0][0]){
        while(aux_number / max > max){
            max_count++;
            aux_number /= max;
        }
    }else{
        while(aux_number % max == 0){
            max_count++;
            aux_number /= max;
        }
    }
    //console.log("max:" + max + ",max_count:"+max_count);
    aux_number = 1;
    while(aux_number * max <= number){
        aux_number *= max;
        result += Math.floor(number / aux_number);
    }
    //console.log(result);
    result = Math.floor(result / max_count);
    console.log(result);
    return result;
}