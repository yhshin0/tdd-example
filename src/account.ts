export class Account {
  balance: number;
  constructor(money: number) {
    this.balance = money;
  }

  getBalance() {
    return this.balance;
  }

  deposit(arg0: number) {
    this.balance += arg0;
  }

  withdraw(arg0: number) {
    this.balance -= arg0;
  }
}
