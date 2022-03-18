import React from 'react';

import { combineComponents } from './combineComponents';
import { DistanceValueProvider } from './distanceValue';
import { filterValueProvider } from './filterValue';
import { MakeEmailProvider } from './globalEmail';
import { postValueProvider } from './postValue';

const providers = [
  MakeEmailProvider,
  filterValueProvider,
  postValueProvider,
  DistanceValueProvider,
];

export const AppContextProvider = combineComponents(...providers);
