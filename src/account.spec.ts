function testAccount() {
  const account = new Account();
  if (account === null) {
    throw new Error('계좌 생성 실패');
  }
}

(function main() {
  testAccount();
})();
