#!/usr/bin/env bash

./build-library.sh
yarn concurrently "./build-example-site.sh" "./build-docs.sh"