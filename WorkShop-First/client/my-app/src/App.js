import { Fragment, useEffect, useState  } from "react";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import './App.css';
import UserList from "./components/UserList";
import AddButton from "./components/AddButton";
import * as userService from './services/userService'


function App() {

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
  });
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
  });

  // useEffect(() => {
  //    async function getUsers () {
  //   const users = await userService.getAll();
  // }
  // }, [])

  useEffect (() => {
    userService.getAll()
    .then(users => {
      setUsers(users)
    })
    .catch(err => {
      console.log('Error ' + err)
    })
  }, []);

  const formChangeHandler = (e) => {
    setFormValues(state => ({...state, [e.target.name]: e.target.value}))
  };


  const onUserCreateSubmit = async (e) => {
    e.preventDefault(); //1st Step - stop automatic form submit

    const formData = new FormData(e.currentTarget);
    // 2nd Step - take form data from DOM tree

    // formData.get('firstName');
    const data = Object.fromEntries(formData);
    const createdUser = await userService.create(data);
    //3rd Step - if successfull add new user to the state

    setUsers(state => state = [...state,createdUser]);
      //new array with the old state + the new user

    //final step close dialog
  };



  const onUserDelete = async (userId) => {
    //delete from server
    await userService.deleteIt(userId);
    //delete from state
    setUsers(state => state.filter(x => x._id !== userId));

  };

  // const onUserUpdate = async (userId) => {
  //   console.log('dada')
  //  const response =  await userService.editUser(userId);

  //  setUsers(state => {
  //   state = state.filter(x => x._id !== userId);
  //   state = [...state,response]
  //   return state;
  // }s
  // )};

  const onUserUpdate = async (e, userId) => {
    e.preventDefault(); 

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);
    const createdUser = await userService.editUser(userId, data);
    
    setUsers(state => state.map(x => x._id === userId ? createdUser : x))

  };

  const validateForm = (e) => {
    const value = e.target.value;
    const errors = {};

    if(e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
      errors.firstName = 'First name should be correct'
    }

    if(e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
      errors.lastName = 'Last name should be correct'
    }

    setFormErrors(errors);
   
  };


  return (
    <Fragment>
      
       <Header />
       <main className="main">
       <section className="card users-container">
        <Search />
        
        <UserList users = {users} onUserDelete={onUserDelete}
        onUserUpdate={onUserUpdate}/>

        <AddButton validateForm={validateForm}
        formErrors={formErrors}
        formValues={formValues}
         onUserCreateSubmit={onUserCreateSubmit}
         formChangeHandler={formChangeHandler}
         />
        
        </section>

       </main>

       <Footer />

    </Fragment>
  );
}

export default App;
