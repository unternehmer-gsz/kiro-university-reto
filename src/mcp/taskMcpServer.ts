// Servidor MCP para conectar Kiro a la fuente de datos externa
export interface MCPToolRequest {
  name: string;
  arguments: Record<string, any>;
}

export const taskMcpTools = {
  list_tools: () => [
    {
      name: "query_tasks",
      description: "Consulta la base de datos externa de tareas",
      inputSchema: {
        type: "object",
        properties: {
          status: { type: "string", enum: ["pending", "completed"] },
        },
      },
    },
  ],
  handle_call: async (request: MCPToolRequest) => {
    if (request.name === "query_tasks") {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify([
              {
                id: 1,
                title: "Configurar Servidor MCP",
                status: request.arguments.status || "pending",
              },
            ]),
          },
        ],
      };
    }
    throw new Error(`Tool not found: ${request.name}`);
  },
};
