export default function HomePage() {
  return (
    <main style={{ padding: '40px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>
        Comparison Template – Home
      </h1>
      <p style={{ marginBottom: '24px' }}>
        This is the base template. We&apos;ll use this to create multiple demo
        comparison sites with different branding and copy.
      </p>
      <ul>
        <li><a href="/demo-a">Go to Demo A</a></li>
        <li><a href="/demo-b">Go to Demo B</a></li>
      </ul>
    </main>
  );
}
