import fromPairs from 'lodash/fromPairs';

import vi from './vi/core';
import en from './en/core';

const localePairs = [
  ['vi', vi],
  ['en', en],
];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
