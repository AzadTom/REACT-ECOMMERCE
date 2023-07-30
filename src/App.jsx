import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast.success("Yes, it is working!")

    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <button onClick={notify} className='px-4 py-2 rounded-[50px] bg-black text-white'>Notify</button>
        <ToastContainer />
      </div>
    );
  }

  export default App