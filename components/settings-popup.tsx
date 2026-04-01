"use client"

import * as React from "react"
import { LogOut, CreditCard, SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggleGroup } from "@/components/theme-toggle-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsPopup() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start px-2">
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start" alignOffset={-40}>
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-sm text-muted-foreground px-2">chavezshrey@gmail.com</p>
          <div className="flex items-center gap-4 px-2">
            <Avatar className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500">
              <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-22%20at%209.15.15%E2%80%AFAM-E4p2cxwNKBnIHTPrUHEw7kJUnyIJ8S.png" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">texashcroft</p>
              <p className="text-xs text-muted-foreground">Free</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Switch Team
          </Button>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <a href="/settings/billing" className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/settings" className="cursor-pointer">
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="p-2">
          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
          <div className="space-y-4 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Theme</span>
              <ThemeToggleGroup />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Language</span>
              <Select defaultValue="en">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          <Button className="w-full">Upgrade Plan</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

