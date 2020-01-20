const isState = {
    data: [],
    isClick: false,
    currentItem: [],
    totalItem: 0,
    totalAmount: 0,
    result: [],
    total: 0,
    checkOutState:[],
    adminBookCreateState:[],
    adminBookEditState:[]

}
// var dataList={};
const reducer = (state = isState, action) => {
    console.log(action);
    console.log("state......", state);
    switch (action.type) {
        case "CHANGE_DATA":
            return {
                ...state,
                data: action.payload,
            }
        case "CURRENT_DATA":
            console.log("@@@@@@@+++", [...state.currentItem])
            return {
                ...state,
                currentItem: [...state.currentItem, ...action.payload],
            }

        case "CURRENT_RESULT":
            const map = new Map();
            for (const item of [...state.currentItem]) {
                let count = [...state.currentItem].filter((obj) => obj.id === item.id).length;
                if (!map.has(item.id)) {
                    map.set(item.id)
                    state.result.push({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        category: item.category,
                        qty: count,
                        total: 0
                    })
                }
            }
            for (const item of state.result) {
                state.total = (item.category) === "Technical" ?
                    (item.qty) * (item.price) - ((item.qty) * (item.price) * 10) / 100 : (item.qty) * (item.price);

                state.totalAmount = state.totalAmount + state.total;
                state.totalItem = state.totalItem + item.qty;
            }
            return {
                ...state,
                result: [...state.result]
            }

        case "CHECKOUT_FORM":
            return {
                ...state,
                checkOutState : action.payload
            }
            
            case "ADMIN_BOOK_CREATE":
                return {
                    ...state,
                    adminBookCreateState: action.payload
                }
                case "ADMIN_BOOK_EDIT":
                    return{
                        ...state,
                        adminBookEditState: action.payload
                    }
        default:
            return state
    }
}
export default reducer;