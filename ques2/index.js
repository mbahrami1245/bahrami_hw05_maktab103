
let pedometer = {
    steps: 0,
  


increase() {
    this.steps++;  
    return this;  
  },
  
  decrease() {
    this.steps--;  
    return this;   
  }
  
  reset(){
    this.steps = 0; 
    return this;     
  },
  
  read() {
    console.log(`Number of steps: ${this.steps}`);  
    return this; 
  }
}
  // Example usage:
pedometer.increase().increase().decrease().read(); 
pedometer.reset().read(); 