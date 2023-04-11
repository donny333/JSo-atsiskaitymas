/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator{
    constructor(no01, no02){
        this.no01 = no01;
        this.no02 = no02;
    }
    sum(){
        return this.no01 + this.no02;
    }
    subtraction(){
        return this.no01 - this.no02;
    }
    multiplication(){
        return this.no01 * this.no02;
    }
    division(){
        return this.no01 / this.no02;
    }
};

console.log(new Calculator(6, 3).division());