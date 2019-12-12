import { COUNT } from '../../constants/ActionTypes'
import { produce } from 'immer'

const INIT_COUNT: [] = []

const count = produce((draft = INIT_COUNT, action: any) => {
  switch (action.type) {
    case COUNT.ADD_COUNT:
      console.log('redux count:', action.count)
      draft.push(action.count)
      console.log(draft)
      return draft
    default:
      return draft
  }
})

export default count
