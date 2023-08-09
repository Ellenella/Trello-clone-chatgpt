interface Board{
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "Inprogress" | "done"

interface Column{
    id: TypedColumn
    todos: Todo[]
}

interface Todo extends Models.Document {
    $id: string
    $createdAt: string
    title: string
    status: TypedColumn
    image?: Image
}

interface Image{
    bucketId: string;
    fileId: string
}