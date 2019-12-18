import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: [],
    },
    mutations: {
        setComments: (state, data) => {
            state.comments = data
        }
    },
})