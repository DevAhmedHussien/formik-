
import './styleFolder/App.scss';
import Main from './componenets/main/main';
import { Routes,Route } from 'react-router-dom';
import FormValidate from './componenets/forming/FormValidate';
import NotFound from './componenets/notFound/NotFound';
function App() {
 
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route path='/' element = {<Main/>} />
        <Route path='/formValid' element ={<FormValidate/>} />
        <Route path= '*' element ={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
