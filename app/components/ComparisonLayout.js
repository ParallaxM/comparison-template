// app/components/ComparisonLayout.js

const defaultTheme = {
  background: '#F9FAFB',
  text: '#111827',
  primary: '#1D4ED8',
  accent: '#F97316',
  brandName: 'Generic Compare',
  logoText: 'GenericCompare',
};

export default function ComparisonLayout({ theme = {}, copy = {}, children }) {
  const finalTheme = { ...defaultTheme, ...theme };
  const finalCopy = {
    heroHeadline: copy.heroHeadline || 'Compare your options in minutes.',
    heroSubheadline:
      copy.heroSubheadline ||
      'Side-by-side comparison of products to help you make confident decisions.',
    cta: copy.cta || 'Start comparing',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: finalTheme.background,
        color: finalTheme.text,
      }}
    >
      <header
        style={{
          padding: '16px 32px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>
          {finalTheme.logoText || finalTheme.brandName}
        </div>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: 9999,
            border: 'none',
            background: finalTheme.primary,
            color: 'white',
            cursor: 'pointer',
          }}
        >
          {finalCopy.cta}
        </button>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 16px' }}>
        <section style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>
            {finalCopy.heroHeadline}
          </h1>
          <p style={{ fontSize: 16, color: '#4B5563' }}>
            {finalCopy.heroSubheadline}
          </p>
        </section>

        {children}
      </main>

      <footer
        style={{
          marginTop: 40,
          padding: '16px 0',
          textAlign: 'center',
          fontSize: 12,
          color: '#9CA3AF',
        }}
      >
        © {new Date().getFullYear()} {finalTheme.brandName} · Demo only
      </footer>
    </div>
  );
}
