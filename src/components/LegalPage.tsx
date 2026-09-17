import { Link } from "@/i18n/routing";
import type { LegalBlock, LegalDoc, LegalItem } from "@/data/legal";

function ItemText({ item }: { item: LegalItem }) {
  if (item.email) {
    return (
      <a
        href={`mailto:${item.email}`}
        className="text-primary font-medium hover:underline"
      >
        {item.text}
      </a>
    );
  }
  if (item.href) {
    return (
      <Link href={item.href} className="text-primary font-medium hover:underline">
        {item.text}
      </Link>
    );
  }
  return <>{item.text}</>;
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "paragraph") {
    return (
      <p>
        {block.text}
        {block.link && (
          <>
            {" "}
            <Link
              href={block.link.href}
              className="text-primary font-medium hover:underline"
            >
              {block.link.label}
            </Link>
            {block.link.suffix}
          </>
        )}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3 mt-3">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
          />
          <span>
            {item.term && (
              <strong className="font-semibold text-gray-800">
                {item.term}
              </strong>
            )}{" "}
            <ItemText item={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Standalone legal page (privacy policy, terms…) rendered from a LegalDoc.
 * Keeps the layout the previous /legal/* pages used so the published
 * documents look unchanged.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          {doc.title}
        </h1>
        {doc.updated && (
          <p className="text-gray-500 text-sm text-center mb-10">
            {doc.updated}
          </p>
        )}
        {!doc.updated && <div className="mb-10" />}

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          {doc.intro && <p>{doc.intro}</p>}

          {doc.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-primary mb-2">
                {section.title}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
