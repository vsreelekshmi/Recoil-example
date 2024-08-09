import React from 'react';
import './style.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <h2>Todo list app</h2>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}
