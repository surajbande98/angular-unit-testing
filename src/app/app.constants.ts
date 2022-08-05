import { BankAccount } from './bank-account/bank-account';
import { DepositAccount } from './deposit-account/deposit-account';
import { CompoundInterestCalculator } from './interest-calculator/compound-interest-calculator';
import { InterestCalculator } from './interest-calculator/interest-calculator';

export const BankMap = ['Savings', 'Deposit'];

export const EntityMap = new Map<string, BankAccount>([
  ['Savings', new BankAccount(new InterestCalculator())],
  ['Deposit', new DepositAccount(new CompoundInterestCalculator())],
]);
