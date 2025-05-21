export const DEFAULT_MCP_SERVERS = {
	"Framelink Figma MCP": {
		command: "npx",
		args: ["-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"],
	},
} as const

export type DefaultMcpServers = typeof DEFAULT_MCP_SERVERS
