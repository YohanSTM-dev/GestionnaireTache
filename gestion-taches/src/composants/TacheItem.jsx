import React from 'react';

function TacheItem({ tache, onSupprimer, onModifier, idModifier, setNouvelleTache, setDateTache, setIdModifier, enregistrerModification, tacheTerminee }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'pas de date';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <li>
      {idModifier === tache.id ? (
        <>
          <input
            type="text"
            value={tache.text}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
          <input
            type="date"
            value={tache.date || ''}
            onChange={(e) => setDateTache(e.target.value)}
          />
          <button onClick={() => {
            enregistrerModification(tache.id);
            setNouvelleTache('');
            setDateTache('');
            setIdModifier(null);
          }}>
            Enregistrer
          </button>
        </>
      ) : (
        <>
          <div> 
          <span style={{ textDecoration: tache.terminee ? 'line-through' : 'none'}}>{tache.text} - {formatDate(tache.date)}</span>
          <button onClick={() => onSupprimer(tache.id)}>Supprimer</button>
          <button onClick={() => onModifier(tache.id)}>Modifier</button>
          <button onClick={() => tacheTerminee(tache.id)}> Terminee </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TacheItem; 
