
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'




function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    // calculate ratings avg

    let average = feedback.reduce((acc,current)=>{
        return acc + current.rating
    },0) / feedback.length

    // cyfra po przecinku jezeli po przecinku zero, zamien na nic
    average = average.toFixed(1).replace(/[.,]0$/,'')

    console.log(average)
    return (
        <div>
            <div className="feedback-stats">
                <h4>{feedback.length} Reviews</h4>
                <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
            </div>
        </div>
    )
}



export default FeedbackStats
