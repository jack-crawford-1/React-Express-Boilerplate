import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const codeString = `
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

const highlightedCode = hljs.highlight('<span>Hello World!</span>', {
  language: 'xml',
}).value;

export default function Demo() {
  return (
    <div>{highlightedCode}</div>
  );
}
`

const Demo = () => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {codeString}
    </SyntaxHighlighter>
  )
}

export default Demo
