import { getLocatorByRole } from 'utils/locator-utils';
import { click, gotoURL } from '../../src/finstreet/utils/action-utils';

const signUpBtn = () => getLocatorByRole('button', { name: 'Signup' });
const emailAddressTxtBox = () => getLocatorByRole('textbox', { name: 'Enter your email address' });
const passwordTxtBox = () => getLocatorByRole('textbox', { name: 'Password' });
const contiueBtn = () => getLocatorByRole('button', { name: 'Continue' });

export async function clickOnSignUpBtn() {
  await click(signUpBtn());
}

export async function navigateToLoginPage() {
  await gotoURL('https://qa-accounts.thefinstreet.co.uk');
}

export async function login(email: string, password: string) {
  await emailAddressTxtBox().click();
  await emailAddressTxtBox().fill(email);
  await passwordTxtBox().click();
  await passwordTxtBox().fill(password);
  await contiueBtn().click();
}
