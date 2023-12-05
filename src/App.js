import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';
import RenderForms from './Forms/RenderForms';
import PasswordReset from './Forms/ResetPasswordForm';
import { useState } from 'react';
import { SnackBar } from './useContext/UseContext';
import SimpleSnackbar from './ScreenPopups/SnackBars';
import PublishScreen from './page/PublishScreen';
function App() {
  const [open, setOpen] = useState(false);
  const [message,setMessage]= useState('');
  const [severity,setSeverity]=useState();

  const SnackBarsValues={
    open,setOpen,
    message,setMessage,
    severity,setSeverity
  }
  return (
      <SnackBar.Provider value={SnackBarsValues}>
      <SimpleSnackbar/>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/Register' element={<RenderForms/>}/>
            <Route path='/ResetPassword' element={<PasswordReset/>}/>
            <Route path='/PublishScreen' element={<PublishScreen/>}/>
        </Routes>
    </SnackBar.Provider>
  );
}

export default App;
