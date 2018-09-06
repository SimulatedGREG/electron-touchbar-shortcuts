import requireDir from 'require-dir'

const imports = requireDir('.', {
  filter: path => !path.includes('index'),
  mapValue: val => val.default
})

const actions = Object.values(imports)

/**
 * TouchBar items
 * 
 * @type {array}
 */
export default actions
