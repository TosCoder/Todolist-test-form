export const SET_INITAIL_LIST = 'SET INITAIL LIST'
export const CREATE_LIST = 'CREATE LIST'
export const DELETE_LIST = 'DELETE LIST'
export const DELETE_ALL = 'DELETE ALL'
export const UPDATE_LIST = 'UPDATE LIST'
export const UPDATE_SUBMIT = 'UPDATE SUBMIT'

export const setInitialList = data => ({
  type: SET_INITAIL_LIST,
  payload: data
})

export const createList = data => ({
  type: CREATE_LIST,
  payload: data
})

export const deleteList = data => ({
  type: DELETE_LIST,
  payload: data
})

export const deleteAll = data => ({
  type: DELETE_ALL,
  payload: data
})

export const updateList = data => ({
  type: UPDATE_LIST,
  payload: data
})

export const updateSubmit = data => ({
  type: UPDATE_SUBMIT,
  payload: data
})