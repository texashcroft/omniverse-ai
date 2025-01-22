"use client"

import { useState, useEffect } from "react"
import { Plus, Pencil, RefreshCw, Trash2, ChevronDown, File, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { syncFiles } from "@/lib/file-sync"

interface KnowledgeItem {
  id: string
  title: string
  type: string
  pageCount?: number
  uploadedAt: string
  url?: string
  children?: KnowledgeItem[]
}

export function KnowledgeBase() {
  const [items, setItems] = useState<KnowledgeItem[]>([
    {
      id: "know...241",
      title: "web",
      type: "folder",
      uploadedAt: "01/15/2025 09:12",
      url: "www.avelos.io",
      pageCount: 1,
    },
  ])
  const [isSyncing, setIsSyncing] = useState(false)
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null)

  useEffect(() => {
    const fetchKnowledgeBase = async () => {
      const initialData: KnowledgeItem[] = [
        {
          id: "1",
          title: "Sales Scripts",
          type: "folder",
          uploadedAt: "01/15/2025 09:12",
          children: [
            { id: "1-1", title: "Cold Calling Script.docx", type: "file", uploadedAt: "01/15/2025 09:12" },
            { id: "1-2", title: "Email Templates.pdf", type: "file", uploadedAt: "01/15/2025 09:12" },
          ],
        },
        {
          id: "2",
          title: "Product Information",
          type: "folder",
          uploadedAt: "01/15/2025 09:12",
          children: [
            { id: "2-1", title: "Feature List.xlsx", type: "file", uploadedAt: "01/15/2025 09:12" },
            { id: "2-2", title: "Pricing Guide.pdf", type: "file", uploadedAt: "01/15/2025 09:12" },
          ],
        },
        { id: "3", title: "Company Overview.pptx", type: "file", uploadedAt: "01/15/2025 09:12" },
      ]
      setItems(initialData)
    }

    fetchKnowledgeBase()
  }, [])

  const handleSync = async () => {
    setIsSyncing(true)
    try {
      const syncedFiles = await syncFiles()
      setItems((prevBase) => [...prevBase, ...syncedFiles])
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-800">
        <Dialog>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <File className="h-5 w-5" />
              <h2 className="font-medium">Knowledge Base</h2>
            </div>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Item</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input placeholder="Enter URL or upload file" />
              <Button>Add Item</Button>
            </div>
          </DialogContent>
        </Dialog>

        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="p-2 space-y-2">
            {items.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-gray-400"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "folder" ? <Folder className="h-4 w-4 mr-2" /> : <File className="h-4 w-4 mr-2" />}
                {item.title}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {selectedItem && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-medium mb-1">{selectedItem.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>ID: {selectedItem.id}</span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Uploaded by: {selectedItem.uploadedAt}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-gray-400" onClick={handleSync} disabled={isSyncing}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${isSyncing ? "animate-spin" : ""}`} />
                  Re-sync
                </Button>
                <Button variant="outline" size="sm" className="text-gray-400">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 text-gray-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {selectedItem.type === "folder" && selectedItem.children && (
              <div className="space-y-2">
                {selectedItem.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-800 bg-gray-900/50"
                  >
                    <div className="flex items-center gap-3">
                      <File className="h-5 w-5 text-orange-400" />
                      <div>
                        <div className="font-medium">{child.title}</div>
                        {child.pageCount && <div className="text-sm text-gray-400">{child.pageCount} Page</div>}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

