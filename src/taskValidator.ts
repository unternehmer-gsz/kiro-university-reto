export interface TaskInput {
  title: string;
  priority?: "low" | "medium" | "high";
}

export function validateTask(input: TaskInput): {
  valid: boolean;
  error?: string;
} {
  if (!input.title || input.title.trim().length === 0) {
    return { valid: false, error: "Title is required and cannot be empty" };
  }
  if (input.title.length > 100) {
    return { valid: false, error: "Title cannot exceed 100 characters" };
  }
  return { valid: true };
}
