import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        setUsers: (state, data) => {
            state.users = data
        }
    },
})