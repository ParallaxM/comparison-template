// app/demo-a/page.js

import ComparisonLayout from '../components/ComparisonLayout';

const theme = {
  background: '#0B1120',
  text: '#E5E7EB',
  primary: '#38BDF8',
  accent: '#F97316',
  brandName: 'TheRate Home Loans',
  logoText: 'TheRate',
};

const copy = {
  heroHeadline: 'Compare home loans in minutes.',
  heroSubheadline:
    'See rates, fees and key features from a panel of leading lenders in one simple view.',
  cta: 'Start your home loan comparison',
};

const dummyProducts = [
  {
    lender: 'Bank A',
    product: 'Variable 80% LVR',
    rate: '5.89%',
    compRate: '6.01%',
    monthly: '$2,850',
    features: 'Offset account, redraw, extra repayments',
  },
  {
    lender: 'Bank B',
    product: 'Fixed 2-year',
    rate: '5.49%',
    compRate: '5.99%',
    monthly: '$2,780',
    features: 'Extra repayments capped, no offset',
  },
  {
    lender: 'Lender C',
    product: 'Online Special',
    rate: '5.39%',
    compRate: '5.91%',
    monthly: '$2,760',
    features: 'Online only, no branch support',
  },
];

export default function DemoAHomeLoansPage() {
  return (
    <ComparisonLayout theme={theme} copy={copy}>
      <section
        style={{
          padding: 16,
          background: 'rgba(15,23,42,0.8)',
          borderRadius: 12,
          marginBottom: 24,
        }}
      >
        <p style={{ marginBottom: 8 }}>
          Demo A: Home loan comparison experience for a hypothetical brand.
        </p>
        <p style={{ fontSize: 12, color: '#9CA3AF' }}>
          Data on this page is dummy content for demonstration purposes only.
        </p>
      </section>

      <section>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 14,
          }}
        >
          <thead>
            <tr>
              {['Lender', 'Product', 'Rate p.a.', 'Comp. rate p.a.', 'Monthly', 'Features', '']
                .map((heading) => (
                  <th
                    key={heading}
                    style={{
                      textAlign: 'left',
                      padding: '12px 8px',
                      borderBottom: '1px solid #1F2937',
                    }}
                  >
                    {heading}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map((p, idx) => (
              <tr key={idx}>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.lender}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.product}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.rate}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.compRate}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.monthly}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  {p.features}
                </td>
                <td style={{ padding: '12px 8px', borderBottom: '1px solid #111827' }}>
                  <button
                    style={{
                      padding: '6px 12px',
                      borderRadius: 9999,
                      border: 'none',
                      background: theme.primary,
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    Enquire
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </ComparisonLayout>
  );
}
