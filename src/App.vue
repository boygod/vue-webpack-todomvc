<template>
	<div>
		<section class="todoapp">
			<todo-header @add="addTodo"></todo-header>
			<todo-list :todos="todos" :filterT="filterText"></todo-list>
			<todo-footer  :filterT="filterText" @clearAllDone="clearAllDone" :todos="todos"></todo-footer>
		</section>
		<app-footer></app-footer>
	</div>
</template>
<script>
	import todoHeader from "./components/todo-header.vue";
	import todoList from "./components/todo-list.vue";
	import todoFooter from  "./components/todo-footer.vue"
	import appFooter from "./components/app-footer.vue";
	export default {
		components:{
			todoHeader,
			todoList,
			todoFooter,
			appFooter
		},
		data(){
			return{
				todos:[

				],
				filterText:''
			}
		},
		created(){
			window.onhashchange = () => {
				return this.filterText=window.location.hash.substr(2);
			};
		},

		methods:{
			addTodo(titleText){
				titleText=titleText.trim();
				if(!titleText.length){
					return
				}
				const todos=this.todos;
				todos.push({
					id:todos[todos.length-1],
					title:titleText,
					checked:false
				})
			},
			clearAllDone(){
				this.todos=this.todos.filter(t=>!t.checked)
			}
		}
	};
</script>
