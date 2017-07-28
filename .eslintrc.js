const config = {
  "extends": "airbnb-base",
  "env": {
    "node": true
  },
  "rules": {
    "no-shadow": "off",
    "no-multi-spaces": ["error", { exceptions: { "VariableDeclarator": true } }]
  }
};

module.exports = config;
