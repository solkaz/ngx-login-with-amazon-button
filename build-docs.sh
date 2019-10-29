#!/usr/bin/env bash

if ! [ `command -v compodoc` ]; then
    yarn global add @compodoc/compodoc
fi

cd projects/ngx-login-with-amazon-button
compodoc -p ./tsconfig.lib.json -d ../../site/docs
cd ../..