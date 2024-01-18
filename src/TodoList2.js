import React, { useMemo } from 'react'
import { filterTodos } from './Utility2';
import List2 from './List2';

export default function TodoList2({ todos, theme, tab }) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
      );
  return (
    <div className={theme}>
    <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
    <List2 items={visibleTodos} />
  </div>
  )
}
