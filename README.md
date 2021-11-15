# macOS Emoji Text Substitutions

Generates Slack-style emoji codes for use in macOS text substitution settings. Generate the file, install it, and have e.g. `:pizza:` replaced by 🍕 system-wide.


## Installation & Usage

Clone the repo, _cd_ to the directory, then:

```shell
$ npm install
$ npm run build
```

This will generate a `emoji-substitutions.plist` file.

Open macOS System Preferences, select _Keyboard_, then the _Text_ tab. From the Finder, drag the generated file into the left-hand panel with text substitutions, wait a few seconds, voilà.


## License

ISC
