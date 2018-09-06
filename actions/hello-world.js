import { app, TouchBar } from 'electron'

const { TouchBarButton } = TouchBar

/**
 * Basic button example
 * 
 * @return {TouchBarButton}
 */
export default new TouchBarButton({
  label: '👋',
  click () {
    console.log('Hello world! 🌎')

    app.hide()
  }
})
