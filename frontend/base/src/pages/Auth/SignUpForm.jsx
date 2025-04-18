import React ,{useState} from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import {useNavigate} from 'react-router-dom'

function SignUpForm() {

  const [profilePic , setProfilePic] = useState(null);
  const [fullName , setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [username , setUsername] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault()
  }


  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage = {setProfilePic}/>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUpForm
