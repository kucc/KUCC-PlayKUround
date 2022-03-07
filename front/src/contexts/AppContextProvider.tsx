import React from 'react';
import { combineComponents } from './combineComponents';
import { MakeEmailProvider } from './globalEmail';
import { SendCategoryProvider } from './sendCategory';



const providers = [
  MakeEmailProvider,
  SendCategoryProvider
]

export const AppContextProvider = combineComponents(...providers);