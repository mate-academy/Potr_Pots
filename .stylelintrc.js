module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "@mate-academy/stylelint-config"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "selector-pseudo-class-no-unknown": [ true, {
      ignorePseudoClasses: ["where"],
    } ]
  }
};
