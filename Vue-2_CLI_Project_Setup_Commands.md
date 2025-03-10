# vue-cli

A simple CLI for scaffolding Vue.js projects.

## Installation

Prerequisites: Node.js (>= 4.x, 6.x preferred), npm version 3+ and Git.

> npm install -g vue-cli

### Usage:

> vue init \<template-name> \<project-name> 

Example:

> vue init webpack-simple my-project 

## Offical Templates

1. webpack - A full-featured Webpack + vue loader setup with hot reload, linting, testing and CSS extraction.

2. webpack-simple - A simple Webpack + vue loader setup for quick prototyping.

3. browserify-simple - A simple browserify + vueify setup for quick prototyping.

4. simple - A simplest possible Vue setup in a single HTML file.

*change directory*

> cd \<project-name>

*install dependencies*

> npm install

*serve with hot reload at localhost:8080*

> npm run dev

*build for production with minification*

> npm run build

## vue-resource

The plugin for Vue.js provides services for making web requests and handle responses using a XMLHttpRequest or JSONP.

## Installation

You can install it via yarn or NPM.

> yarn add vue-resource
> npm install vue-resource

## CDN

> \<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.3">\</script>

## vue-routing

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

## Installation

You can install it via yarn or NPM.

> yarn add vue-router@4
> npm install vue-router@4

The problem is you have incompatible versions of vue and vue-router.

- vue@2 requires vue-router@3
- vue@3 requires vue-router@4


## CDN

> https://unpkg.com/vue-router@4