import React from 'react';

function TacheTerminee({tache, TacheTerminee}){

    const tacheTerminee = () => {
        const tacheT = tache.filter( t => t.terminee === true);
        return tacheT;
    }
    return (
        <>
            <h2> Tache Terminée </h2>
            {tache.map()}
            <h2> Tache en cours </h2>
        </>
    );
}

export default TacheTerminee;