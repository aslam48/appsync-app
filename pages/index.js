import {useState, useEffect} from 'react'
import { API } from 'aws-amplify'
import { listTodos } from '../src/graphql/queries'

export default function Home() {
  const [todos, setTodos] = useState([])
 
  useEffect(() => {
fetchPosts()
  },[])

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listTodos
    })
    setTodos(postData.data.listTodos.items)
  }

  return (
    <div>
       <h1 className="text-3xl font-bold underline">
      my post 
    </h1>

   
    {todos.map((todo) => (
      <p key={todo.id}>{todo.title}</p>
    ))}
    
    </div>
   
  )
}
