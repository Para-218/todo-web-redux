import { TodoItem } from './reducer'

const obj1 = <TodoItem>{ date: '6/13/2023', title: "wake at 9 o'clock", completed: false }
const obj2 = <TodoItem>{ date: '6/12/2023', title: 'study for 5 minute', completed: false }
const obj3 = <TodoItem>{ date: '6/11/2023', title: 'play for 5 hours', completed: false }

const FAKE_DATA = [obj1, obj2, obj3]
export default FAKE_DATA
