import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GameResult {
    nickname: string
    score: string
    date: string
}

interface GameState {
    results: GameResult[]
}

const loadResults = () => {
    const data = localStorage.getItem('gameResults')
    return data ? JSON.parse(data) : []
}

const initialState : GameState = {
    results: loadResults()
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        recordGameResult: (state, action : PayloadAction<GameResult>) => {
            state.results.push(action.payload)
            localStorage.setItem('gameResults', JSON.stringify(state.results))
        }
    }
})

export const { recordGameResult } = gameSlice.actions
export default gameSlice.reducer