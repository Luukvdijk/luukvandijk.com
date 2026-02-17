type JsonLdProps = {
  data: unknown;
  id?: string;
  nonce?: string;
};

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function JsonLd({ data, id, nonce }: JsonLdProps) {
  return (
    <script id={id} type="application/ld+json" nonce={nonce}>
      {serializeJsonLd(data)}
    </script>
  );
}
