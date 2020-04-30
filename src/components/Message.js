import React from 'react'

const Message = () => {
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
            <p style={styles.message}></p>
        </div>
    );
}

export default Message