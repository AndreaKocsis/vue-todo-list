import { createStore } from "vuex";

export default createStore({
    state: {
        activePage: 'all'
    },
    getters: {
        getActivePage (state) {
            return state[activePage]
        }
    },
    actions: {
        changeActivePage ({ commit }, pageType) {
            commit('changeActivePage', pageType)
        },
    },
    mutations: {
        changeActivePage (state, pageType) {
            state[activePage] = pageType
            console.log(pageType)
        },
    }
})
