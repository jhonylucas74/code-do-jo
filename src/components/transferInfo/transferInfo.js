import './transferinfo.css'

const TransferInfo = ({bankType, amount, tax}) => {
  const divStyle = {
    background:"#FF5D5D",
    width:`${+tax + 5}%`,
    borderRadius:"10px",
    padding: "2.5px",
    textAlign: "center",
  };

  return(
    <div className="info-box" >
      <h3>{bankType}</h3>
        <div className='info-box__subtitle'>
          <p>Você recebe</p>
          <p>Taxas</p>
        </div>
        <div className='info-box__graphic'>
          <div>USD {amount}</div>
          <div style={divStyle}>{tax}%</div>
        </div>
    </div> 
  )
}

export default TransferInfo