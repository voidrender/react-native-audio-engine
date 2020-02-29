const path = require('path');

module.exports = {
    watchFolders: [path.resolve(__dirname, '../dist')],
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
