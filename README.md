# valle-tabs

> Awesome valle tabs

[![Travis CI Status](https://travis-ci.org/valleweb/valle-tabs.svg?branch=master)](https://travis-ci.org/valleweb/valle-tabs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-tabs)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-tabs --save
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/valle-tabs/valle-tabs.html">
<link rel="import" href="bower_components/valle-tabs/valle-tab.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-tabs.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-tabs>
  <valle-tab title="tab 1">Example 1</valle-tab>
  <valle-tab title="tab 2">Example 2</valle-tab>
  <valle-tab title="tab 3">Example 3</valle-tab>
</valle-tabs>
```

## &lt;valle-tabs&gt;

## Styling

The following custom properties and mixins are available for styling:

Custom property                | Default  | Description
:---                           |:---      |:---
--color-link       						 | #757575  | Text color default
--color-link-active            | #6200ee  | Text color when link is active
--background-link              | #fff     | Background color link
--background-color-link-active | #fff     | Active background color link

## &lt;valle-tab&gt;

### Properties

Property   | Type        | Default   | Description
:---       |:---         |:---       |:---
`title`    | *String*    | ''        | Tab title

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-tabs/](http://localhost:8080/components/valle-tabs/)


## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-tabs/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-tabs/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-tabs/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-tabs/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
