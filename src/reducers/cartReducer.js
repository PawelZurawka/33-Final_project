export default function(state = { added: [], summary: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let added = [...state.added, action.payload]
      state.added.forEach(product => {
        if (product.id === action.payload.id) {
          product.qty += 1
          added = [...state.added]
        }
      })
      return {
        added: added,
        summary: state.summary + action.payload.price,
      }

    case 'QTY_ADD':
      state.added.forEach(product => {
        if (product.id === action.payload.id) {
          product.qty += 1
        }
      })
      return {
        added: [...state.added],
        summary: state.summary + action.payload.price,
      }

    case 'QTY_REMOVE':
      state.added.forEach(product => {
        if (product.id === action.payload.id) {
          product.qty -= 1
        }
      })
      return {
        added: state.added.filter(function(object) {
          return object.qty !== 0
        }),
        summary: state.summary - action.payload.price,
      }

    case 'REMOVE_FROM_CART':
      return state.added.filter(product => product.id !== action.payload.id)

    default:
      return state
  }
}
