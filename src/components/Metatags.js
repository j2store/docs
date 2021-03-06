import React from 'react';
import Helmet from 'react-helmet'

function Metatags(props) {

       return (
        <Helmet
        title={props.title}
            meta={[
                { name: 'title', content: props.title },
                { name: 'description', content: props.description },
                { name: 'google-site-verification', content: "cgZnH5mCFiWU5rksQBV5zMfHNRjjbLts48Ii77nmDG8"  },
                {
                    name: `keywords`,
                    content: props.keywords,
                },
                {
                    property: 'og:title',
                    content: props.title,
                },
                {
                    property: 'og:url',
                    content: props.pathname ? props.url + props.pathname : props.url,
                },

                {
                    property: 'og:image',
                    content: props.thumbnail && props.thumbnail,
                },
                {
                    property: 'og:image:secure_url',
                    content: props.thumbnail && props.thumbnail,
                },

                {
                    property: 'og:description',
                    content: props.description,
                },

                {
                    property: 'og:image:width',
                    content: '1200',
                },

                {
                    property: 'og:image:height',
                    content: '630',
                },
                {
                    property: 'og:locale',
                    content: 'en',
                },

                { property: 'og:type', content: props.ogtype ? props.ogtype : 'website' },

                { name: 'twitter:card', content: 'summary_large_image' },

                { name: 'twitter:title', content: props.title },

                {
                    name: 'twitter:description',
                    content: props.description,
                },
                {
                    name: 'twitter:image',
                    content: props.thumbnail && props.thumbnail,
                },

                { name: 'robots', content: 'index, follow' },

                { name: 'twitter:creator', content: '@j2store' },
                { name: 'twitter:domain', content: 'j2store.org' },
                { property: 'og:site_name', content: 'j2store' }
            ]}
        >
            <html lang="en" />
        </Helmet>
    )
}

export default Metatags;
