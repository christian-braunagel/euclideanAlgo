export function euclideanAlgo(a, b){

    // at least one parameter is missing
    if( (a === undefined) || (b === undefined) ){
        return 'The euclidean algo needs two input parameters.'
    }

    // a or b is not a natural number > 0
    if( (a < 1) || (b < 1) || (!Number.isInteger(a)) || (!Number.isInteger(b)) ){
        return 'The euclidean algo is only defined for natural numbers > 0.';
    }

    

    return 0;
}