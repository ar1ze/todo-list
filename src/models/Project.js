export const PROJECT_COLORS = {
  RED: '#E74C3C',
  ORANGE: '#E67E22',
  YELLOW: '#F1C40F',
  GREEN: '#2ECC71',
  BLUE: '#3498DB',
};

export class Project {
  #todos = [];

  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.id = crypto.randomUUID();
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }

  removeTodo(todoId) {
    this.#todos = this.#todos.filter((todo) => todo.id !== todoId);
  }

  getTodos() {
    return [...this.#todos];
  }
}
