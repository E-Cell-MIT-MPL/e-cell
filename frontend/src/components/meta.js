import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
    title = "E-Cell : Official Entrepreneurship club of MIT Manipal",
    description = "E-Cell MIT Manipal is a student-led organization that fosters entrepreneurial thinking, encourages innovation, and supports startups. We aim to create an ecosystem where ideas can thrive and leaders are born.",
    viewport = "width=device-width, initial-scale=1.0",
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta charset="UTF-8" />
            <meta name="viewport" content={viewport} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content="https://example.com/your-image.jpg" /> */}
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* <meta name="twitter:image" content="https://example.com/your-image.jpg" /> */}

            {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}

        </Helmet>
    );
}

export default Meta