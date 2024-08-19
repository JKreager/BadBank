function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext); 
  const isEnabled = email.length > 0 || password.length > 0 || name.length > 0; 

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;  

      } else if (password.length < 8){

        setStatus('Error: ' + "Password 8 characters");
        setTimeout(() => setStatus(''),3000);
        return false;  
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url, { method: 'post'});
      var data = await res.json();
    })();
    setShow(false);
  }    

  function clearForm(){
    
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

     return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              
              Name<br/>
              <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} 
              minlength ="2" required onChange={e => setName(e.currentTarget.value)}/><br/> 
             
              Email address<br/>
              <input type="email" className="form-control" id="email" placeholder="Enter email address" value={email} 
              pattern=".+@gmail\.com" size="30" required onChange={e => setEmail(e.currentTarget.value)}/><br/> 
              
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter a password" value={password} 
              minlength ="8" required onChange={e => setPassword(e.currentTarget.value)}/><br/> 
                            
              <button type="submit" disabled={!isEnabled} aria-disabled="true" className="btn btn-light" 
              onClick={handleCreate}>Create Account</button>

              </>
            ):(
              <>
                            
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading"></h4>
                <p>Success! Your account has been created!</p>
                
                
            </div>

              </>
            )}
    />
  )
}