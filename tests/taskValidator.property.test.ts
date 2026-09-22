import * as fc from "fast-check";
import { validateTask } from "../src/taskValidator";

describe("Property-Based Tests: Task Validator", () => {
  it("Propiedad 1: Cualquier título de 1 a 100 caracteres no vacíos siempre debe ser válido", () => {
    fc.assert(
      fc.property(
        fc
          .string({ minLength: 1, maxLength: 100 })
          .filter((s) => s.trim().length > 0),
        (title) => {
          const result = validateTask({ title });
          return result.valid === true;
        },
      ),
    );
  });

  it("Propiedad 2: Cualquier título con longitud superior a 100 caracteres siempre debe fallar la validación", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 101, maxLength: 500 }), (title) => {
        const result = validateTask({ title });
        return (
          result.valid === false &&
          result.error === "Title cannot exceed 100 characters"
        );
      }),
    );
  });
});
