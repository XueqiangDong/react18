import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    }
  }
})

const { setBillList } = billStore.actions
const getBillList = () => {
  return async (dispatch) => {
    let res = await axios.get('http://localhost:8888/ka')
    dispatch(setBillList(res.data))
  }

}
const billReducer = billStore.reducer

export { getBillList }
export default billReducer