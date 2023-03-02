interface ITodoRepository extends IRepository {
  GetAll(): Promise<Todo[]>;
  Get(id: number): Promise<Todo>;
  SearchByTitle(title: string): Promise<Todo[]>;
}
