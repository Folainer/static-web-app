import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
    name: string
    email: string
    nickname: string
    password: string
    birthday: string
    gender: string
}

interface UserState {
    users: User[]
    currentUser: User | null
}

const loadUsers = () => {
    const data = localStorage.getItem('users')
    return data ? JSON.parse(data) : []
}

const loadCurrentUser = () => {
    const currentUser = localStorage.getItem('currentUser')
    return currentUser ? JSON.parse(currentUser) : null
}

const initialState: UserState = {
    users: loadUsers(),
    currentUser: loadCurrentUser()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action : PayloadAction<User>) => {
            const newUser = {...action.payload}
            state.users.push(newUser)
            localStorage.setItem('users', JSON.stringify(state.users))
            state.currentUser = newUser
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
        },
        logout: (state) => {
            state.currentUser = null
            localStorage.removeItem('currentUser')
        },
        loginUser: (state, action: PayloadAction<{nickname: string, password: string}>) => {
            const foundUser = state.users.find(user => {
                return user.nickname === action.payload.nickname && user.password === action.payload.password
            })
            if (foundUser) {
                state.currentUser = foundUser
                localStorage.setItem('currentUser', JSON.stringify(foundUser))
            }
        }
    }
})

export const {registerUser, logout, loginUser} = userSlice.actions
export default userSlice.reducer