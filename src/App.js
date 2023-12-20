
import './styleFolder/App.scss';
import Main from './componenets/main/main';
import { Routes,Route } from 'react-router-dom';
import FormValidate from './componenets/forming/FormValidate';
import NotFound from './componenets/notFound/NotFound';
import ContextStatesProvider from './context/ContextStates'
import { useProvFormik } from './context/ContextStates';

function App() {
  const {hamada} = useProvFormik()
  console.log('hamada',hamada)
  return (

    <ContextStatesProvider>
      <div className="App">
        {/* <Main/> */}
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/formValid' element ={<FormValidate/>} />
          <Route path= '*' element ={<NotFound/>} />
        </Routes>
      
      </div>
    </ContextStatesProvider>
  );
}

export default App;
