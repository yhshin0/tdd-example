export class Account {
  balance: number;
  constructor(i: number) {
    this.balance = i;
  }

  getBalance() {
    return this.balance;
  }
}
