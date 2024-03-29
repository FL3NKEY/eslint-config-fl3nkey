module.exports = {
    extends: ['plugin:vue/vue3-recommended'],
    root: true,
    parser: 'vue-eslint-parser',
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: 1,
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-self-closing': ['error', {
            html: {
                component: 'always',
                normal: 'never',
                void: 'never',
            },
            math: 'always',
            svg: 'always',
        }],
        'vue/require-default-prop': ['off'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'inheritAttrs',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'asyncComponents', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'data',
                    'asyncData',
                    'computed',
                    'watch',
                    'watchQuery',
                    'fetch',
                    'methods',
                    'setup',
                    'head',
                    'LIFECYCLE_HOOKS',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/component-definition-name-casing': ['error','PascalCase'],
        'vue/one-component-per-file': ['off'],
        'vue/multi-word-component-names': 'warn',
        'vue/no-reserved-component-names': ['error', {
            disallowVueBuiltInComponents: true,
            disallowVue3BuiltInComponents: true,
        }],
        'vue/match-component-file-name': ['error', {
            extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
            shouldMatchCase: true,
        }],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/v-on-event-hyphenation': ['error', 'never'],
    },
};
