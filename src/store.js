import Vue from 'vue';
import Vuex from 'vuex';
import data from './data';

Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		data,
		curPage: 1,
		perPage: 15,
		searchText: '',
		orderBy: Object.keys(data[0])[0],
		orderDir: 'asc',
	},

	getters: {
		filteredData: state => {
			return state.data
                .filter(
                    row =>
                        Object.values(row)
                            .join('~')
                            .toLowerCase()
                            .indexOf(state.searchText.toLowerCase()) > -1,
                )
                .sort((a, b) => {
                    const sign = state.orderDir === 'asc' ? 1 : -1;
                    return a[state.orderBy] > b[state.orderBy] ? 1 * sign : -1 * sign;
                });
		},

		fields: state => Object.keys(state.data[0]),

		rows: (state, getters) =>
			getters.filteredData.slice(
				(state.curPage - 1) * state.perPage,
				state.curPage * state.perPage,
			),

		numPages: (state, getters) =>
			Math.ceil(getters.filteredData.length / state.perPage),

		dataLength: state => state.data.length,
		filteredDataLength: (state, getters) => getters.filteredData.length,
	},

	mutations: {
		set: (state, { key, value }) => (state[key] = value),
	},

	actions: {},
});
