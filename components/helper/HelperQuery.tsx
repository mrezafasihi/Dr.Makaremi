import axios from "axios"

export const Login=async(userPass:any)=>{
    const data=await axios.post("https://jsonplaceholder.typicode.com/posts",{userPass}).then((res)=>{return res.data}) 
}