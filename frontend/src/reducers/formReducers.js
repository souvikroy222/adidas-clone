export const HANDLE_INPUT_FIELD='HANDLE_INPUT_FIELD'

export const formReducer=(state,action)=>{
    switch(action.type){
        case HANDLE_INPUT_FIELD:
            return{
                ...state,
                [action.field]:action.payload
            }
        default:
            return state            

    }
}