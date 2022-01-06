
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxHighlighterTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/kimbie.dark';

import css from './CodeSnippet.module.scss';

export const CodeSnippet = ({string}: any) => {
    return (
        <section className={css['code-snippet']}>
            <code className={css['file-name']}>.fleek.json</code>
            <SyntaxHighlighter language="json" style={syntaxHighlighterTheme}>
{`{
    "build": {
        "image": "node:16",
        "command": "yarn && yarn build && echo $SOME_ENV",
        "publicDir": "dist",
        "baseDir": ".",
        "environment": {ß
            "SOME_ENV": "Build finished!"
        }
    }
}`}
            </SyntaxHighlighter>
        </section>

    )
}