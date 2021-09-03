import { GET_DATA } from '../actions/index'

const reducer = (state,action)=>{
    switch (action.type) {
        case GET_DATA:
            state.user_data.filter((user)=>{
            

                 
                console.log(user)
            })
            
            
            return {...state,user_data:action.data}
            default:
                    return state
    }
}

export default reducer