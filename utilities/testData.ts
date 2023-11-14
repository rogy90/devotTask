//registrationTest
export const firstName = 'Igor';
export const lastName = 'Test';
export const address = 'Street 1';
export const city = 'City';
export const zoneId = '3513';
export const postcode = '100000';
export const password = 'StrongPass1!';

export function getUniqueEmail() {
  const randomNum = Math.floor(Math.random() * 1000000);
  return `test${randomNum}@test.com`;
}

export function getUniqueLoginName() {
  const randomNum = Math.floor(Math.random() * 1000000);
  return `testAcc${randomNum}`;
}

//loginTest
export const loginUsername = 'testAcc';
export const loginPassword = 'StrongPass1!';

//checkoutTest
export const productPageLink = '/index.php?rt=product/product&product_id=68';
export const productQuantity = '2';

//searchTest
export const searchKeywords = 'cream';
export const productName = 'Body Cream by Bulgari';