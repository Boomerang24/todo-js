import './styles.css';
import { crearTodoHtml } from './js/componentes';
// Siempre busca un archivo JS

// Since we used "index.js" on CLASSES folder,
//  "from" is looking for index.js by default (no need to place)
// './classes/index.js'
import { Todo, ToDoList } from './classes';

export const todoList = new ToDoList();


todoList.todos.forEach(crearTodoHtml);
// todoList.todos.forEach(todo => crearTodoHtml(todo));
//          Cuando el argumento a mandar es el mismo que se va a recbir "todo"
//          Se quitan el argumento mandado y recibido

const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos', todoList.todos);