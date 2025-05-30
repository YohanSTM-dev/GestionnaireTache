import React from 'react';

function FormulaireTache({ nouvelleTache, setNouvelleTache, DateTache, setDateTache, ajouterTache }) {
  return (
    <div>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
        placeholder="Nouvelle tâche"
      />

      <input
        type="date"
        value={DateTache}
        onChange={(e) => setDateTache(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      <button onClick={ajouterTache} style={{ marginLeft: '10px' }}>
        Ajouter
      </button>
    </div>
  );
}

export default FormulaireTache;
