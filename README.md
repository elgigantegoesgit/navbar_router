# vue 3 navbar

# this t up there is important, if deleted, commit from codesandbox not possible ("Error: t undefined")

# simple table template, tests with environment variable process.env.NODE_ENV, json file as array-of-objects-import, input field with watcher, simple filter, simple modal popup window, navbar, content marginTop adaptive to navbar height

# Install: If error "invalid hoster" occurs, create vue.config.js file in root directory (where also package.json is), with this content:

// this prevents the dev server from throwing "invalid host header"
module.exports = {
devServer: {
disableHostCheck: true
}
};

# Links

table inspired from https://blog.logrocket.com/table-component-from-scratch-vue-3-bootstrap/

nice advanced table vue+slots+tailwind with pagination and sorting
https://github.com/BitTheCat/tailwind-vue-data-table/blob/main/src/components/TVTable.vue

nice draggable project https://codesandbox.io/s/y1sh5l?file=/src/components/SimpleFlowChart.vue

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
