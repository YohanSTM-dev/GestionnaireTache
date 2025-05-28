import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  // 1️⃣ Liste de tâches (données simulées pour commencer)
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [idModifier, setIdModifier] = useState(null);
  const [DateTache, setDateTache] = useState('');

  const ajouterTache = () => {
    if(nouvelleTache.trim() === '') return;
    const new_tache = { 
      id: crypto.randomUUID(), // Génère un ID unique
      text: nouvelleTache.trim(), // Enlève les espaces inutiles 
      date: DateTache
    }
    setTaches([...taches,new_tache]);
    setNouvelleTache('');
    setDateTache('');
  }

  const supprimerTache = (id) => {
    const nouvelleTache = taches.filter (tache=> tache.id !== id);
    setTaches(nouvelleTache);


  }

  const modifierTache = (idTache) => {
    setIdModifier(idTache);
    const tache = taches.find(t => t.id === idTache);
    setNouvelleTache(tache.text);
    setDateTache(tache.date );
    
  }

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

  
  return (

    <div style={{ padding: '20px' }}> 
      <h1> Gestionnaire de Tâches </h1>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
        placeholder="Nouvelle tâche"
      />

      <input 
        type='Date'
        value={DateTache}
        onChange={(e) => setDateTache(e.target.value)} 
        style = {{marginLeft: '10px'}}/>
       


      <button onClick={ajouterTache} style ={{marginLeft : '10px'}}> 
        Ajouter 
      </button>
    <ul>

  {[...taches].sort((a, b) => new Date(a.date) - new Date(b.date)).map((tache) => (
    <li key={tache.id}> 
    
      {idModifier === tache.id ? (
        <>
          <input
            type="text"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />


          <button onClick={() => {
              const nouvellesTaches = taches.map((t) =>
                t.id === tache.id ? { ...t, text: nouvelleTache , date: DateTache } : t);
              setTaches(nouvellesTaches);
              setIdModifier(null);
              setNouvelleTache('');
            }}
            style={{ marginLeft: '10px' }}>
            Enregistrer
          </button>
        </>
      ) : (
        <>
          {tache.text}
          <span style={{marginLeft:'10px'}}>
          {tache.date ? formatDate(tache.date) : "pas de Date"}
          </span>

          <button onClick={() => supprimerTache(tache.id)} style={{ marginLeft: '10px' }}>
            Supprimer
          </button>
          <button onClick={() => modifierTache(tache.id)} style={{ marginLeft: '10px' }}>
            Modifier
          </button>
        </>
      )}
    </li>
  ))}
</ul>

    </div>
    
  );
}

export default App;
