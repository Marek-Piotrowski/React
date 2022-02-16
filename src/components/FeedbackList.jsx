import FeedbackItem from "./FeedbackItem"
//zewnetrzna biblioteka do animacji
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No Feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map(ele=>
            <motion.div key={ele.id} initial={{opacity:0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}>
            <FeedbackItem
            key={ele.id}
            ele={ele}
            />
            </motion.div>
            )}
            </AnimatePresence>
        </div>
    )

    /* Without Animation Version
    return (
        <div className='feedback-list'>
            {feedback.map(ele=><FeedbackItem
            key={ele.id}
            ele={ele}
            handleDelete={handleDelete}/>)}
        </div>
    )*/
}


export default FeedbackList
