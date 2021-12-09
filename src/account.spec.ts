import { Account } from './account';

function testAccount() {
  const account = new Account();
  if (account === null) {
    throw new Error('계좌 생성 실패');
  }
}

(function main() {
  try {
    testAccount();
  } catch (error) {
    console.log('실패');
    return;
  }
  console.log('성공');
})();
