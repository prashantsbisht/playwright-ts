import { expect } from '@playwright/test';
import { getLocator, getLocatorByRole } from 'utils/locator-utils';
import { click } from '../../src/finstreet/utils/action-utils';

const continueBtn = () => getLocatorByRole('button', { name: 'Continue' });
const signUpTitle = () => getLocator('div', { hasText: 'Sign Up' });

export const enum AccountType {
  INSTITUTION = 'Institution',
  INDIVIDUAL = 'Individual',
}

export const enum ServiceType {
  TRADE_AND_CUSTODY = 'Trade and Custody',
  INVEST_AND_CUSTODY = 'Invest and Custody',
  ADVISORY_AND_ARRANGING_INVESTMENT = 'Advisory and Arranging Investment',
  RAISING_CAPITAL = 'Raising Capital',
  CUSTODY = 'Custody',
}

export async function clickOnContinueBtn() {
  await click(continueBtn());
}

export async function selectAccountOrServiceType(accountType: AccountType | ServiceType) {
  const regexPattern = getAccountOrServiceTypeRegex(accountType);
  await click(getLocator('div').filter({ hasText: regexPattern }).nth(1));
}

function getAccountOrServiceTypeRegex(accountType: AccountType | ServiceType) {
  return new RegExp(`^${accountType}.*`);
}

export async function verifyAccountType() {
  let regexPattern = getAccountOrServiceTypeRegex(AccountType.INDIVIDUAL);
  await expect(getLocator('div').filter({ hasText: regexPattern }).nth(1)).toBeVisible();
  regexPattern = getAccountOrServiceTypeRegex(AccountType.INSTITUTION);
  await expect(getLocator('div').filter({ hasText: regexPattern }).nth(1)).toBeVisible();
}

export async function verifyServiceType() {
  let regexPattern = getAccountOrServiceTypeRegex(ServiceType.ADVISORY_AND_ARRANGING_INVESTMENT);
  await expect(getLocator('div').filter({ hasText: regexPattern }).nth(1)).toBeVisible();
  regexPattern = getAccountOrServiceTypeRegex(ServiceType.RAISING_CAPITAL);
  await expect(getLocator('div').filter({ hasText: regexPattern }).nth(1)).toBeVisible();
}

export async function verifySignUpTitleIsDisplayed() {
  await expect(signUpTitle()).toBeVisible();
}
