console.log('Staking calculator running ...');

const monthEvolution = class {
    constructor(copBase, earnYearRate,  period, dollarValue, expenseYearRate ){
        this.copBase = copBase;
        this.earnYearRate = earnYearRate;
        this.expenseYearRate = expenseYearRate;
        this.period = period;
        this.dollarValue = dollarValue;
    }
    values(){
        return {
            base: this.copBase,
            year: this.earnYearRate,
            period: this.period,
            exchange: this.dollarValue,
        };
    }
    monthFee(currentDebt){
        return {
            expense: currentDebt*this.expenseYearRate,
            quota: this.copBase/this.period,
            currentDebt: expense + quota,
            currentProfit: this.copBase*this.earnYearRate/12/100
        }
    }
}
        
let tr1 = new monthEvolution(2000000, 75.28, 24, 3700, 0.0218);

console.log(tr1.values());
console.log(tr1.monthFee(1500000));
