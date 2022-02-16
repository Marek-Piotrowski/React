import PropTypes from 'prop-types'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

import Card from "./shared/Card"


function FeedbackItem({ele}) {
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

    return (
        <Card >
            <div className='feedback-info'>
                <div className="num-display">
                    {ele.rating}
                    </div>
                <div className="text-display">
                    {ele.text}
                </div>
            </div>


            <div className='feedback-btns'>
                <button onClick={()=>deleteFeedback(ele.id)} className="close">
                    <FaTimes color='purple'/>
                </button>
                <button onClick={()=>editFeedback(ele)} className="edit">
                    <FaEdit color='purple'/>
                </button>
            </div>



        </Card>
    )
}

FeedbackItem.propTypes = {
    ele: PropTypes.object.isRequired
}

export default FeedbackItem
