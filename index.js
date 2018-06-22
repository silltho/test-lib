import a from './a'
import { d } from './b'
import { e } from './e'
import c, {obj} from './c'

console.log('index file sideeffect')

export {
  a,
  d as b,
  c,
  e,
  obj
}