import { Plus } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <header className="space-y-2 text-center">
        <p className="text-sm font-medium text-muted-foreground">Admin UI</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Shared shadcn/ui kit
        </h1>
        <p className="text-sm text-muted-foreground">
          Web-admin now consumes components and styles from `@workspace/ui`.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="icon" aria-label="Add item">
          <Plus className="size-4" />
        </Button>
      </div>
    </main>
  )
}

export default App
