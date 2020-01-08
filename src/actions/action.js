export const anotherData = () => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3001/books`);
        // const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100`);
        // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?limit=100`);
        const json = await response.json();
        console.log("&&&%%%%%%",json);
        await dispatch({ type: 'CHANGE_DATA', payload: json });
    }
}

export const currentData = (e) => {

    return async (dispatch) => {
        console.log("&&&&&&&&&&&",e.target.id);
        const id =  e.target.id;
        // const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100`);
        const response = await fetch(`http://localhost:3001/books`);
        const json = await response.json();
        const currentItem = await json.filter(item => {
            return item.id === id
        })
        dispatch({ type: 'CURRENT_DATA', payload: currentItem });
    }
}

