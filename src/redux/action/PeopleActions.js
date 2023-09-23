import { Base_Url } from "app/utils/api/BaseURL"
import { api_key } from "app/utils/api/Key"
import { ActionTypes } from "./ActionTypes"

export const fectch_people = (currentPage) => {

    return (dispatch) => {
        fetch(`${Base_Url}/person/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(resp => resp.json())
            .then(res => dispatch({
                type: ActionTypes.FECTCH_PEOPLE,
                payload: res
            })
            )
            .catch(er => console.log(`FECTCH: ${er.message}`))
    }
}