import {
  SET_INITAIL_LIST,
  CREATE_LIST,
  DELETE_LIST,
  DELETE_ALL,
  UPDATE_LIST,
  UPDATE_SUBMIT
} from './action'

const initState = {
  data: [],
  dataEdit: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_INITAIL_LIST:
      return { ...state, data: action.payload ? action.payload : [] }
    case CREATE_LIST:
      localStorage.setItem('data', JSON.stringify(action.payload))
      return { ...state, data: action.payload }
    case DELETE_LIST:
      localStorage.setItem('data', JSON.stringify(action.payload))
      return { ...state, data: action.payload }
    case DELETE_ALL:
      localStorage.setItem('data', JSON.stringify(action.payload))
      return { ...state, data: action.payload }
    case UPDATE_LIST:
      return { ...state, dataEdit: action.payload }
    case UPDATE_SUBMIT:
      localStorage.setItem('data', JSON.stringify(action.payload))
      return { ...state, data: action.payload, dataEdit: null }
    default:
      return state
  }
}
