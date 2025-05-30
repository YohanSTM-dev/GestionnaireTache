import './App.css';
import React from 'react';
import {useState} from 'react';
import FormulaireTache from './composants/FormulaireTache';
import TacheItem from './composants/TacheItem';
import { useEffect } from 'react';
import tacheTerminee from './composants/TacheTerminee';

function App() {

  const [taches, setTaches] = useState(() => {
    const tachesSauvegardees = localStorage.getItem("mesTaches");
    return tachesSauvegardees ? JSON.parse(tachesSauvegardees) : [];
  });
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [idModifier, setIdModifier] = useState(null);
  const [DateTache, setDateTache] = useState('');

  const ajouterTache = () => {
    if(nouvelleTache.trim() === '') return;
    const new_tache = { 
      id: crypto.randomUUID(), // Génère un ID unique
      text: nouvelleTache.trim(), // Enlève les espaces inutiles 
      date: DateTache,
      terminee : false 
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

  const EnregistrerModif = (id) => {
    const nouvellesTaches = taches.map(t => t.id === id ? { ...t, text: nouvelleTache, date: DateTache } : t );
    setTaches(nouvellesTaches);
    setIdModifier(null);
    setNouvelleTache('');
    setDateTache('');
  };

  const tacheTerminee = (id) => {
    const nouvellesTaches = taches.map( t => t.id === id ? { ...t, terminee: !t.terminee} : t );
    setTaches(nouvellesTaches);
  }

  useEffect(() => {
  localStorage.setItem("mesTaches", JSON.stringify(taches));
  }, [taches]);
  
  return (

    <div style={{ padding: '20px' }}> 
      <h1> Gestionnaire de Tâches </h1>
      <FormulaireTache
      nouvelleTache={nouvelleTache}
      setNouvelleTache={setNouvelleTache}
      DateTache={DateTache}
      setDateTache={setDateTache}
      ajouterTache={ajouterTache}
      />

      <ul>

        {[...taches].sort((a, b) => new Date(a.date) - new Date(b.date)).map((tache) => (
          <TacheItem 
          key={tache.id}
          tache={tache}
          onSupprimer={supprimerTache}
          onModifier={modifierTache}
          idModifier={idModifier}
          setNouvelleTache={setNouvelleTache}
          setDateTache={setDateTache}
          setIdModifier={setIdModifier}
          enregistrerModification= {EnregistrerModif}
          tacheTerminee={tacheTerminee}
           />

        ))}
      </ul>

    </div>
    
  );
}

export default App;
