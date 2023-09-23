import { Base_Url } from "app/utils/api/BaseURL";
import { api_key } from "app/utils/api/Key";
import { ActionTypes } from "./ActionTypes";

export const fectchAllMovies = (currentPage, movieType) => {
    return (dispatch) => {
      fetch(`${Base_Url}/${movieType}?api_key=${api_key}&language=en-US&page=${currentPage}`)
        .then(resp => resp.json())
        .then(res => dispatch({
          type: ActionTypes.FECTCH_MOVIES,
          payload: res
        }))
        .catch(er => console.log('fetch movie error: ', er));
    };
  };