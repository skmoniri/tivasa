
type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue | undefined };

interface StructuredDataProps {
  data: JsonLdValue;
}

/**
 * Renders JSON-LD structured data for search engines.
 *
 * Supports Organization, Service, and other
 * Schema.org structured data objects.
 *
 * Server Component — no "use client" required.
 */
export default function StructuredData({
  data,
}: StructuredDataProps) {
  const jsonLd = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}
