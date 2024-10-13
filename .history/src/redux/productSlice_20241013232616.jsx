import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    addIncome: [],
    addExpense: [],
    addBudget: [],
    userInfo: []
}

export const productSlice = createSlice({
    name: 'personalBanking',
    initialState,
    reducers: {
        // for category purpose
        addIncomeData: (state, action) => {
            state.addIncome.push(action.payload)
            toast.success('Income added successfully!')
        },
        addExpenseData: (state, action) => {
            state.addExpense.push(action.payload)
            toast.success('Expense added successfully!')
        },
        addBudgetData: (state, action) => {
            state.addBudget.push(action.payload)
            toast.success('Budget added successfully!')
        },
        // Delete Function
        deleteData: (state, action) => {
            state.addIncome = state.addIncome.filter(item => item.id !== action.payload.id);
            state.addExpense = state.addExpense.filter(item => item.id !== action.payload.id);
            state.addBudget = state.addBudget.filter(item => item.id !== action.payload.id);
        },
        // Create pin
        createPin: (state, action) => {
            if (!state.userInfo || state.userInfo.length === 0) {
                state.userInfo = action.payload;
            } else {
                toast.error('Pin Already Created!');
            }
        },
        logInSession: (state) => {
            state.userInfo.session = 'Yes';
        },
        logOutSession: (state) => {
            state.userInfo.session = 'No';
        },
    },
})

export const {logInSession, logOutSession, createPin, deleteData, addIncomeData, addExpenseData, addBudgetData, increment, decrement, removeCart, resetData, addProduct, removeProduct, addOrder, addToCategory, removeCategory, resetOrder, removeOrder } = productSlice.actions

export default productSlice.reducer;