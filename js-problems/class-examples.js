// loads 
// -65% al 70% Primeras cuatro semanas resistencias
// -70% al 75% Semana cinco a ocho resistencias
// -75% al 80% Semana nueve a doce resistencias




class Training {
    constructor (maxHr, minHr, days) {
      this.maxHr = maxHr;
      this.minHr = minHr;
      this.days = days;
    }
    // Getter
    get reserve() {
       return this.calcReserve();
     }
    // Método
    calcReserve () {
      return this.maxHr - this.minHr;
    }
    get tZones(){
      return this.trainingZones();
    }

    trainingZones() {
      let zones = [
        {
          Zone: 'zone 1',
          Freq_inf: Math.round(this.minHr + this.reserve * 0.5),
          Freq_sup: Math.round(this.minHr + this.reserve * 0.6)
        },
        {
          Zone: 'zone 2',
          Freq_inf: Math.round(this.minHr + this.reserve * 0.6),
          Freq_sup: Math.round(this.minHr + this.reserve * 0.7)
        },
        {
          Zone: 'zone 3',
          Freq_inf: Math.round(this.minHr + this.reserve * 0.7),
          Freq_sup: Math.round(this.minHr + this.reserve * 0.8)
        },
        {
          Zone: 'zone 4',
          Freq_inf: Math.round(this.minHr + this.reserve * 0.8),
          Freq_sup: Math.round(this.minHr + this.reserve * 0.9)
        },
        {
          Zone: 'zone 5',
          Freq_inf: Math.round(this.minHr + this.reserve * 0.9),
          Freq_sup: Math.round(this.minHr + this.reserve)
        },
      ];
      return zones;
    }

    

  }
  
  const plan1 = new Training(190,55,90);
  const plan2 = new Training(190,55,90);
  
  console.table(plan2.tZones); //
  console.table(plan2.tZones); //