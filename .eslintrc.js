module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
      browser: true
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
  