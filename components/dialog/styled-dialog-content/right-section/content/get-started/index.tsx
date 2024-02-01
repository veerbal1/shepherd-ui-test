import CodeSection from '../../code';

function GetStarted() {
  return (
    <div>
      <h5 className="text-lg text-neutral-600">Javascript Library</h5>
      <p className="leading-7 text-muted-foreground mt-2">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <CodeSection
        title="Install the package"
        code={{
          language: 'shell',
          value: `npm install plexus-js \n\n# OR\n\nyarn add plexus-js\n\n# OR\n\npnpm add plexus-js`,
        }}
      />
      <CodeSection
        title="Configure and Initialize"
        code={{
          language: 'javascript',
          value: `import plexus from 'plexus-js'\n\nplexus.init('phc_324dseqioqeuqwion324nnjke133eq33$3131232')`,
        }}
      />
      <CodeSection
        title="Send your first event"
        code={{
          language: 'javascript',
          value: `plexus.capture('my event',{ property: 'value' })`,
        }}
      />
    </div>
  );
}

export default GetStarted;
