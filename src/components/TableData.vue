<template>
	<table>
		<thead>
			<tr>
				<th
					v-for="(field, index) in fields"
					:key="`f${index}`"
					:class="{
						sortAsc: orderBy === field && orderDir === 'asc',
						sortDesc: orderBy === field && orderDir === 'desc'
					}"
					@click="setOrderBy(field)"
				>
					{{ field }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="(row, index) in rows"
				:key="`r${index}`"
			>

				<DataItem v-for="(data, index) in row"
						  :key="`d${index}`"
						  :data="data"
				> </DataItem>

			</tr>
		</tbody>

	</table>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

import DataItem from './DataItem.vue'

export default {
	name: 'TableData',
	components :{
	  DataItem
	},
	computed: {
		...mapState(['orderBy', 'orderDir']),
		...mapGetters(['fields', 'rows']),
	},

	methods: {
		setOrderBy(field) {
			if (field === this.orderBy) {
				const dir = this.orderDir === 'asc' ? 'desc' : 'asc';
				this.$store.commit('set', { key: 'orderDir', value: dir });
			}
			this.$store.commit('set', { key: 'orderBy', value: field });
		},
	},
};
</script>

<style lang="scss">
table {
	border-collapse: collapse;
	width: 100%;
	margin-bottom: 5px;
}

tbody tr:nth-child(odd) {
	background-color: #f9f9f9;
}

th {
	text-align: left;
	border: 1px solid #ddd;
	border-bottom: 3px solid #ddd;
	position: relative;
	cursor: pointer;
}

th::after {
	content: '';
	position: absolute;
	top: 12px;
	right: 8px;
	display: block;
	opacity: 0.2;
	font-size: 0.7em;
}

th.sortAsc::after {
	content: '\25b2';
	opacity: 0.8;
}

th.sortDesc::after {
	content: '\25bc';
	opacity: 0.8;
}

td {
	border: 1px solid #ddd;
}

td,
th {
	padding: 8px;
}
</style>
