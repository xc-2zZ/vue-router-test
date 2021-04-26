// import state from '../state'

export default {
    increment (state,payload) {
        state.count+=payload.num
    },
    decrement (state,payload) {
        state.count-=payload.num
    },
    changeAge(state,payload) {
        state.peoples.forEach((item) => {
            item.age += payload.addAge
        })
    }
}