const isState = {
    data: [],
    isClick: false,
    currentItem: []
}
// var dataList={};
const reducer = (state = isState, action) => {
    console.log(action);
    console.log("state......", state)
    
    // dataList = dataList + act/ion.payload;
    // console.log(dataList);
    switch (action.type) {
        case "CHANGE_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "CURRENT_DATA":
            return {
                ...state,
                currentItem : [...state.currentItem, action.payload]
            }
        default:
            return state
    }
}
export default reducer;