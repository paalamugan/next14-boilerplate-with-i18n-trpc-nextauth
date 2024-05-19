/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../src/i18n/locales/en.json');
declare interface IntlMessages extends Messages {}
