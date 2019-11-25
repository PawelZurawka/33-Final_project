export default function(state = { added: [], summary: 0 }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const parse = parseFloat(state.summary + action.payload.price).toFixed(2)
      let added = [...state.added, action.payload]
      state.added.forEach(product => {
        if (product.id === action.payload.id) {
          product.qty += 1
          added = [...state.added]
        }
      })
      return { ...state, added, summary: parseFloat(parse) }

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
      const priceToSubstract = action.payload.qty * action.payload.price
      const newList = state.added.filter(
        product => product.id !== action.payload.id
      )
      return {
        added: [...newList],
        summary: state.summary - priceToSubstract,
      }

    default:
      return state
  }
}
