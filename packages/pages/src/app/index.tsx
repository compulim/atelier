import { Atelier } from '@compulim/atelier';
import '@compulim/atelier/atelier.css';
import React from 'react';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';

render(
  <Atelier packageName="@compulim/atelier" repoName="atelier" repoOwner="compulim" />,
  document.getElementsByTagName('main')[0]!
);
