import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

  const handleSignUpSubmit = data => {
    // data.preventDefault();
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data => {
    // data.preventDefault();
    console.log('profile update data', data);

  }

  return (
    <>
      <h1>React + Vite</h1>
      {/* <SimpleForm /> */}
      {/* <StatefullForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReusableForm formTitle={ 'Sign Up' } 
        handleSubmit={handleSignUpSubmit} />
      <br />
      <ReusableForm formTitle={ 'Profile Update' } 
        handleSubmit={handleUpdateProfile} 
        submitBtnText='Update' />
      
    </>  )
}

export default App
