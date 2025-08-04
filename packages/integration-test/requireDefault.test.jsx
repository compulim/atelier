/** @jest-environment jest-environment-jsdom */

const React = require('react');
const { Atelier } = require('@compulim/atelier');
const { create } = require('react-test-renderer');
const { scenario } = require('@testduet/given-when-then');

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
