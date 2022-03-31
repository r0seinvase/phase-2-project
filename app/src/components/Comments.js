import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

function Comments({ comments, setComments }) {
    console.log(comments)
    const commentDisplay = comments.map(e => {
        return <CommentCard comment={e} />
    })
    return <>

        <div>
            <CommentForm comments={comments} setComments={setComments} />
            {commentDisplay}
        </div>
    </>
}

export default Comments