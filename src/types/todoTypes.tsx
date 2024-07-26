export interface TodoType {
    id: number;
    content: string;
}

export interface TodoInitialState {
    todos: TodoType[]
}