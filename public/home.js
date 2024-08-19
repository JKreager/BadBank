function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Bad Bank"
      title="Welcome to Bad Bank"
      text="save life save money"
      body={(
        <>
          <p className="text-center"><img src="./savemoney.png" className="img-fluid" alt="Bank logo"/></p>
          <p> Photo from <a href="https://google.com/savemoney" target="_blank" rel="noreferrer">google.com</a></p>
        </>
        )}
    />
    
  );  
}

