import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor de Tareas Kiro corriendo en el puerto ${PORT}`);
});