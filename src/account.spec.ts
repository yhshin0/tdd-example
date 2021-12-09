import { fail } from 'assert';
import { Account } from './account';

function testAccount() {
  const account = new Account(10000);
}

function testGetBalance() {
  const account = new Account(10000);
  if (account.getBalance() !== 10000) {
    fail();
  }
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
});
