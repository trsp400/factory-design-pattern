export class DeltaZero { 
  constructor(delta, a, b){ 
    this.delta = delta;
    this.data = null;
    this.type = 'zero';
    this.message = 'Delta is Zero';
    this.a = a;
    this.b = b;
  }

  calc() {
    const { a, b } = this;
    const x1 = -b / 2*a;
    this.data = { x1 };
  }

  handle() {
    this.calc();
    return { data: this.data, delta: this.delta, message: this.message }
  }
};

export class DeltaNegative { 
  constructor(delta, a, b){ 
    this.delta = delta;
    this.data = null;
    this.type = 'negative';
    this.message = 'Delta is Negative';
  } 

  handle() {
    return { data: this.data, delta: this.delta, message: this.message }
  }
};

export class DeltaPositive { 
  constructor(delta, a, b){ 
    this.delta = delta;
    this.data = null;
    this.type = 'positive' 
    this.message = 'Delta is Positive';
    this.a = a;
    this.b = b;
  } 

  calc() {
    const x1 = (-this.b + Math.sqrt(this.delta)) / 2*this.a;
    const x2 = (-this.b - Math.sqrt(this.delta)) / 2*this.a;
    this.data = { x1, x2 };
  }

  handle() {
    this.calc();
    return { data: this.data, delta: this.delta, message: this.message }
  }
};
