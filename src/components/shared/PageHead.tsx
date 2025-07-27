import { Helmet } from 'react-helmet-async';

interface PageHeadProps {
  title: string;
  description?: string;
  image?: string;
}

export default function PageHead({ title, description, image }: PageHeadProps) {
  const metaDescription = description ?? 'Track group expenses with TripLedger.';
  const metaImage = image ?? '/assets/images/split-logo.png';
  return (
    <Helmet>
      <title>{title} | TripLedger</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href="https://tripledger.example.com" />
    </Helmet>
  );
}
