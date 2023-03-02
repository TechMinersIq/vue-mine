import request from "../request";

class TodoRepository implements ITodoRepository {
  controllerName: string = "todos";
  async GetAll(): Promise<Todo[]> {
    const res = await request.get(this.controllerName);
    return res.data as Todo[];
  }
  async Get(id: number): Promise<Todo> {
    const res = await request.get(`${this.controllerName}/${id}`);
    return res.data as Todo;
  }
  async SearchByTitle(title: string): Promise<Todo[]> {
    const response = await request.get(`${this.controllerName}`);
    const todos: Todo[] = response.data;
    return todos.filter((todo) => todo.title.includes(title));
  }
}

export default new TodoRepository();
