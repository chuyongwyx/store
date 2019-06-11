import Vue from "vue";
import Vuex from "vuex";
import screen from "./screen";
import student from './student';
import teacher from './teacher';
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        screen,
        student,
        teacher
    }
})

export default store;