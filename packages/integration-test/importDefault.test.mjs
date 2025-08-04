/** @jest-environment jest-environment-jsdom */

import { Atelier } from '@compulim/atelier';
import { scenario } from '@testduet/given-when-then';
import React from 'react';
import { create } from 'react-test-renderer';

scenario('simple scenario', bdd => {
  bdd
    .given(
      'an <App>',
      () =>
        // WHEN: Render <Atelier>.
        function App() {
          return <Atelier packageName="@compulim/atelier" repoName="atelier" repoOwner="compulim" />;
        }
    )
    .when('rendered', App => create(<App />))
    .then('should have rendered', (_, renderer) =>
      // THEN: It should render some contents.
      expect(renderer.root.children.length).toBeGreaterThan(0)
    );
});
