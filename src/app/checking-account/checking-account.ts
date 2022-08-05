import { IBankAccount } from '../bank-account/bank-account.interface';

export class CheckingAccount implements IBankAccount {
  amount = 0;
  deposit(amount: number): void {
    this.amount += amount;
  }
  withdraw(amount: number): void {
    this.amount -= amount;
  }
}
