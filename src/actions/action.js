export const anotherData = () => {
    return async (dispatch) => {
        const axios = require('axios');
        const response = await axios.get(`http://localhost:8000/books`);
        // const json = await response.json();
        // console.log("&&&%%%%%%", json);
        console.log("responce",response);
        await dispatch({ type: 'CHANGE_DATA', payload: response.data });
    }
}

export const currentData = (e) => {

    return async (dispatch) => {
        const axios = require('axios');
        console.log("&&&&&&&&&&&", e.target.id);
        const id = e.target.id;
        const response = await axios.get(`http://localhost:8000/books`);
        // const json = await response.json();
        const currentItem = await response.data.filter(item => {
            return item.id === id
        })
        console.log("currentItem", currentItem)
        await dispatch({ type: 'CURRENT_DATA', payload: currentItem });
    }
}

export const currentResult = () => {
    return async (dispatch) => {
        await dispatch({ type: "CURRENT_RESULT" })
    }
}

export const checkOutForm = (state) => {
    return (dispatch) =>{
        dispatch({ type: 'CHECKOUT_FORM', payload:state })
    }
}

export const adminBookCreate = (state) =>{
    return(dispatch) =>{
        const axios = require('axios');

        const response = axios.post(`http://localhost:8000/books`,{
            name:state.name,
            price:state.price,
            pages:state.pages,
            author:state.author,
            category:state.category
        });
        const response1=response.then(resp => {
            console.log("responseeeeeee",response);
            console.log("resppppppppppp",resp);
        }).catch(error => {
            console.log("errrrrrrrrr",error);
        });
        dispatch({type:"ADMIN_BOOK_CREATE",payload:response1})
    }
}


export const adminBookEdit = (state) =>{
    console.log("stateeeeeeeee",state);
    return(dispatch) =>{
        const axios = require('axios');
        const response = axios.put(`http://localhost:8000/books/${state.id}`,{
            name:state.name,
            price:state.price,
            pages:state.pages,
            author:state.author,
            category:state.category
        });
        const response1=response.then(resp => {
            console.log("resppppppppppp",resp.data);
        }).catch(error => {
            console.log("errrrrrrrrr",error);
        });
        dispatch({type:"ADMIN_BOOK_EDIT",payload:response1})
    }
}



