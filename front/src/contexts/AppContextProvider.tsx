import React from 'react';

import { combineComponents } from './combineComponents';
import { filterValueProvider } from './filterValue';
import { MakeEmailProvider } from './globalEmail';
import { postValueProvider } from './postValue';

const providers = [MakeEmailProvider, filterValueProvider, postValueProvider];

export const AppContextProvider = combineComponents(...providers);
