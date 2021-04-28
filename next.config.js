module.exports = {
    //TODO:FIXME:  Use different Image provider / storage service like cloudinary and  akamai
    // images: {
    //     domains: ['images.unsplash.com', 'tailwindui.com'],
    //     loader: 'cloudinary',
    //     path: 'https://res.cloudinary.com/dtkvfdjg5/image/upload',
    // },
    webpack: (config, { dev, isServer }) => {
        //TODO:FIXME: use Preact only if features like Suspense and COncurrent mode of react  are not used
        // if (!dev && !isServer) {
        //     Object.assign(config.resolve.alias, {
        //         react: 'preact/compat',
        //         'react-dom/test-utils': 'preact/test-utils',
        //         'react-dom': 'preact/compat',
        //     })
        // }
        return config
    },
}
