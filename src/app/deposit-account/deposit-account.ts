import { BankAccount } from '../bank-account/bank-account';

export class DepositAccount extends BankAccount {
  override withdraw(amount: number): void {
    this.#checkForFine();
    this.amount -= amount;
  }
  override calculateInterest(): number {
    return this.interestCalculator.calculateInterest(8, this.amount);
  }

  #checkForFine() {
    // Some logic
  }
}
