export default {
    doneTodos: state => {
        return state.peoples.filter(todo => todo.age>2000)
    }
}