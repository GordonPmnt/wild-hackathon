import React from 'react'

const Message = ({value}) => {
    const styles = {
        message: {
            width: "460px",
            height: "140px",
            border: "2px solid #e91e63",
            borderRadius: "5px",
        }
    }
    
    return(
        <div>  
            <p style={styles.message}> {value} </p>
        </div>
    );
}

export default Message