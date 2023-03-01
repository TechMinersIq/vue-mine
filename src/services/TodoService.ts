import axios from "@/plugins/axios";

class TodoService {
  async getAll() {
    const res = await axios.get("todos");
    return res.data as Todo[];
  }

  async get(id: string) {
    const res = await axios.get(`todos/${id}`);
    return res.data as Todo;
  }

  async findByTitle(title: string) {
    const response = await axios.get("todos");
    const todos: Todo[] = response.data;
    return todos.filter((todo) => todo.title.includes(title));
  }
}

export default new TodoService();
