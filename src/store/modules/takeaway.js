import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foods = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      let item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    }
  }
})

let { setFoodList, changeActiveIndex, addCart } = foods.actions
const fetchFoodList = () => {
  return async (dispatch) => {
    let res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}
const foodReducer = foods.reducer

export { fetchFoodList, changeActiveIndex, addCart }
export default foodReducer