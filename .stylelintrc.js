module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
    indentation: null, // 与 prettier 冲突，以 prettier 为准
    'declaration-colon-newline-after': null, // 与 prettier 冲突，以 prettier 为准
    'value-list-comma-newline-after': null, // 与 prettier 冲突，以 prettier 为准
    'font-family-no-missing-generic-family-keyword': null, // 与 prettier 冲突，以 prettier 为准
    'no-descending-specificity': null, // 权重书写与样式书写顺序不做关联
    'function-no-unknown': null, // 不做函数校验
    'selector-class-pattern': null, // 即使关闭类名校验，请优先使用 'lowercase-lowercase' 格式
    'string-quotes': 'single', // stylelint-config-standard 中配置的是 'double', prettier 中配置 'single', 手动以 prettier 为准
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'slotted', 'global'],
          },
        ],
      },
    },
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'declaration-block-trailing-semicolon': null, // 详见: https://www.cnblogs.com/OwenLin/p/14990993.html
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'slotted', 'global'],
          },
        ],
        'declaration-block-trailing-semicolon': null, // 详见: https://www.cnblogs.com/OwenLin/p/14990993.html
      },
    },
  ],
};
