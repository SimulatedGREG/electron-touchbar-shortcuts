import {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  TouchBar
} from 'electron'
import TouchBarItems from './actions'

// Hoist browser window
let window = null

/**
 * Focus window
 */
const focusWindow = () => {
  window.show()
  window.focus()
}

/**
 * Hide window and blur app
 */
const hideWindow = () => {
  app.hide()
}

/**
 * Create touchbar
 * 
 * @param {array} items 
 * @return {TouchBar}
 */
const createTouchbar = items => new TouchBar({ items })

/**
 * Create invisible browser window
 */
const createWindow = () => {
  window = new BrowserWindow({
    frame: false,
    show: false,
    transparent: true
  })

  window.loadFile('./index.html')

  // Global hotkey to summon touchbar actions
  globalShortcut.register('CommandOrControl+Shift+2', () => {
    focusWindow()
  })

  // Listener for `esc` dismissal
  ipcMain.on('hide-window', () => {
    hideWindow()
  })
}

/**
 * Create browser window and attach touchbar
 */
app.on('ready', () => {
  app.dock.hide()

  createWindow()

  const touchbar = createTouchbar(TouchBarItems)

  window.setTouchBar(touchbar)
})

