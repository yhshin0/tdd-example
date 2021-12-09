import { Account } from './account';

let account;

function setUp() {
  account = new Account(10000);
}

function testAccount() {}

function testGetBalance() {
  expect(account.getBalance()).toEqual(10000);

  account = new Account(1000);
  expect(account.getBalance()).toEqual(1000);

  account = new Account(0);
  expect(account.getBalance()).toEqual(0);
}

function testDeposit() {
  account.deposit(1000);
  expect(account.getBalance()).toEqual(11000);
}

function testWithdraw() {
  account.withdraw(1000);
  expect(account.getBalance()).toEqual(9000);
}

describe('test', () => {
  beforeEach(() => {
    setUp();
  });

  it('계좌 생성에 성공한다', () => {
    testAccount();
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
