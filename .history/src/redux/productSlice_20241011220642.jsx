import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    addIncome: [],
    addExpense: [],
    addBudget: [],
    productData: [],
    userInfo: null,
    payment: [],
    category: [],
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
        addToCart: (state, action) => {
            const existingProduct = state.productData.find((item,index) => index == action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increase quantity if product already exists
                //toast.info('Product quantity increased in cart');
            } else {
                state.productData.push({ ...action.payload, quantity: 1 }); // Add product with quantity 1 if it's not in the cart
                //toast.success('Product added to cart successfully!');
            }
        },
        increment: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check) {
                check.quantity = check.quantity + 1
            }
        },
        decrement: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check.quantity === 1) {
                check.quantity = 1
            } else {
                check.quantity = check.quantity - 1
            }
        },
        removeCart: (state, action) => {
            state.productData = state.productData.filter(item => item.id !== action.payload.id)
        },
        resetData: (state) => {
            state.productData = [];
        },
        addProduct: (state, action) => {
            const checkProduct = state.addProduct.find(item => item.title === action.payload.title)
            if (checkProduct) {
                toast.error('Product name already available')
            } else {
                state.addProduct.push(action.payload)
                toast.success('Product added successfully!')
            }
        },
        removeProduct: (state, action) => {
            state.addProduct = state.addProduct.filter(item => item.id !== action.payload.id)
        },
        // For payment purpose
        addOrder: (state, action) => {
            state.payment.push(action.payload)
            toast.success('Order Successfully Placed!');
        },
        // for category purpose
        addToCategory: (state, action) => {
            const check = state.category.find(item => item.name === action.payload.name)
            if (check) {
                toast.error('Category already stored')
            } else {
                state.category.push(action.payload)
                toast.success('Category added successfully!')
            }
        },
        removeCategory: (state, action) => {
            state.category = state.category.filter(item => item.name !== action.payload.name)
            toast.success('Category deleted successfully!')
        },
        // order purpose
        resetOrder: (state) => {
            state.payment = [];
        },
        removeOrder: (state, action) => {
            state.payment = state.payment.filter(item => item.invoiceNo !== action.payload.id)
            toast.success('Order deleted successfully!')
        },
    },
})

export const { deleteData,addIncomeData, addExpenseData, addBudgetData, increment, decrement, removeCart, resetData, addProduct, removeProduct, addOrder, addToCategory, removeCategory, resetOrder, removeOrder } = productSlice.actions

export default productSlice.reducer;