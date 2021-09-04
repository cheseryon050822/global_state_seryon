import { GET_DATA } from '../actions/index'

const reducer = (state,action)=>{
    switch (action.type) {
        case GET_DATA:    
            console.log(action.data)
            const new_users = action.data.filter((user) => user.id < 6)

            return {...state,user_data:new_users}
            default:
                    return state
    }
}

export default reducer