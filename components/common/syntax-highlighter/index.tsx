'use client';

import { ClipboardCopyIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import hljs from 'highlight.js';
import 'highlight.js/styles/ir-black.min.css';

function SyntaxHighlighter({
  code,
}: {
  code: {
    language: string;
    value: string;
  };
}) {
  const result = hljs.highlight(code.language, code.value);
  return (
    <div className="w-full relative">
      <pre className="w-full rounded-lg text-sm language-javascript relative">
        <button
          className="absolute right-0 top-0 mr-4 mt-4 hover:scale-110 transition-all"
          onClick={() => toast('Text copied')}
        >
          <ClipboardCopyIcon className="text-white" />
        </button>
        <code
          className="hljs rounded-lg"
          dangerouslySetInnerHTML={{ __html: result.value }}
        ></code>
      </pre>
    </div>
  );
}

export default SyntaxHighlighter;
