import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = 'ASE GmbH | Engineering & Automatisierung',
    description = 'ASE GmbH - Ihr Partner für Automatisierung, Schaltschrankbau und Elektrokonstruktion. 30 Jahre Erfahrung in Automotive und Wasserwirtschaft.',
    image = '/logo.png', // Assuming a default logo exists or update later
    url = 'https://asegmbh.netlify.app/',
}) => {
    const fullTitle = title === 'ASE GmbH | Engineering & Automatisierung' ? title : `${title} | ASE GmbH`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
