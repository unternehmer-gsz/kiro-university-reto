import express, { Request, Response } from 'express';
import { validateTask } from './taskValidator';

export const app = express();
app.use(express.json());

interface Task {
  id: number;
  title: string;
  status: 'pending' | 'completed';
}

const tasks: Task[] = [
  { id: 1, title: "Completar Examen Final Kiro", status: "pending" }
];

app.get('/api/tasks', (req: Request, res: Response) => {
  res.json({ success: true, data: tasks });
});

app.post('/api/tasks', (req: Request, res: Response) => {
  const validation = validateTask(req.body);
  if (!validation.valid) {
    return res.status(400).json({ success: false, error: validation.error });
  }

  const newTask: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    status: 'pending'
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
});