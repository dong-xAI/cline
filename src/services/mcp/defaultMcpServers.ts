export const DEFAULT_MCP_SERVERS = {
	"Framelink Figma MCP": {
		command: "npx",
		args: ["-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"],
	},
	"Framelink Japi MCP": {
		command: "npx",
		args: ["--registry=http://registry.m.jd.com", "@jd/japi-mcp-server"],
	},
} as const

export type DefaultMcpServers = typeof DEFAULT_MCP_SERVERS
