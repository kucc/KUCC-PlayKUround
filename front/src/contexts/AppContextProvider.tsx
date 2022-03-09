import React from 'react';

import { combineComponents } from './combineComponents';
import { filterValueProvider } from './filterValue';
import { MakeEmailProvider } from './globalEmail';

const providers = [MakeEmailProvider, filterValueProvider];

export const AppContextProvider = combineComponents(...providers);
