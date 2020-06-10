import Item1 from '../../images/red-dead-redemption-2.jpg'
import Item2 from '../../images/gta-v.jpg'
import Item3 from '../../images/the-legend-of-zelda-breath-of-the-wild.jpg'
import Item4 from '../../images/resident-evil-4.jpeg'
import Item5 from '../../images/skyrim.jpg'
import Item6 from '../../images/metal-gear-5.png'

const initState = {
    items: [
        {id:1,title:'Red Dead Redemption 2', platform: "PS4", price: 110, image: Item1 },
        {id:2,title:'GTA V', platform: "PS4", price: 80, image: Item2 },
        {id:3,title:'The Legend of Zelda: Breath of the Wild', platform: "SWITCH", price: 120, image: Item3 },
        {id:4,title:'Resident Evil 4', platform: "XBOX", price: 260, image: Item4 },
        {id:5,title:'The Elder Scrolls V: Skyrim', platform: "PS4", price: 160, image: Item5 },
        {id:6,title:'Metal Gear Solid V: The Phantom Pain', platform: "PS4", price: 90, image: Item6 }
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    if(action.type === 'ADD_TO_CART') {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
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
            //calculating the total
            let newTotal = state.total + addedItem.price 
        
            return ({
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            })
        }
    }
    else { 
        return state
    }
}
export default cartReducer;