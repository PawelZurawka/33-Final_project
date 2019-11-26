export default function(
  state = { added: [], summary: 0, numberOfProducts: 0 },
  action
) {
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
      return {
        ...state,
        added,
        summary: parseFloat(parse),
        numberOfProducts: state.numberOfProducts + action.payload.qty,
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
        numberOfProducts: state.numberOfProducts + 1,
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
        numberOfProducts: state.numberOfProducts - 1,
      }

    case 'REMOVE_FROM_CART':
      const priceToSubstract = action.payload.qty * action.payload.price
      const newList = state.added.filter(
        product => product.id !== action.payload.id
      )
      return {
        added: [...newList],
        summary: state.summary - priceToSubstract,
        numberOfProducts: state.numberOfProducts - action.payload.qty,
      }

    default:
      return state
  }
}
