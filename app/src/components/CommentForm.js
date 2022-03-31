import {useState} from "react"
function CommentForm({comments, setComments}) {
const [postedComment,  setpostedComment] = useState({})
    function handleSubmit(e) {
        e.preventDefault()
        const theComment = {
            "comment": postedComment}

        console.log(theComment)
        const configObj={
            method: "POST",
            headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(theComment)
            }
        
        fetch("http://localhost:3000/Comments",configObj)
        .then(res => res.json())
        .then(() => setComments([...comments, theComment]))

    }
    return <>
    <form onSubmit={handleSubmit}>
        <label>leave a comment </label><br></br>
        <input type="text" id="comment"onChange={e => setpostedComment(e.target.value)}></input><br></br>
        <input type="submit" value="post"></input>
    </form>
    </>
}

export default CommentForm