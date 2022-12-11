#!/bin/bash
[ -z $1 ] && zip -r fastfoot-app$(date +'-%Y%m%d-%H%M').zip outros/ src/ .git/ .browserslistrc .editorconfig .gitignore angular.json karma.conf.js package.json package-lock.json README.md tsconfig.app.json tsconfig.json tsconfig.spec.json comprimir.sh subir.sh
[ ! -z $1 ] && zip -r fastfoot-app$(date +'-%Y%m%d-%H%M').zip outros/ src/ .browserslistrc .editorconfig .gitignore angular.json karma.conf.js package.json package-lock.json README.md tsconfig.app.json tsconfig.json tsconfig.spec.json comprimir.sh subir.sh
