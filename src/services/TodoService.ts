import request from "@/plugins/request";

const controllerName: string = "todos";

class TodoService {
  async getAll() {
    const res = await request.get(controllerName);
    return res.data as Todo[];
  }

  async get(id: string) {
    const res = await request.get(`${controllerName}/${id}`);
    return res.data as Todo;
  }

  async findByTitle(title: string) {
    const response = await request.get(`${controllerName}`);
    const todos: Todo[] = response.data;
    return todos.filter((todo) => todo.title.includes(title));
  }
}

export default new TodoService();
