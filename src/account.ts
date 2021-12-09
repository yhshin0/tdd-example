export class Account {
  balance: number;
  constructor(money: number) {
    this.balance = money;
  }

  getBalance() {
    return this.balance;
  }

  deposit(money: number) {
    this.balance += money;
  }

  withdraw(money: number) {
    this.balance -= money;
  }
}
