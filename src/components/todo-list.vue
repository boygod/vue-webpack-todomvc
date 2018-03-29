<template>
	<section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all" >Mark all as complete</label>
		<ul class="todo-list">
			<li v-for="item in toggleHash">
				<div class="view">
					<input class="toggle" type="checkbox" v-model="item.checked">
					<label v-text="item.title"></label>
					<button class="destroy"></button>
					</div>
				<input class="edit" value="Create a TodoMVC template">
				</li>
			</ul>
		</section>
</template>
<script>
export default {
	props:['todos','filterT'],
	data(){
		return{

		}
	},
	computed:{
		toggleHash(){
			switch (this.filterT){
				case 'active':
					return this.todos.filter(t => !t.checked);
					break;
				case 'completed':
					return this.todos.filter(t => t.checked);
					break;
				default:
					return this.todos;
			}
		}
	},

}
</script>
<style>

</style>
