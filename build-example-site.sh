#!/usr/bin/env bash

yarn build NgxLoginWithAmazonButton
node projects/example/src/environment-builder.js
yarn ng build --prod