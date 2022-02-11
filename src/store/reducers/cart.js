const INITIAL_STATE = {
    totalGunsPrice: 0,
    totalItems: 0,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let indexArmy = state.Cart.findIndex(
                (el) => el.id === action.army.id
            );
            if (indexArmy === -1) {
                let objArmy = {
                    id: action.army.id,
                    image: action.army.image,
                    name: action.army.name,
                    price: action.army.price,
                    totalGunPrice: action.army.price,
                    amount: 1
                };
                state.Cart.push(objArmy);
                state.totalGunsPrice += action.army.price;
                state.totalItems += 1;
            } else {
                state.Cart[indexArmy].amount += 1;
                state.Cart[indexArmy].totalGunPrice += action.army.price;
                state.totalGunsPrice += action.army.price;
                state.totalItems += 1;
            }


            localStorage.setItem('Cart', JSON.stringify(state))
            return {
                ...state,
            };


        case 'ADD_ITEM':
            let indexArmyAdd = state.Cart.findIndex(
                (el) => el.id === action.army.id
            );
            state.Cart[indexArmyAdd].amount += 1;
            state.Cart[indexArmyAdd].totalGunPrice += action.army.price;
            state.totalGunsPrice += action.army.price;
            state.totalItems += 1;


            localStorage.setItem('Cart', JSON.stringify(state))
            return {
                ...state,
            };


        case 'REMOVE_ITEM':
            let indexArmyRemove = state.Cart.findIndex(
                (el) => el.id === action.army.id
            );
            if (state.Cart[indexArmyRemove].amount < 2) {
                state.Cart.splice(indexArmyRemove, 1)
                state.totalGunsPrice -= action.army.price;
                state.totalItems -= 1;
            } else {
                state.Cart[indexArmyRemove].amount -= 1;
                state.Cart[indexArmyRemove].totalGunPrice -= action.army.price;
                state.totalGunsPrice -= action.army.price;
                state.totalItems -= 1;
            }


            localStorage.setItem('Cart', JSON.stringify(state))
            return {
                ...state,
            };


        case 'DELETE_ITEM':
            console.log('DELETE_ITEM')
            console.log(state, action)
            let indexArmyDelete = state.Cart.findIndex(
                (el) => el.id === action.army.id
            );
            console.log(state.Cart[indexArmyDelete])
            state.Cart.splice(indexArmyDelete, 1)
            state.totalGunsPrice -= action.army.totalGunPrice;
            state.totalItems -= action.army.amount;


            localStorage.setItem('Cart', JSON.stringify(state))
            return {
                ...state,
            };


        case 'UPDATE_CART':
            return {
                ...action.cart
            };


        default:
            return state;
    }
}