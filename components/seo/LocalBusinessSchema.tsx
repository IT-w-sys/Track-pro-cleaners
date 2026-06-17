import Script from "next/script"

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CleaningFee",
    "name": "Track Pro Cleaners",
    "image": "https://trackpromovers.com/logo.png",
    "@id": "https://trackpromovers.com",
    "url": "https://trackpromovers.com",
    "telephone": "+16023480319",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Clean Street, Suite 100",
      "addressLocality": "Cityville",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/trackprocleaners",
      "https://www.twitter.com/trackprocleaners",
      "https://www.instagram.com/trackprocleaners"
    ]
  }

  return (
    <Script id="local-business-schema" type="application/ld+json" strategy="lazyOnload">
      {JSON.stringify(schema)}
    </Script>
  )
}
