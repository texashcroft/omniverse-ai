"use client"

import { useState } from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, AlertTriangle } from "lucide-react"
import { ActivepiecesCanvas } from "@/components/activepieces-canvas"

export default function WorkflowPage() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOpenCanvas = () => {
    if (!process.env.NEXT_PUBLIC_ACTIVEPIECES_URL) {
      setError("Activepieces URL is not configured. Please check your environment variables.")
      return
    }
    setIsCanvasOpen(true)
  }

  return (
    <SidebarInset>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Workflow Automations</h1>
          <Button onClick={handleOpenCanvas}>
            <Plus className="mr-2 h-4 w-4" /> Create Workflow
          </Button>
        </div>
        <p className="text-muted-foreground">Create and manage your AI outreach automations</p>

        {error && (
          <Card className="bg-red-100 border-red-300">
            <CardContent className="flex items-center p-4">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn Lead Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Automatically connect with and message potential leads on LinkedIn.</p>
              <Button variant="outline" className="mt-4" onClick={handleOpenCanvas}>
                Edit Workflow
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Email Drip Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Send a series of targeted emails to nurture leads over time.</p>
              <Button variant="outline" className="mt-4" onClick={handleOpenCanvas}>
                Edit Workflow
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Multi-Channel Follow-up</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Coordinate follow-ups across email, SMS, and LinkedIn.</p>
              <Button variant="outline" className="mt-4" onClick={handleOpenCanvas}>
                Edit Workflow
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <ActivepiecesCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
    </SidebarInset>
  )
}

