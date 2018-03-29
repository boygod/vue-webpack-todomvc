<template>
	<footer class="footer">

	<span class="todo-count"><strong v-text="handleNumber"></strong> item left</span>

	<ul class="filters">
			<li>
			<a :class="{selected:filterT==''}" href="#/">All</a>
			</li>
			<li>
				<a href="#/active" :class="{selected:filterT=='active'}">Active</a>
			</li>
			<li>
				<a href="#/completed" :class="{selected:filterT=='completed'}">Completed</a>
			</li>
	</ul>

	<button class="clear-completed" @click="$emit('clearAllDone')">Clear completed</button>
	</footer>
</template>
<script>
	export default {
		props:['filterT',"todos"],
		computed:{
			handleNumber:{
				get(){
					return this.todos.filter(t => !t.checked).length;
				}
			}
		}

	}
</script>
<style>

</style>
