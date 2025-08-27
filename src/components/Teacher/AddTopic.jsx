import React from 'react'
import { Link } from 'react-router-dom'

const AddTopic = () => {
    return (
        <div>
            <Link to={"/addquestion"}>Add Question</Link>
            <h1>Add a New Topic</h1>
            <input type="text" placeholder='Add Topic Name' />
            <button>Add Topic</button>
        </div>
    )
}

export default AddTopic
