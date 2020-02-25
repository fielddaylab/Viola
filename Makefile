.PHONY: default

default:
	yarn
	cd ../NomenNative && make
	rm -rf siftr/*
	cp -R ../SiftrNative/src-native siftr/
	cp -R ../SiftrNative/web siftr/
	rm -rf nomen/*
	cp -R ../NomenNative/src nomen/
	cp -R ../NomenNative/plants nomen/
	cp -R ../NomenNative/plants-new nomen/
	cp -R ../NomenNative/img nomen/
