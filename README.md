# vue-admin-template

English | [简体中文](./README-zh.md)

> A minimal vue admin template with Element UI/Plus & axios & iconfont & permission control & lint

**Live demo:** http://panjiachen.github.io/vue-admin-template

## 🔄 Version Selection

| Version | Vue | UI Library | Branch | Status | Use Case |
|---------|-----|------------|--------|---------|----------|
| **v4.x** | Vue 2.6+ | Element UI | [`master`](https://github.com/PanJiaChen/vue-admin-template/tree/master) | 🛠️ Maintenance | Legacy projects, IE support |
| **v5.x** | Vue 3.0+ | Element Plus | [`vue3-migration`](https://github.com/PanJiaChen/vue-admin-template/tree/vue3-migration) | ✨ Active Development | New projects, modern browsers |

### 📋 Quick Decision Guide

**Choose Vue 2 (v4.x) if you:**
- Need IE11 support
- Have existing Vue 2 codebase to maintain
- Prefer stable, battle-tested solution

**Choose Vue 3 (v5.x) if you:**
- Starting a new project
- Want modern development experience
- Need TypeScript support
- Want latest Vue ecosystem features

## 🚀 Build Setup

### Vue 2 Version (v4.x)

```bash
# clone the Vue 2 version
git clone -b master https://github.com/PanJiaChen/vue-admin-template.git

# enter the project directory
cd vue-admin-template

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9528

### Vue 3 Version (v5.x)

```bash
# clone the Vue 3 version
git clone -b vue3-migration https://github.com/PanJiaChen/vue-admin-template.git

# enter the project directory
cd vue-admin-template

# install dependency
npm install
# or use yarn (recommended for Vue 3)
yarn install

# develop
npm run dev
# or use yarn
yarn dev
```

This will automatically open http://localhost:9528

## 📦 Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## 🔧 Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) for more information

## 🎯 Migration Guide

### Vue 2 → Vue 3 Migration

If you want to migrate your existing Vue 2 project to Vue 3, see our [Migration Guide](./docs/MIGRATION.md) for detailed steps and breaking changes.

**Key differences:**
- Element UI → Element Plus
- Vue Router 3 → Vue Router 4
- Vuex 3 → Pinia (modern state management)
- New Composition API support
- Better TypeScript integration

## 🎨 Demo

![demo](https://github.com/PanJiaChen/PanJiaChen.github.io/blob/master/images/demo.gif)

## 🌟 Features Comparison

| Feature | Vue 2 Version | Vue 3 Version |
|---------|---------------|---------------|
| **Performance** | Good | Better (25-55% faster) |
| **Bundle Size** | ~2.1MB | ~2.0MB (tree-shaking) |
| **TypeScript** | Basic support | Native support |
| **Composition API** | ❌ | ✅ |
| **Multiple root elements** | ❌ | ✅ |
| **IE11 Support** | ✅ | ❌ |
| **Modern tooling** | Vue CLI | Vite (faster dev) |

## 📚 Extra

If you want router permission && generate menu by user roles:
- **Vue 2:** Use [permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control) branch
- **Vue 3:** Built-in support with enhanced TypeScript

For `typescript` version:
- **Vue 2:** [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (Credits: [@Armour](https://github.com/Armour))
- **Vue 3:** Native TypeScript support in main branch

## 🔗 Related Project

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) - Full-featured admin dashboard
- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin) - Electron version
- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) - TypeScript version
- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312) - Community projects

## 🌐 Browsers Support

### Vue 2 Version
Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

### Vue 3 Version
Modern browsers only (IE11+ not supported).

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| Edge 79+| last 2 versions| last 2 versions| last 2 versions

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a PR.

For Vue 3 migration specifically, please ensure:
- All tests pass
- Code follows ESLint rules
- Migration guide is updated if needed

## 📄 License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2017-present PanJiaChen

---

**Note:** This template is continuously updated. Star ⭐ the repository to stay updated with the latest changes!