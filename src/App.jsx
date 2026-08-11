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
        handleSubmit={handleSignUpSubmit}> 
        <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <br />
      <ReusableForm formTitle={ 'Profile Update' } 
        handleSubmit={handleUpdateProfile} 
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
      </ReusableForm>
      
    </>  )
}

export default App
