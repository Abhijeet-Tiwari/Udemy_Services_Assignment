
export class CounterService {
  activeToInactiveCount: number = 0; 
  inactiveToActiveCount: number = 0; 

  activeCounts() {
    this.activeToInactiveCount++;
    console.log("Active Count No: " + this.activeToInactiveCount);
  }
  deActiveCounts() {
    this.inactiveToActiveCount++;
    console.log("Inactive Count No: " + this.inactiveToActiveCount);
  }
}
