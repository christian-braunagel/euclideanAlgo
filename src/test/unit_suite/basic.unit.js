import { expect } from "chai";
import { euclideanAlgo } from "../../euclideanAlgo.js"

describe('Specification of behaviour of euclidean algorithm program', () => {

    it('should return the greatest common divisor', () => {
        const result = euclideanAlgo(3,6);
        expect(result).to.equal(3);
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(-3,6);
        expect(result).to.equal("The euclidean algo is only defined for natural numbers > 0.");
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(9,0);
        expect(result).to.equal("The euclidean algo is only defined for natural numbers > 0.");
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(9, 4.5);
        expect(result).to.equal("The euclidean algo is only defined for natural numbers > 0.");
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(1);
        expect(result).to.equal("The euclidean algo needs two parameters.");
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(663578, 3554);
        expect(result).to.equal(2);
    })

    it('should return an error message', () => {
        const result = euclideanAlgo(188, 376);
        expect(result).to.equal(188);
    })

})