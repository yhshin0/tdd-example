export class Account {
  balance: number;
  constructor(money: number) {
    this.balance = money;
  }

  getBalance() {
    return this.balance;
  }
}
