class Sesion{
    constructor(restHr, maxHr){
        this.maxHr = maxHr;
        this.restHr = restHr;
    }
    residual(){
        return this.maxHr-this.restHr;
    }

    set restHr(restHr){
        this.restHr = this.restHr;
    }

    get restHr(){
        return this.restHr;
    }
}

let s1 = new Sesion(59, 191);
console.table();