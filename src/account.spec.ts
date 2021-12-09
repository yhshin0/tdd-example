import { Account } from './account';

function testAccount() {
  const account = new Account(10000);
}

function testGetBalance() {
  let account = new Account(10000);
  expect(account.getBalance()).toEqual(10000);

  account = new Account(1000);
  expect(account.getBalance()).toEqual(1000);

  account = new Account(0);
  expect(account.getBalance()).toEqual(0);
}

function testDeposit() {
  const account = new Account(10000);
  account.deposit(1000);
  expect(account.getBalance()).toEqual(11000);
}

function testWithdraw() {
  const account = new Account(10000);
  account.withdraw(1000);
  expect(account.getBalance()).toEqual(9000);
}

describe('test', () => {
  it('계좌 생성에 성공한다', () => {
    try {
      testAccount();
    } catch (error) {
      console.log(error.message);
    }
    console.log('성공');
  });

  it('에치 금액이 있는 계좌 생성에 성공한다', () => {
    testGetBalance();
  });

  it('계좌에서 돈을 출금한다', () => {
    testDeposit();
  });

  it('계좌에서 돈을 입금한다', () => {
    testWithdraw();
  });
});
