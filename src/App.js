import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value)
  const temp = useSelector((state) => state.counter.temp)
  const dispatch = useDispatch()

  return (
    <>
      <input type="text" value={temp} onChange={(e) => { dispatch(incrementByAmount(e.target.value)) }} />
      <div>{count}</div>
      <button onClick={() => { dispatch(increment()) }}> Increment value </button>
      <button onClick={() => { dispatch(decrement()) }}> Decrement value </button>
    </>
  )
}

export default App;