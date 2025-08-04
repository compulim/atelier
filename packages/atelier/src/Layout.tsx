import React, { memo, useCallback, useEffect, useState } from 'react';
import GitHubLogo from './GitHubLogo.tsx';
import './Layout.css';
import SourceCode from './SourceCode.tsx';
import TableOfContent from './TableOfContent.tsx';
import WebPage, { CodeEventHandler } from './WebPage.tsx';
import usePackageName from './usePackageName.ts';
import useRepoName from './useRepoName.ts';
import useRepoOwner from './useRepoOwner.ts';

const Layout = memo(function Layout() {
  const [packageName] = usePackageName();
  const [repoName] = useRepoName();
  const [repoOwner] = useRepoOwner();
  const [tab, setTab] = useState(location.hash.replace(/^#/u, ''));
  const [code, setCode] = useState('');

  const handleCode = useCallback<CodeEventHandler>(
    data => {
      setCode(data.code);
    },
    [setCode]
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCode('');
      setTab(location.hash.replace(/^#/u, ''));
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCode, setTab]);

  return (
    <div className="atelier">
      <div className="atelier__title-bar">
        <h1 className="atelier__title">
          &gt; {packageName} demo
          <div className="atelier__cursor" />
        </h1>
        <div>
          <a
            className="atelier__logo"
            href={`https://github.com/${encodeURI(repoOwner)}/${encodeURI(repoName)}`}
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub repository"
          >
            <GitHubLogo />
          </a>
        </div>
      </div>
      <div className="atelier__pane app__pane--code app__pane--left">
        {tab ? <SourceCode code={code} /> : <TableOfContent />}
      </div>
      <div className="atelier__pane app__pane--right">{tab && <WebPage onCode={handleCode} src={tab} />}</div>
    </div>
  );
});

export default Layout;
