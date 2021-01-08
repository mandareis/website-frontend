.PHONY: build
build: public/javascript/admin.js public/javascript/public.js

public/javascript/admin.js: node_modules/.ok $(shell find ./src -type f -name \*.js)
	NODE_ENV=production ./node_modules/.bin/webpack --config webpack.admin.js

public/javascript/public.js: node_modules/.ok $(shell find ./src -type f -name \*.js)
	NODE_ENV=production ./node_modules/.bin/webpack --config webpack.public.js

node_modules/.ok: package.json
	yarn
	touch $@
