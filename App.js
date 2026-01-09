import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DogsScreen from './screens/DogsScreen';
import CatsScreen from './screens/CatsScreen';
import PetProfileScreen from './screens/PetProfileScreen';
import AboutScreen from './screens/AboutScreen';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [selectedPet, setSelectedPet] = useState(null);
  const [lastScreen, setLastScreen] = useState('home'); // Guarda a última tela

  // Função para abrir perfil salvando a origem
  const abrirPerfil = (dados, origem) => {
    setSelectedPet(dados);
    setLastScreen(origem);
    setScreen('pet');
  };

  if (screen === 'login') return <LoginScreen onLogin={() => setScreen('home')} />;
  
  if (screen === 'home') return (
    <HomeScreen 
      goToDogs={() => setScreen('dogs')} 
      goToCats={() => setScreen('cats')} 
      goToAbout={() => setScreen('about')}
      goToPet={() => abrirPerfil({
        name: 'Buddy',
        breed: 'Golden Retriever',
        age: '2 anos',
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800',
        history: 'O Buddy é o destaque do dia! Foi resgatado num parque e é o cão mais dócil que já conhecemos. Adora crianças e outros animais.'
      }, 'home')}
    />
  );

  if (screen === 'dogs') return <DogsScreen goBack={() => setScreen('home')} goToPet={(pet) => abrirPerfil(pet, 'dogs')} />;
  if (screen === 'cats') return <CatsScreen goBack={() => setScreen('home')} goToPet={(pet) => abrirPerfil(pet, 'cats')} />;
  if (screen === 'pet') return <PetProfileScreen pet={selectedPet} goBack={() => setScreen(lastScreen)} />;
  if (screen === 'about') return <AboutScreen goBack={() => setScreen('home')} />;
}