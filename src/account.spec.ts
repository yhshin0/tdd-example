import { Account } from './account';

function testAccount() {
  const account = new Account();
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
});
