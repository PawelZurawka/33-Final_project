export const getProduct = product => {
  return {
    type: 'GET_PRODUCT',
    payload: product,
  }
}

export const qtyAdd = product => {
  return {
    type: 'QTY_ADD',
    payload: product,
  }
}

export const qtyRemove = product => {
  return {
    type: 'QTY_REMOVE',
    payload: product,
  }
}

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  }
}
