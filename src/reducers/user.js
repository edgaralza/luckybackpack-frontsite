import * as types from '../constants/actionTypes'

const initialState = {
    name: 'Quinn Pruitt',
    email: 'test@test.com',
    bio: 'Never gonna give you up, never gonna let you down',
    profilePicture: 'http://www.wrestling123.org/wp-content/uploads/2012/01/Superstar-John-Cena-Close-Up.jpg'
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
