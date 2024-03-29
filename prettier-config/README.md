# prettier-config

prettier config for [DAY1 COMPANY Inc.](https://day1company.co.kr)

![version](https://img.shields.io/github/package-json/v/day1co/prettier-config)

## Getting Started

### install prettier 3.x

```console
$ npm install --save-dev @day1co/prettier-config@[1.2.x|next] prettier
```

### install prettier 2.x

```console
$ npm install --save-dev @day1co/prettier-config@[1.1.0|latest] prettier
```

### prepare prettier config

create/modify `.prettierrc.js`:

```js
module.exports = {
  ...require('@day1co/prettier-config'),
};
```

### run prettier

```console
$ npx prettier
```

## Contribution

see https://prettier.io/docs/en/configuration.html#sharing-configurations

## Referfences

- TBW: [DAY1 JavaScript Coding Guideline](https://day1co.github.io/guidelines/javascript.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Prettier](https://prettier.io/)

---

may the **SOURCE** be with you...
