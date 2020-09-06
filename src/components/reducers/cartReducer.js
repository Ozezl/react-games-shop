import Item1 from '../../images/witcher-3.svg'
import Item2 from '../../images/gta-v.svg'
import Item3 from '../../images/the-legend-of-zelda-breath-of-the-wild.svg'
import Item4 from '../../images/resident-evil-4.svg'
import Item5 from '../../images/skyrim.svg'
import Item6 from '../../images/metal-gear-5.svg'

const initState = {
    items: [
        { id:1, title:'The Witcher 3: Wild Hunt', platform: "PS4", price: 110, image: Item1 },
        { id:2, title:'GTA V', platform: "PS4", price: 80, image: Item2 },
        { id:3, title:'The Legend of Zelda: Breath of the Wild', platform: "SWITCH", price: 120, image: Item3 },
        { id:4, title:'Resident Evil 4', platform: "XBOX", price: 260, image: Item4 },
        { id:5, title:'The Elder Scrolls V: Skyrim', platform: "PS4", price: 160, image: Item5 },
        { id:6, title:'Metal Gear Solid V: The Phantom Pain', platform: "PS4", price: 90, image: Item6 }
    ],
    addedItems: [],
    total: 0
}

export default function cartReducer(state = initState, action) {
    if(action.type === 'ADD_TO_CART') {
        let addedItem = state.items.find(item => item.id === action.id)
        let existedItem= state.addedItems.find(item => action.id === item.id)

       if(existedItem) {
            addedItem.quantity += 1 

            return ({
               ...state,
               total: state.total + addedItem.price 
            })
       }
       else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
        
            return ({
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            })
        }
    }
    if(action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

        return ({
            ...state,
            addedItems: new_items,
            total: newTotal
        })
    }
    if(action.type === 'FILTER_ITEMS') {
        let newFilter = action.title
        let filteredItems = state.items.filter(item => item.title.toLowerCase().includes(newFilter.toLowerCase())) 

        return (
            newFilter === '' ?
            {
                ...state,
                items: initState.items
            }
            :
            {
                ...state,
                items: filteredItems
            } 
            )
    }
    if(action.type === 'CHANGE_PLATFORM') {
        let filteredItems = initState.items.filter(item => item.platform.toLowerCase().includes(action.platform.toLowerCase())) 

        return (
            action.platform === 'ALL' ?
            {
                ...state,
                items: initState.items
            }
            :
            {
                ...state,
                items: filteredItems
            } 
            )
    }
    if(action.type === 'ADD_ITEM') {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price

        return ({
              ...state,
              total: newTotal
        })
    }
    if(action.type=== 'SUBTRACT_ITEM') {  
        let addedItem = state.items.find(item => item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price

            return ({
                ...state,
                addedItems: new_items,
                total: newTotal
            })
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price

            return ({
                ...state,
                total: newTotal
            })
        }
    }
    return state
}