
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [name, setName] = useState('Pesho');

  useEffect(() => {

    setTimeout(() => {
      setName('Gosho')
    }, 3000);

  }, []);

  // const onUsernameChange = (e) => {
  //   console.log(e.currentTarget.value);
  // };

  // const onSubmitClick = (e) => {
  //   e.preventDefault();
  //   console.log(document.querySelector('#username').value);
  // };

  // const onSumbit = (e) => {
  //   e.preventDefault();
    
  //   const formData = new FormData(e.target);

  //   // const data = Object.fromEntries(formData); use when have submit
  //   const username = formData.get('username');

  //   console.log(username);
  //   // THIS all was NOT controlled components 
  // };

  const onUsernameChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            name="username"
            value={name}
            onChange={onUsernameChange}
           />
          </div>

          {
            name === 'Gosho' ? (
              <div>
                <p>You won!</p>
              </div>
            ) : (<div>Try again</div>)
          }

          <div>
            <input type="submit" value="send"/>
          </div>
        </form>
       
      </header>
    </div>
  );
}

export default App;
