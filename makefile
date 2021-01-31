.PHONY: build
build: build/ok.txt

build/ok.txt: node_modules/.ok $(shell find src -type f)
	npm run build
	date > $@

node_modules/.ok: package.json
	npm i
	touch $@
