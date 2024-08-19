function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]     = React.useState(0);
  const ctx = React.useContext(UserContext); 
  const isEnabled = amount.length > 0; 

  function validate(field, label){
      
    if (field < 0) {
      setStatus('Error: ' + "Negative amount" );
      setTimeout(() => setStatus(''),3000);
      return false;

    } else if (field == 0) {
      setStatus('Error: ' + "Enter amount" );
      setTimeout(() => setStatus(''),3000);
      return false;

    } else if (field > ctx.users[0].balance) {
      setStatus('Error: ' + " Request Denied: This amount would overdraft your account. You may only withdraw an amount less than or equal to your account balance." +ctx.users[0].balance );
      setTimeout(() => setStatus(''),3000);
      return false;

    } else return true;
}

  function handleWithdraw(){
    if (!validate(amount,'amount')) return;
    ctx.users[0].balance -= parseInt(amount);
    setShow(false);
  }    

  function clearForm(){
    setAmount(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>

              <h5>Balance: $
              {JSON.stringify(ctx.users[0].balance)}
              </h5>

              Amount<br/>
              <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
              <button type="submit" disabled={!isEnabled} className="btn btn-light" onClick={handleWithdraw}>Withdraw Funds</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div>You withdrew {amount}</div>
              <br/>
              <button type="submit" className="btn btn-light btn-sm" onClick={clearForm}>Withdraw again</button>
              </>
            )}
    />
  )
}