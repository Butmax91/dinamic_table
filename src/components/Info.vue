<template>
	<div v-if="dataLength === filteredDataLength">
		Showing
		{{ (curPage - 1) * perPage + 1 }}
		to
		{{ curPage !== numPages ? curPage * perPage : dataLength }}
		of
		{{ dataLength }}
		entries
	</div>
	<div v-else>
		Showing
		{{ (curPage - 1) * perPage + 1 }}
		to
		{{ curPage !== numPages ? curPage * perPage : filteredDataLength }}
		of
		{{ filteredDataLength }}
		entries (filterred from {{ dataLength }} total entries)
	</div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';

export default {
	computed: {
		...mapState(['curPage', 'perPage']),
		...mapGetters(['dataLength', 'filteredDataLength', 'numPages']),
	},
};
</script>
