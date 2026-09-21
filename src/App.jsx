import { ToastContainer } from "react-toastify"
import { RegistrationForm } from "./RegistrationForm/RegistrationForm"

function App() {

  return (
    <div>
      <RegistrationForm />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
