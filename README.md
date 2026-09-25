# Kiro University Challenge - Final Exam Submission 🎓

**Proyecto:** Task Manager API  
**Fecha de Inicio (Primer Commit):** 21 de Septiembre de 2026  
**Fecha de Entrega:** 25 de Septiembre de 2026

---

## 📋 Mapeo de Lecciones Demostradas

| Lección            | Requisito Demostrado                 | Ubicación en el Código                        |
| ------------------ | ------------------------------------ | --------------------------------------------- |
| **Lección 1**      | Especificaciones EARS                | `docs/feature_spec.md`                        |
| **Lección 2**      | Documentos de Dirección (Steering)   | `.kiro/steering/backend-guidelines.md`        |
| **Lección 3**      | Ganchos (PostFileSave Hook)          | `.kiro/hooks/lint-on-save.json`               |
| **Lección 4**      | Pruebas Basadas en Propiedades (PBT) | `tests/taskValidator.property.test.ts`        |
| **Lección 5**      | Kiro Powers                          | `.kiro/powers/task-manager-power/`            |
| **Lección 6**      | Servidor e Integración MCP           | `.kiro/mcp.json` & `src/mcp/taskMcpServer.ts` |
| **Lección 7**      | Agentes Personalizados               | `.kiro/agents/task-expert.json`               |
| **Bonificación 1** | Configuración Kiro Cloud Sessions    | `.kiro/cloud-config.json`                     |
| **Bonificación 2** | Paquete Distribución Kiro Power      | `powers/kiro-task-master/`                    |

---

## 🚀 Cómo Ejecutar la Aplicación

```bash
# Instalar dependencias
npm install

# Ejecutar tests de propiedades
npm test

# Iniciar servidor
npm run build && npm start
```
