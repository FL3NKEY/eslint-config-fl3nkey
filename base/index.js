module.exports = {
    plugins: [
        'unused-imports',
        'import-newlines',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    globals: {
        document: false,
        navigator: false,
        window: false,
    },
    rules: {
        indent: [
            'error',
            4,
            {
                ignoredNodes: ['TemplateLiteral', 'ConditionalExpression'],
                offsetTernaryExpressions: true,
            },
        ],
        'arrow-parens': ['error', 'always'],
        'no-var': ['error'],
        'prefer-const': ['error'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'no-dupe-keys': ['error'],
        'no-duplicate-imports': ['error'],
        'no-this-before-super': ['error'],
        'no-class-assign': ['error'],
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'no-undef': ['error'],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'accessor-pairs': 'off',
        'array-callback-return': ['error', { allowImplicit: true }],
        'block-scoped-var': 'error',
        complexity: ['off', 20],
        'class-methods-use-this': ['error', {
            exceptMethods: [],
        }],
        'consistent-return': 'error',
        curly: ['error', 'multi-line'], // multiline
        'default-case': ['error', { commentPattern: '^no default$' }],
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': ['error', { allowKeywords: true }],
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': ['off'],
        'max-classes-per-file': ['error', 1],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'off',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],
        'no-empty-pattern': 'error',
        'no-empty-static-block': 'off',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': ['error', { exceptions: [] }],
        'no-native-reassign': 'off',
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['off'],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        }],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': ['error', {
            props: true,
        }],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],
        'no-unused-labels': 'error',
        'no-useless-call': 'off',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
        'no-with': 'error',
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
        'prefer-named-capture-group': 'off',
        'prefer-object-has-own': 'off',
        'prefer-regex-literals': ['error', {
            disallowRedundantWrapping: true,
        }],
        radix: 'error',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
        yoda: 'error',
        'array-bracket-newline': ['error', { minItems: 3 }],
        'array-element-newline': ['error', { multiline: true, minItems: 3 }],
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            }
        }],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': ['error', 'always'],
        'function-call-argument-newline': ['error', 'consistent'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ['off', 'always', {
            includeCommonJSModuleExports: false,
            considerPropertyDescriptor: true,
        }],
        'func-names': 'warn',
        'func-style': ['off', 'expression'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'jsx-quotes': ['off', 'prefer-double'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],
        'line-comment-position': ['off', {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        }],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
        'lines-around-comment': 'off',
        'lines-around-directive': ['error', {
            before: 'always',
            after: 'always',
        }],
        'logical-assignment-operators': ['off', 'always', {
            enforceForIfStatements: true,
        }],
        'max-depth': ['off', 4],
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-lines': ['off', {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],
        'max-lines-per-function': ['off', {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
        }],
        'max-nested-callbacks': 'off',
        'max-params': ['off', 3],
        'max-statements': ['off', 10],
        'max-statements-per-line': ['off', { max: 1 }],
        'multiline-comment-style': ['off', 'starred-block'],
        'multiline-ternary': ['off', 'never'],
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': ['error', {
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['/', '*'],
                ['&', '|', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!=='],
                ['&&', '||'],
            ],
            allowSamePrecedence: false
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': ['error'],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-spaced-func': 'off',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        'no-underscore-dangle': ['error', {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: true,
        }],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 3, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
        }],
       'import-newlines/enforce': [
            'error',
            {
                'items': 2,
                'max-len': 120,
                'semi': false
            }
        ],
        'object-property-newline': ['error'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }, {
            allowSingleLineBlocks: true,
        }],
        'padding-line-between-statements': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'require-jsdoc': 'off',
        semi: ['error', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'semi-style': ['error', 'last'],
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!', '/'],
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!', ':', '::'],
                balanced: true,
            }
        }],
        'switch-colon-spacing': ['error', { after: true, before: false }],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',
    },
};
