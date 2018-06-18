console.log('c')

let obj = {}

Object.defineProperty(obj, 'test', {
  value: 'objc'
})

export {obj}

export default 'c'