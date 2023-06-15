import { TodoItem } from './reducer'

const obj1 = <TodoItem>{ completed: false, date: new Date(2023, 6, 13), title: "wake at 9 o'clock" }
const obj2 = <TodoItem>{ completed: false, date: new Date(2023, 6, 12), title: 'study for 5 minute' }
const obj3 = <TodoItem>{ completed: false, date: new Date(2023, 6, 11), title: 'play for 5 hours' }

const FAKE_DATA = [obj1, obj2, obj3]
export default FAKE_DATA
