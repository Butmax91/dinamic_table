<template>
	<nav>
		<ul>
			<li>
				<a href="#" v-if="curPage!=1" @click.prevent="prevPage">Previous</a>
				<span v-else class="disabled">Previous</span>
			</li>

			<template v-if="numPages <=6">
				<li v-for="n in numPages" :key="n">
					<a href="#" v-if="curPage!=n" @click.prevent="setCurPage(n)">{{n}}</a>
					<span v-else class="active">{{n}}</span>
				</li>
			</template>

			<template v-else-if="numPages > 6 && curPage <= 4">
				<li v-for="n in 5" :key="n">
					<a href="#" v-if="curPage!=n" @click.prevent="setCurPage(n)">{{n}}</a>
					<span v-else class="active">{{n}}</span>
				</li>
				<li>
					<span class="disabled">...</span>
				</li>
			</template>

			<template v-else-if="numPages > 6 && curPage > numPages - 4">
				<li>
					<span class="disabled">...</span>
				</li>
				<li v-for="n in [numPages-4, numPages-3, numPages-2, numPages-1, numPages]" :key="n">
					<a href="#" v-if="curPage!=n" @click.prevent="setCurPage(n)">{{n}}</a>
					<span v-else class="active">{{n}}</span>
				</li>
			</template>

			<template v-else>
				<li>
					<a href="#" @click.prevent="setCurPage(1)">1</a>
				</li>
				<li>
					<span class="disabled">...</span>
				</li>
				<li v-for="n in [curPage-1, curPage, curPage+1]" :key="n">
					<a href="#" v-if="curPage!=n" @click.prevent="setCurPage(n)">{{n}}</a>
					<span v-else class="active">{{n}}</span>
				</li>
				<li>
					<span class="disabled">...</span>
				</li>
				<li>
					<a href="#" @click.prevent="setCurPage(numPages)">{{numPages}}</a>
				</li>
			</template>

			<li>
				<a href="#" v-if="curPage!=numPages" @click.prevent="nextPage">Next</a>
				<span v-else class="disabled">Next</span>
			</li>
	
		</ul>

	</nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	computed: {
		...mapState(['curPage']),
		...mapGetters(['numPages']),
	},

	methods: {
		setCurPage(n) {
			this.$store.commit('set', { key: 'curPage', value: n });
		},

		prevPage() {
			this.$store.commit('set', { key: 'curPage', value: this.curPage - 1 });
		},

		nextPage() {
			this.$store.commit('set', { key: 'curPage', value: this.curPage + 1 });
		},
	},
};
</script>


<style>
nav {
	background-color: #ddd;
	border-radius: 5px;
}

nav ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

nav ul li {
	display: inline-block;
}

nav ul li a {
	padding: 7px 8px;
	display: block;
	text-decoration: none;
	color: #337ab7;
}

nav ul li span {
	padding: 7px 8px;
	display: block;
}

nav ul li span.active {
	color: #fff;
}

nav ul li span.disabled {
	color: #777;
	cursor: not-allowed;
}
</style>
