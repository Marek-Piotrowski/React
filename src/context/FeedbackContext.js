import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This 1 note is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This 2 note is from context",
      rating: 7,
    },
    {
      id: 3,
      text: "This 3 note is from context",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add feddback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // nowy feedback, obecne feedbacki(obecny stan)
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
