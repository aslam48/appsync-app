import '../styles/globals.css'
import '../configureAmplify'
import Navbar from './component/navbar'
import Profile from './profile'
// import CreatePost from './create-post'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Navbar/>

      <div className='py-8 px-16 bg-slate-100'>
        {/* <Profile/> */}
      <Component {...pageProps} />
      </div>
    </div>

  ) 
}

export default MyApp
