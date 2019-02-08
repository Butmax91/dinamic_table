<template>
	<div>
		Show
		<select v-model="perPage">
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="15">15</option>
			<option value="25">25</option>
		</select>
		entries per page
	</div>
</template>

<script>
	export default {
		computed: {
			perPage: {
				get: function() {
					return this.$store.state.perPage;
				},
				set: function(value) {
					this.$store.commit('set', { key: 'curPage', value: 1 });
					this.$store.commit('set', { key: 'perPage', value });
				},
			},
		},
	};
</script>

<style>
	select {
		outline: none;
	}
</style>
