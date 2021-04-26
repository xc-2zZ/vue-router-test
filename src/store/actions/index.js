export default {
    increment({commit}, payload) {
        commit('increment', payload)
    },
    incrementAsync({commit}, payload) {
        setTimeout(() => {
            commit('increment', payload)
        }, 1000)
    },
    decrement({commit}, payload) {
        commit('decrement', payload)
    },
    changeAge({commit}, payload) {
        commit('changeAge',payload)
    }
}