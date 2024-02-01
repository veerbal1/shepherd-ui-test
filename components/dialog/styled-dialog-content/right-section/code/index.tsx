import SyntaxHighlighter from '@/components/common/syntax-highlighter';

function CodeSection({
  title,
  code,
  link,
}: {
  link?: React.ReactNode;
  title: string;
  code: {
    language: string;
    value: string;
  };
}) {
  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h4 className="scroll-m-20 text-sm font-medium tracking-tight">
          {title}
        </h4>
        {link}
      </div>
      <div className="highlighter-section mt-3 p-4 w-full bg-gray-400/30 rounded-lg max-w-[18rem] mx-auto sm:max-w-none">
        <SyntaxHighlighter code={code} />
      </div>
    </div>
  );
}

export default CodeSection;
