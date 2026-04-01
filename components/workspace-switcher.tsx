"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/navigation"

interface Workspace {
  id: string
  name: string
}

export function WorkspaceSwitcher() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>([
    {
      id: "default",
      name: "Default Workspace",
    },
  ])

  const [selectedWorkspace, setSelectedWorkspace] = React.useState<Workspace>(workspaces[0])

  const addNewWorkspace = React.useCallback(() => {
    const newWorkspace = {
      id: `workspace-${workspaces.length + 1}`,
      name: `New Workspace ${workspaces.length + 1}`,
    }
    setWorkspaces([...workspaces, newWorkspace])
    setSelectedWorkspace(newWorkspace)
    setOpen(false)
    // In a real app, this would create a new workspace in the backend
    router.refresh()
  }, [workspaces, router])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a workspace"
          className="w-full justify-between"
        >
          <span className="truncate">{selectedWorkspace.name}</span>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search workspace..." />
            <CommandEmpty>No workspace found.</CommandEmpty>
            <CommandGroup heading="Workspaces">
              {workspaces.map((workspace) => (
                <CommandItem
                  key={workspace.id}
                  onSelect={() => {
                    setSelectedWorkspace(workspace)
                    setOpen(false)
                  }}
                  className="text-sm"
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", selectedWorkspace.id === workspace.id ? "opacity-100" : "opacity-0")}
                  />
                  {workspace.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={addNewWorkspace} className="cursor-pointer text-sm">
                <Plus className="mr-2 h-4 w-4" />
                Add New Workspace
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

