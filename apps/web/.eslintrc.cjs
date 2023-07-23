/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: [
        "@pentible/eslint-config-node",
        "@pentible/eslint-config-web",
        "@pentible/eslint-config-react",
        "@pentible/eslint-config-next",
        "@pentible/eslint-config-prettier",
    ],
    settings: {
        "import/resolver": {
            typescript: {
                // NOTE: required due to bug: https://github.com/import-js/eslint-import-resolver-typescript/issues/148
                project: __dirname,
            },
        },
    },
    overrides: [
        {
            files: "src/components/font-info-dialog.tsx",
            rules: {
                "react/jsx-props-no-spreading": "off",
                "react/no-array-index-key": "off",
            },
        },
    ],
};
