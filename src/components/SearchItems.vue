<template>
	<div>Search: <input type="search" v-model="searchText"  /></div>
</template>

<script>
export default {
	computed: {
		searchText: {
			get: function() {
				return this.$store.state.searchText;
			},
			set: function(value) {
				this.$store.commit('set', { key: 'curPage', value: 1 });
				this.$store.commit('set', { key: 'searchText', value });
			},
		},
	},
};
</script>


<style lang="scss" scoped>
input {
	padding: 5px;
	outline: none;
	border: 1px solid #ddd;
}
</style>
