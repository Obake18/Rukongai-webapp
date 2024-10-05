"use client"; // Adicione esta linha no topo do arquivo

import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Importar seus scripts após o componente ser montado
    const loadScripts = async () => {
      await import('./classes.js');
      await import('./objetos.js');
      await import('./designer.js');
      await import('./controlador.js');
    };

    loadScripts();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pixel+Emulator:wght@300&display=swap" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo - Rukongai</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-8">Bem-vindo à Rukongai.</h1>
        
        <div id="container-casos" className="card-expandido">
          {/* Aqui você pode adicionar conteúdo dinâmico ou estático */}
        </div>
      </main>
    </>
  );
}
