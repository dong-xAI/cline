import axios from "axios"
import * as vscode from "vscode"
import * as fs from "fs/promises"
import * as path from "path"

const DEFAULT_FIGMA_MCP_URL = "http://localhost:7002"

interface GeneratedFile {
    path: string
    content: string
}

interface FigmaMcpResponse {
    files: GeneratedFile[]
}

export async function generateFromFigmaLink(figmaUrl: string, outDir: string): Promise<void> {
    try {
        const response = await axios.post<FigmaMcpResponse>(`${DEFAULT_FIGMA_MCP_URL}/generate`, {
            url: figmaUrl,
        })
        const files = response.data.files
        for (const file of files) {
            const filePath = path.join(outDir, file.path)
            await fs.mkdir(path.dirname(filePath), { recursive: true })
            await fs.writeFile(filePath, file.content)
        }
    } catch (error: any) {
        const message = error?.message ?? String(error)
        vscode.window.showErrorMessage(`Failed to generate code: ${message}`)
    }
}
