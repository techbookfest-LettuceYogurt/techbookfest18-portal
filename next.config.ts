import nextra from 'nextra'

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

export default withNextra({
    /* config options here */
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    publicRuntimeConfig: { urlPrefix },
})
