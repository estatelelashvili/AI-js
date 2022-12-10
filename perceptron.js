class Perceptron {
  constructor(n, c) {
    this.weights = new Array(n);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.random(-1, 1);
    }
    this.c = c;
  }
}
