import { InterestCalculator } from '../interest-calculator/interest-calculator';
import { IInterestCalculator } from '../interest-calculator/interest-calculator.interface';
import { IBankAccount } from './bank-account.interface';

export class BankAccount implements IBankAccount, IInterestCalculator {
  constructor(interestCalculator: IInterestCalculator) {
    this.interestCalculator = interestCalculator;
  }
  
  interestCalculator: IInterestCalculator;
  amount = 1000;

  deposit(amount: number): void {
    this.amount += amount;
  }
  withdraw(amount: number): void {
    this.amount -= amount;
  }
  calculateInterest(): number {
    return this.interestCalculator.calculateInterest(5, this.amount);
  }
}
