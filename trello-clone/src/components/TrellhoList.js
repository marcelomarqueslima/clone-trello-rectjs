import React from 'react';
import TrellhoCard from './TrelloCard';


const TrellhoList = ({title})=>{
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            <TrellhoCard/>
        </div>        
    )
};

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderradius: 3,
        width:300,
        padding: 8  
    }
}

export default TrellhoList;