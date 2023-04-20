import {useState, useRef, React} from 'react'
import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import {v4 as uuid} from 'uuid'
import { createTodo } from '../src/graphql/mutations'
import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";

// const initialState = {title: "", content: ""}
function CreatePost() {
// const [post, setPost] = useState(initialState)
// const {title, content} = post 
// // const router = useRouter()
  
// function onChange(e){
//     setPost(() => ({
//         ...post, [e.target.name]: e.target.value
//     }))
// }

// async function createNewPost() {
//     if(!title || !content) return;
//     const id = uuid();
//     post.id = id

//     await API.graphql({
//         query: createTodo,
//         variables: {input: post},
//         authMode: "AMAZON_COGNITO_USER_POOLS",
//     })
//     // router.push(`/post/${id}`)
// }

return (
    <div>
        <h1 className='text-3xl font-semibold tracking-wide mt-6 '>Create new post</h1>

        <input onChange={onChange} 
        namme="title"
        placeholder='title'
        value={post.title}
        className='border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2'
        />

        <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({...post, content: value})}
        />

        <button type="button" className='mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg' onClick={createNewPost}>
            Create Post
        </button>
    </div>
)

}





export default CreatePost