// src/server.ts
import express from 'express';
import emailRoutes from '@/sections/faleconosco/enviarformulario';

const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rotas
app.use('/api', emailRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
