import { loadAllCategoriesAction } from "../store/reducers/categoriesReducer"

export const getAllCategories = (dispatch) => {
  fetch('https://garden-server.onrender.com/categories/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllCategoriesAction(json)))
}
