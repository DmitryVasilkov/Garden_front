import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer"
import { LINK } from "./link"

// export const getAllCategories = (dispatch) => {
//   fetch('https://garden-server.onrender.com/categories/all')
//     .then(res => res.json())
//     .then(json => dispatch(loadAllCategoriesAction(json)))
// }

const URL = `${LINK}/categories/all`

export const getAllCategories = async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(loadAllCategoriesAction(data))

}