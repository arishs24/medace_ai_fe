import './index.css'
import { BackgroundBeams } from './ui/background-beams'
import EmailForm from './ui/EmailForm'; // Adjust the path as necessary

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="logo.png"
          alt="medace-logo"
          width={100}
          height={100}
        />
        <h1 className="display-5 fw-bold"> Zero Anxiety, Full Confidence: Show Up Ready and Ace your Med School Interview!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Imagine this, you’re sitting down, having a real face-to-face conversation with an AI interviewer, tailored to mimic the exact style and questions of the med school you’re aiming for. You’ll get feedback and a score, helping you improve with every session. 
            Make this a reality with MedAce: Your AI-Powered Path to Acceptance!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <EmailForm />
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}

export default App
