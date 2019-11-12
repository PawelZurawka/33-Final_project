export const getProduct = product => {
  return {
    type: 'GET_PRODUCT',
    payload: product,
  }
}

export const qtyAdd = product => {
  return {
    type: 'QTY_INCREASE',
    payload: product,
  }
}

export const qtyRemove = product => {
  return {
    type: 'QTY_DECREASE',
    payload: product,
  }
}

export const removeAllProducts = () => {
  return {
    type: 'REMOVE_ALL_PRODUCTS',
  }
}
