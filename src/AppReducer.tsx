import { useReducer } from "react"
import './App.css'

interface State {
  count: number;
}

interface Action {
  type: string;
}

export function Reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'INCREMENTO':
            return { count: state.count + 1 };
        case 'DECREMENTO':
            return { count: state.count - 1 };
        default:
            throw new Error('Ação desconhecida ' + action.type);
    }
}



export function AppReducer() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

  function handleClickIncrement() {
    dispatch({ type: 'INCREMENTO' });
  }
  
  function handleClickDecrement() {
    dispatch({ type: 'DECREMENTO' });
  }
  return (
    <>
      <div className="card">
        <p>Count: {state.count}</p>
        <button onClick={handleClickIncrement}>Incremento</button>
        <button onClick={handleClickDecrement}>Decremento</button>
      </div>
    </>
  )
}