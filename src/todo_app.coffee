#import "utils.coffee"
#import "local_storage.coffee"
#import "todo_use_case.coffee"
#import "todo_gui.coffee"
#import "routing_adapter.coffee"
#import "web_glue.coffee"

class WebTodoApp
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

