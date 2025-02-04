import { test } from '../../src/finstreet/setup/page-setup';
import * as InstitutionalInfoPage from '../pages/institutionalInfo-page';
import * as LoginPage from '../pages/login-page';
import * as SignUpPage from '../pages/signup-page';

test.describe('Login', async () => {
  test('TC_06 : (Verify Which service(s) would you like to select?) page is displaying  5 different option for selection and user is able to select multiple option at once', async () => {
    await LoginPage.navigateToLoginPage();
    await LoginPage.clickOnSignUpBtn();

    await SignUpPage.selectAccountOrServiceType(SignUpPage.AccountType.INSTITUTION);
    await SignUpPage.verifyAccountType();
    await SignUpPage.clickOnContinueBtn();
    await SignUpPage.verifyServiceType();
    await SignUpPage.selectAccountOrServiceType(SignUpPage.ServiceType.RAISING_CAPITAL);
    await SignUpPage.clickOnContinueBtn();
    await SignUpPage.verifySignUpTitleIsDisplayed;
  });

  test('Verify redirection to the user dashboard after a successful login', async () => {
    await LoginPage.navigateToLoginPage();
    await LoginPage.login('josephsinha@yopmail.com', 'Qwertyuiop@1');
    await InstitutionalInfoPage.signOutLnk().waitFor({ state: 'visible' });
    await InstitutionalInfoPage.verifyInstitutionalInfoPageIsDisplayed();
  });
});
