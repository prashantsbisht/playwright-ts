import { expect } from '@playwright/test';
import { getLocator, getLocatorByText } from 'utils/locator-utils';

export const signOutLnk = () => getLocatorByText('Sign Out').nth(1);
const pageTitle = () => getLocator('div', { hasText: 'Institution Information' }).nth(1);

export async function verifyInstitutionalInfoPageIsDisplayed() {
  await expect(pageTitle()).toBeVisible();
}
