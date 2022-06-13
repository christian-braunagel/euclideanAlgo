export function euclideanAlgo(a, b){

    // at least one parameter is missing
    if( (a === undefined) || (b === undefined) ){
        return 'The euclidean algo needs two input parameters.'
    }

    // a or b is not a natural number > 0
    if( (a < 1) || (b < 1) || (!Number.isInteger(a)) || (!Number.isInteger(b)) ){
        return 'The euclidean algo is only defined for natural numbers > 0.';
    }

    /********* Euclidean algo *********/
    // sort according to size
    let q = a > b ? a : b;
    let p = a > b ? b : a;

    // declare & init r
    let r = q;

    do{
        r = q%p;
        q = p;
        p = r;

    }while(r>1);

    return q;
}