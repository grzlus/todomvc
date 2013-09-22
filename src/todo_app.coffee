#=require utils
#=require local_storage
#=require todo_use_case
#=require todo_gui
#=require routing_adapter
#=require web_glue

class @WebTodoApp
  constructor: ->
    useCase = new CompleteTasksUseCase()
    useCase.start()
    window.useCase = useCase
    todoListView = new TodoListView()
    statsView    = new StatsView()
    localStorage = new LocalStorage("todo_app")
    routingAdapter = new RoutingAdapter()
    glue = new WebGlue(useCase, todoListView, statsView, localStorage, routingAdapter)
    useCase.start()
    routingAdapter.start()

new WebTodoApp()

