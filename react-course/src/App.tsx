import Todo from './components/Todo';
import { useRef, useState } from 'react';

interface InputItem {
	id: number;
	title: string;
}

function App() {
	const [todoList, setTodoList] = useState([]);
	const nextID = useRef<number>(1);
	// const [inputItems, setInputItems] = useState<InputItem[]>([{ id: 0, title: '' }]);
	const [inputItems, setInputItems] = useState<string[]>([]);

	const addTodos = () => {
		setInputItems([...inputItems, nextID.toString()]); // 기존 값에 새로운 인풋객체를 추가해준다.
		nextID.current += 1; // id값은 1씩 늘려준다.
	};

	return (
		<>
			<div>
				<h1>My Todos</h1>
				<Todo text="Learn React" />
				<Todo text="Master React" />
				<Todo text="Explore the full React course" />
			</div>

			{/*{inputItems.map((item, index) => (
				<Todo text="New todo" />
			))}
			<button onClick={addTodos}>+</button>*/}
		</>
	);
}

export default App;
