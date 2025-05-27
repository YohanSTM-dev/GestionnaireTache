import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  // 1️⃣ Liste de tâches (données simulées pour commencer)
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = () => {
    if(nouvelleTache.trim() === '') return;
    const new_tache = { 
      id: crypto.randomUUID(), // Génère un ID unique
      text: nouvelleTache.trim() // Enlève les espaces inutiles 
    }
    setTaches([...taches,new_tache]);
    setNouvelleTache('');
  }

  const supprimerTache = (id) => {
    const nouvelleTache = taches.filter (tache=> tache.id !== id);
    setTaches(nouvelleTache);

  }

  
  return (
    <div style={{ padding: '20px' }}> 
      <h1> Gestionnaire de Tâches </h1>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
        placeholder="Nouvelle tâche"
      />

      <button onClick={ajouterTache} style ={{marginLeft : '10px'}}> 
        Ajouter 
      </button>

      
      <ul>
        {taches.map((tache) => (
          <li key = {tache.id}> 
          {tache.text}
          <button onClick = {() => supprimerTache(tache.id)} style={{marginLeft : '10px'}}>
          Supprimer
          </button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
