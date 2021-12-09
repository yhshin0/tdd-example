export class Account {
  balance: number;
  constructor(money: number) {
    this.balance = money;
  }

  getBalance() {
    return this.balance;
  }

  deposit(arg0: number) {}

  withdraw(arg0: number) {}
}
