import React, { useState } from 'react'
import TodoList2 from './TodoList2';
import { createTodos } from './Utility2';

export default function TODOEXp2() {

    const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const todos = createTodos();

  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList2
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}