"use client"
import { useBoardState } from '@/store/BoardStore'
import React, { use, useEffect } from 'react'
import { DragDropContext, DraggableLocation, DropResult, Droppable } from 'react-beautiful-dnd'
import Column from './Column'
function Board() {
  const [board, getBoard, setBoardState, updateTodoInDB] = useBoardState((state)=>[
    state.board,
    state.getBoard,
    state.setBoardState,
    state.updateTodoInDB])
  useEffect(()=>{
    getBoard();
  },[getBoard]);

  const handleOnDragEnd = (result: DropResult)=>{
    const {destination, source, type} = result;
    //check if user dragged card outside of board
    if (!destination) return;
    
    //Handle column drag
    if(type === "column"){
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      console.log(destination)
      const rearrangedColumns =  new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns
      });
    };


  //This step is needed as the indexes are stored in numbers 0,1,2,3... instead of ids in DND library

  const columns = Array.from(board.columns);
  const startColIndex = columns[Number(source.droppableId)]
  const finishColIndex = columns[Number(destination.droppableId)]


  const startCol: Column = {
    id: startColIndex[0],
    todos: startColIndex[1].todos,
  };

  const finishCol: Column = {
    id: finishColIndex[0],
    todos: finishColIndex[1].todos,
  };

  if (!startCol || !finishCol) return;

  if(source.index === destination.index && startCol === finishCol)
  return;

  const newTodos = startCol.todos;
  const [todoMoved] = newTodos.splice(source.index, 1);

  if(startCol.id === finishCol.id){
    //same col task drag
    newTodos.splice(destination.index, 0, todoMoved);
    const newCol = {
      id: startCol.id,
      todos: newTodos,
    };

    const newColumns = new Map(board.columns);
    newColumns.set(startCol.id, newCol)
    setBoardState({...board, columns:newColumns})
    
  }else{
    //dragging to different or another col
    const finisheTodos = Array.from(finishCol.todos);
    finisheTodos.splice(destination.index, 0, todoMoved)
    const newColumns = new Map(board.columns);
    const newCol = {
      id: startCol.id,
      todos: newTodos,
    };

    newColumns.set(startCol.id, newCol);
    newColumns.set(finishCol.id, {
      id: finishCol.id,
      todos: finisheTodos,
    });

    //update DB
    updateTodoInDB(todoMoved, finishCol.id)

    setBoardState({...board, columns: newColumns})

  }
}
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='board' direction='horizontal' type='column'>
        {(provided)=> <div
        className='grid grid-cols-1 p-2 md:grid-cols-3 gap-5 max-w7xl mx-auto'
         {...provided.droppableProps} ref = {provided.innerRef}>
          {Array.from(board.columns.entries()).map(([id, column], index) => (
            <Column
            key= {id}
            id= {id}
            todos= {column.todos}
            index = {index}/>
          ))}
          </div>}
      </Droppable>
    </DragDropContext>
  )
}

export default Board