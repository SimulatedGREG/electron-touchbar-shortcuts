# electron-touchbar-shortcuts

> A bare bones setup for creating _shortcut_ touch bar applications using `electron`.

### Overview
In order to create `TouchBar` items within `electron`, an instance of a `BrowserWindow` _must_ be focused in order for the items to show. This project satisfies that requirement by creating a dummy/invisible browser window that can be focused on-demand via a `globalShortcut`. Once you activate your touch bar action you can hide the application using `app.hide()` or by hitting <kbd>esc</kbd>. Doing so will restore focus to the previous application.

The default `globalShortcut` for opening the touch bar app is <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>2</kbd>.

### What's Included
This setup doesn't include too much, but gets you up and running with a nice development environment with support for `electron` reloading via `nodemon` and ES Module support thanks to `esm`.

```bash
# clone down the project
git clone https://github.com/SimulatedGREG/electron-touchbar-shortcuts.git

# install dependencies
yarn

# run development setup
yarn serve
```


### How can I add my own functionalties?
It's rather simple. All files within the `actions` directory are all individual TouchBar items, and each file is expected to export one of the supported `TouchBar` item types.

* TouchBarButton
* TouchBarColorPicker
* TouchBarGroup
* TouchBarLabel
* TouchBarPopover
* TouchBarScrubber
* TouchBarSegmentedControl
* TouchBarSlider
* TouchBarSpacer

See full documentation at https://electronjs.org/docs/api/touch-bar.

### That's it
There really isn't much more to this project. Now it's your turn to make your own actions that fit your workflow. Have fun!

#### Todo
* Packaging with `electron-builder`
