export const addToCart = (id) => {
    return ({
        type: 'ADD_TO_CART',
        id: id 
    })
}

export const removeItem = (id) => {
    return ({
        type: 'REMOVE_ITEM',
        id: id 
    })
}

export const addItem = (id) => {
    return ({
        type: 'ADD_ITEM',
        id: id 
    })
}

export const subtractItem = (id) => {
    return ({
        type: 'SUBTRACT_ITEM',
        id: id 
    })
}