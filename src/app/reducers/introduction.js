const introduction = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_INTRODUCTION':
      return introduction
    default:
      return state
  }
}

export default todos
