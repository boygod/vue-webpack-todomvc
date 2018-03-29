<template>
	<header class="header">
	<h1>todos</h1>
	<input class="new-todo" v-focus placeholder="What needs to be done?"  @keydown.enter="pushTodos">
	</header>
</template>
<script>
	export default {
		methods:{
			pushTodos(e){
				const target=e.target;
				const value=target.value.trim();
				if(!value.length){
					return
				}
				this.$emit("add",value);
				target.value="";
			}
		},
		directives:{
			focus:{
				inserted(el){
					el.focus();
				}
			}
		}
	}
</script>
<style>

</style>
