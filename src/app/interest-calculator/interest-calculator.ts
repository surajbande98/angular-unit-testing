import { IInterestCalculator } from './interest-calculator.interface';

export class InterestCalculator implements IInterestCalculator {
  calculateInterest(rate: number, amount: number): number {
    return (rate * amount) / 100;
  }
}
