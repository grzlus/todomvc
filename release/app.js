var __t;__t=function(ns){var curr,index,part,parts,_i,_len;curr=null,parts=[].concat=ns.split(".");for(index=_i=0,_len=parts.length;_i<_len;index=++_i){part=parts[index];if(curr===null){curr=eval(part);continue}curr[part]==null?curr=curr[part]={}:curr=curr[part]}return curr};var CompleteTasksUseCase,LocalStorage,Task,WebGlue,WebGui,WebTodoApp,__hasProp={}.hasOwnProperty,__bind=function(a,b){return function(){return a.apply(b,arguments)}};_.defaults(this,{Before:function(a,b,c){return YouAreDaBomb(a,b).before(c)},BeforeAnyCallback:function(a,b,c){return YouAreDaBomb(a,b).beforeAnyCallback(c)},After:function(a,b,c){return YouAreDaBomb(a,b).after(c)},Around:function(a,b,c){return YouAreDaBomb(a,b).around(c)},AfterAll:function(a,b,c){var d,e,f,g;g=[];for(e=0,f=b.length;e<f;e++)d=b[e],g.push(After(a,d,c));return g},LogAll:function(a){var b,c,d;d=[];for(b in a){if(!__hasProp.call(a,b))continue;c=a[b],_.isFunction(c)?d.push(function(b){return Before(a,b,function(){return console.log("calling: "+b)})}(b)):d.push(void 0)}return d},AutoBind:function(a,b){var c,d,e;e=[];for(c in a)d=a[c],_.isFunction(d)?e.push(function(c){if(c.endsWith("Clicked")&&b[c.remove("Clicked")])return After(a,c,function(a){return b[c.remove("Clicked")](a)})}(c)):e.push(void 0);return e}}),LocalStorage=function(){function a(a){this.namespace=a,this.flush=__bind(this.flush,this),this.remove=__bind(this.remove,this),this.newTask=__bind(this.newTask,this),this.getTasks=__bind(this.getTasks,this),this.get=__bind(this.get,this),this.set=__bind(this.set,this)}return a.prototype.set=function(a,b){return console.log(b),$.jStorage.set(""+this.namespace+"/"+a,b)},a.prototype.get=function(a){return $.jStorage.get(""+this.namespace+"/"+a)},a.prototype.getTasks=function(){var a=this;return this.get("tasks").map(function(b){var c;return c=a.newTask(b.content,b.completed),c})},a.prototype.newTask=function(a,b){var c;return c=new Task(a),c.completed=b,c},a.prototype.remove=function(a){return $.jStorage.deleteKey(""+this.namespace+"/"+a)},a.prototype.flush=function(){var a,b,c,d,e;d=$.jStorage.index(),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],a.match("^"+this.namespace)?e.push($.jStorage.deleteKey(a)):e.push(void 0);return e},a}(),CompleteTasksUseCase=function(){function a(){this.uncompleteTask=__bind(this.uncompleteTask,this),this.completeTask=__bind(this.completeTask,this),this.toggleTaskCompletion=__bind(this.toggleTaskCompletion,this),this.completeAllTasks=__bind(this.completeAllTasks,this),this.deleteTask=__bind(this.deleteTask,this),this.updateTaskContent=__bind(this.updateTaskContent,this),this.editTaskContent=__bind(this.editTaskContent,this),this.addNewTask=__bind(this.addNewTask,this),this.showCompleted=__bind(this.showCompleted,this),this.showActive=__bind(this.showActive,this),this.showAll=__bind(this.showAll,this),this.setInitialTasks=__bind(this.setInitialTasks,this),this.remainingTasks=__bind(this.remainingTasks,this),this.completedTasks=__bind(this.completedTasks,this),this.todoTasks=[]}return a.prototype.completedTasks=function(){return this.todoTasks.filter(function(a){return a.completed})},a.prototype.remainingTasks=function(){return this.todoTasks.filter(function(a){return!a.completed})},a.prototype.setInitialTasks=function(a){return this.todoTasks=a},a.prototype.showAll=function(){},a.prototype.showActive=function(){},a.prototype.showCompleted=function(){},a.prototype.addNewTask=function(a){return this.todoTasks.push(a)},a.prototype.editTaskContent=function(a){},a.prototype.updateTaskContent=function(a,b){return a.content=b},a.prototype.deleteTask=function(a){return this.todoTasks.remove(a)},a.prototype.completeAllTasks=function(){var a=this;return this.todoTasks.map(function(b){return a.completeTask(b)})},a.prototype.toggleTaskCompletion=function(a){return a.completed?this.uncompleteTask(a):this.completeTask(a)},a.prototype.completeTask=function(a){return a.complete()},a.prototype.uncompleteTask=function(a){return a.uncomplete()},a}(),Task=function(){function a(a,b){this.content=a,this.completed=b!=null?b:!1,this.uncomplete=__bind(this.uncomplete,this),this.complete=__bind(this.complete,this)}return a.prototype.complete=function(){return this.completed=!0},a.prototype.uncomplete=function(){return this.completed=!1},a}(),WebGui=function(){function a(){this.remainingTasksClicked=__bind(this.remainingTasksClicked,this),this.completedTasksClicked=__bind(this.completedTasksClicked,this),this.allTasksClicked=__bind(this.allTasksClicked,this),this.showStats=__bind(this.showStats,this),this.enterKeyPressed=__bind(this.enterKeyPressed,this),this.newTodoContent=__bind(this.newTodoContent,this),this.clearNewTodoTextBox=__bind(this.clearNewTodoTextBox,this),this.keyPressed=__bind(this.keyPressed,this),this.toggleTaskCompletionClicked=__bind(this.toggleTaskCompletionClicked,this),this.completeAllTasksClicked=__bind(this.completeAllTasksClicked,this),this.showTasks=__bind(this.showTasks,this),this.uncompleteTask=__bind(this.uncompleteTask,this),this.completeTask=__bind(this.completeTask,this),this.updateTaskContent=__bind(this.updateTaskContent,this),this.enterKeyPressedWhenEditing=__bind(this.enterKeyPressedWhenEditing,this),this.editingKeyPressed=__bind(this.editingKeyPressed,this),this.editTaskContent=__bind(this.editTaskContent,this),this.deleteTask=__bind(this.deleteTask,this),this.deleteTaskClicked=__bind(this.deleteTaskClicked,this),this.taskContentDoubleClicked=__bind(this.taskContentDoubleClicked,this),this.findTaskElement=__bind(this.findTaskElement,this),this.addNewTask=__bind(this.addNewTask,this),this.createElementFor=__bind(this.createElementFor,this);var a=this;$("#new-todo").keypress(function(b){return a.keyPressed(b)}),$("#toggle-all").click(function(){return a.completeAllTasksClicked()}),this.taskElements=[]}return a.prototype.createElementFor=function(a,b){var c,d,e,f,g;return f=$(b).html(),g=Handlebars.compile(f),c={content:a.content,completed:a.completed},e=g(c),d=$(e)},a.prototype.addNewTask=function(a){var b,c=this;return b=this.createElementFor(a,"#todo-template"),b.task=a,this.taskElements.push(b),$("#todo-list").append(b),b.find(".destroy").click(function(){return c.deleteTaskClicked(a)}),b.find(".toggle").click(function(){return c.toggleTaskCompletionClicked(a)}),b.dblclick(function(){return c.taskContentDoubleClicked(a)})},a.prototype.findTaskElement=function(a){return this.taskElements.find(function(b){return b.task===a})},a.prototype.taskContentDoubleClicked=function(a){},a.prototype.deleteTaskClicked=function(a){},a.prototype.deleteTask=function(a){return this.findTaskElement(a).remove()},a.prototype.editTaskContent=function(a){var b,c=this;return b=this.findTaskElement(a),b.addClass("editing").find("input.edit").show().select().focus(),b.find("input.edit").keypress(function(a){return c.editingKeyPressed(a,b)})},a.prototype.editingKeyPressed=function(a,b){var c;c=13;if(a.keyCode===c)return this.enterKeyPressedWhenEditing(b.task,b.find("input.edit").val())},a.prototype.enterKeyPressedWhenEditing=function(a,b){},a.prototype.updateTaskContent=function(a,b){var c;return c=this.findTaskElement(a),c.removeClass("editing").find("input.edit").hide(),c.find("label").html(b)},a.prototype.completeTask=function(a){var b;return b=this.findTaskElement(a),b.addClass("completed"),b.find("input.toggle").attr("checked","checked")},a.prototype.uncompleteTask=function(a){var b;return b=this.findTaskElement(a),b.removeClass("completed"),b.find("input .toggle").attr("checked","")},a.prototype.showTasks=function(a){var b,c,d,e;$("#todo-list").html(""),e=[];for(c=0,d=a.length;c<d;c++)b=a[c],e.push(this.addNewTask(b));return e},a.prototype.completeAllTasksClicked=function(){},a.prototype.toggleTaskCompletionClicked=function(a){},a.prototype.keyPressed=function(a){var b;b=13;if(a.keyCode===b)return this.enterKeyPressed(this.newTodoContent()),this.clearNewTodoTextBox()},a.prototype.clearNewTodoTextBox=function(){return $("#new-todo").val("")},a.prototype.newTodoContent=function(){return $("#new-todo").val()},a.prototype.enterKeyPressed=function(a){},a.prototype.showStats=function(a,b){var c,d,e,f,g,h=this;return f=$("#stats-template").html(),g=Handlebars.compile(f),c={remaining:a,completed:b},e=g(c),d=$(e),d.find("#all-tasks").click(function(){return h.allTasksClicked()}),d.find("#active-tasks").click(function(){return h.remainingTasksClicked()}),d.find("#completed-tasks").click(function(){return h.completedTasksClicked()}),console.log("here"),$("#footer").html(d)},a.prototype.allTasksClicked=function(){},a.prototype.completedTasksClicked=function(){},a.prototype.remainingTasksClicked=function(){},a}(),WebGlue=function(){function a(a,b,c){var d=this;this.useCase=a,this.gui=b,this.storage=c,AutoBind(this.gui,this.useCase),After(this.gui,"enterKeyPressed",function(a){return d.useCase.addNewTask(new Task(a))}),After(this.useCase,"addNewTask",this.gui.addNewTask),Before(this.useCase,"showAll",function(){return d.useCase.setInitialTasks(d.storage.getTasks())}),After(this.useCase,"showAll",function(){return d.gui.showTasks(d.useCase.todoTasks)}),After(this.useCase,"showAll",function(){return d.gui.showStats(d.useCase.remainingTasks().length,d.useCase.completedTasks().length)}),AfterAll(this.useCase,["addNewTask","updateTaskContent","deleteTask","completeAllTasks","toggleTaskCompletion"],function(){return d.storage.set("tasks",d.useCase.todoTasks)}),After(this.useCase,"deleteTask",this.gui.deleteTask),After(this.useCase,"completeTask",this.gui.completeTask),After(this.useCase,"uncompleteTask",this.gui.uncompleteTask),After(this.useCase,"editTaskContent",this.gui.editTaskContent),After(this.gui,"taskContentDoubleClicked",this.useCase.editTaskContent),After(this.useCase,"updateTaskContent",this.gui.updateTaskContent),After(this.gui,"enterKeyPressedWhenEditing",this.useCase.updateTaskContent),AfterAll(this.useCase,["addNewTask","deleteTask","completeAllTasks","toggleTaskCompletion"],function(){return d.gui.showStats(d.useCase.remainingTasks().length,d.useCase.completedTasks().length)}),After(this.gui,"allTasksClicked",function(){return d.useCase.showAll()}),After(this.gui,"completedTasksClicked",function(){return d.useCase.showCompleted()}),After(this.gui,"remainingTasksClicked",function(){return d.useCase.showActive()}),After(this.useCase,"showActive",function(){return d.gui.showTasks(d.useCase.remainingTasks())}),After(this.useCase,"showCompleted",function(){return d.gui.showTasks(d.useCase.completedTasks())}),LogAll(this.useCase),LogAll(this.gui)}return a}(),WebTodoApp=function(){function a(){var a,b,c,d;d=new CompleteTasksUseCase,window.useCase=d,b=new WebGui,c=new LocalStorage("todo_app"),a=new WebGlue(d,b,c),d.showAll()}return a}(),new WebTodoApp