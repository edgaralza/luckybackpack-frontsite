import * as types from '../constants/actionTypes'

const initialState = {
    trips: [
        {
            destination: 'Europe',
            cities: 12,
            startDate: 'Dec 22',
            endDate: 'Dec 27',
            image: ''
        }
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}