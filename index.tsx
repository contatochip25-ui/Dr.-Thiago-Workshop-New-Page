
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Iniciando renderização da aplicação...");

const container = document.getElementById('root');

if (!container) {
  console.error("Erro fatal: Elemento #root não encontrado no DOM.");
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("React montado com sucesso.");
}
