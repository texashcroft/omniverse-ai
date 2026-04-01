"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ActivepiecesCanvasProps {
  isOpen: boolean
  onClose: () => void
}

export function ActivepiecesCanvas({ isOpen, onClose }: ActivepiecesCanvasProps) {
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (isOpen) {
      // Reset error state when opening
      setError(null)
    }
  }, [isOpen])

  if (!isOpen) return null

  const activepiecesUrl = process.env.NEXT_PUBLIC_ACTIVEPIECES_URL || "http://localhost:8080"

  const handleIframeError = () => {
    console.error("Failed to load Activepieces canvas")
    setError("Failed to load Activepieces canvas. Please check your configuration and try again.")
  }

  return (
    <Card className="fixed inset-0 z-50 bg-background flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Activepieces Workflow Canvas</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-grow relative">
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <iframe
            src={`${activepiecesUrl}/flows`}
            className="w-full h-full border-none"
            title="Activepieces Canvas"
            onError={handleIframeError}
          />
        )}
      </div>
    </Card>
  )
}

