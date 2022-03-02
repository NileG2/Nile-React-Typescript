import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: 30,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 8,
        margin:5
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: "#ffd000",
        borderRadius:8,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default ProgressBar;