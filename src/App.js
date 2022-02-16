import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
//biblioteka do generowania random id

import About from "./pages/About";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
