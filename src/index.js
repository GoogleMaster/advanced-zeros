module.exports = function getZerosCount(number, base) {
    // your implementation
    var result = 0; //количество нулей в конце
    var max; //максимальный делитель числа
    var aux_number = base;
    var nat = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; //список простых чисел от 2 до 256
    for(var i = 0; i < nat.length; i++){
        if(base % nat[i] == 0){
            max = nat[i];
        }
        if(nat[i] > base){
            break;
        }
    }
    var max_count = 0;
    while(aux_number % max == 0){
        max_count++;
        aux_number /= max;
    }
    //console.log("max:" + max + ",max_count:"+max_count);
    aux_number = 1;
    while(aux_number * max <= number){
        aux_number *= max;
        result += Math.floor(number / aux_number);
    }
    result = Math.floor(result / max_count);
    //console.log(result);
    return result;
}