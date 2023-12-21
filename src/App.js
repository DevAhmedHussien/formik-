import './styleFolder/App.scss';
import Main from './componenets/main/main';
import { Routes,Route } from 'react-router-dom';
import FormValidate from './componenets/forming/FormValidate';
import NotFound from './componenets/notFound/NotFound';
import { MyContext } from './context/ContextStates';
import { useFormik } from "formik";
import { basicSchema } from './scheme';
import { useState } from 'react';
function App() {
  
  const [summbitts,setSumbitss] = useState('good')
  const [showModal, setShowModal] = useState(false);
  const onSubmit = () => {
    const apiFormData = {
        nickName: formik.values.nickName,
        name: formik.values.name,
        familyName: formik.values.familyName,
        pol: formik.values.pol,
        advantages: formik.values.advantages.map((advantage, index) => ({
            [`advantage_${index + 1}`]: advantage
        }))
        };
        // just for control response 
        if (!formik.values.nickName || !formik.values.name ||
            !formik.values.familyName ||!formik.values.pol ||!formik.values.textArea) {
            console.log("Не заполнены обязательные поля!");
            setSumbitss(false)
            setShowModal(true);
        }else{
            console.log("EVERY THING IS OKEEEEEEEEEEEEEY ");
            setSumbitss(true)
            setShowModal(true);
            formik.resetForm()
            // submitFormViaApi(apiFormData)
            // .then(response => {
            //     console.log('Успешный ответ от сервера:', response);
            //     // Здесь можно выполнить дополнительные действия после успешного ответа
            // })
            // .catch(error => {
            //     console.error('Ошибка при отправке формы:', error);
            //     // Здесь можно выполнить дополнительные действия в случае ошибки
            // });
        }
    };
    // sending data by api
    // const submitFormViaApi = (formData) => {
    //     return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // Здесь обычно был бы реальный запрос через fetch или axios
    //         // Например, с использованием fetch:
    //         // fetch('https://example.com/api/submit', {
    //         //   method: 'POST',
    //         //   headers: {
    //         //     'Content-Type': 'application/json'
    //         //   },
    //         //   body: JSON.stringify(formData),
    //         // })
    //         // .then(response => response.json())
    //         // .then(data => resolve(data))
    //         // .catch(error => reject(error));
    //         // Для симуляции успешного ответа:
    //         const fakeApiResponse = { success: true };
    //         resolve(fakeApiResponse);
    //         // Для симуляции ошибки:
    //         // reject(new Error('Failed to submit form'));
    //     }, 1000); // Задержка в 1 секунду (1000 миллисекунд)
    //     });
    // };  
    const formik = useFormik({
      initialValues: { 
      nickName:"",
      name:"",
      familyName:"",
      pol:"",
      advantages:[
      {
        advantage_1:''
      },
      {
        advantage_2:''
      },
      {
        advantage_3:''
      },
    ],
      checkbox:{
        isChecked_1:false,
        isChecked_2:false,
        isChecked_3:false,
      },
      radio:"",
      textArea:""
  },
  validationSchema:basicSchema,
  onSubmit,
  })
  return (
    <MyContext.Provider  
    value={{formik , onSubmit, showModal ,summbitts , setShowModal}}>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/formValid' element ={<FormValidate/>} />
          <Route path= '*' element ={<NotFound/>} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
