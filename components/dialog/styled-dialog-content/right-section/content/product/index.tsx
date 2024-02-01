import CodeSection from '../../code';

function Product() {
  return (
    <div>
      <h5 className="text-lg text-neutral-600">Product</h5>
      <p className="leading-7 text-muted-foreground mt-2">
        Plexus js is a javascript library that allows you to send events to your
        Plexus account. It is the easiest way to get started with Plexus. It is
        the easiest way to get started with Plexus. It is compatible with all
        modern browsers and is available as an npm package. Recommanded for web
        applications.
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

export default Product;
