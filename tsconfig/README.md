@day1co/tsconfig
----------------

A base tsconfig for all typescript modules of [DAY1 COMPANY Inc.](https://day1company.co.kr)
based on [@tsconfig bases](https://github.com/tsconfig/bases).

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @day1co/tsconfig
```

Add to your `tsconfig.json`:

for Both Frontend and Backend:

```json
"extends": "@day1co/tsconfig/common.json"
```

for Backend:

```json
"extends": "@day1co/tsconfig/backend.json"
```

for Backend using both Javascript and Typescript:

```json
"extends": "@day1co/tsconfig/backend-compat.json"
```

---
may the **SOURCE** be with you...
