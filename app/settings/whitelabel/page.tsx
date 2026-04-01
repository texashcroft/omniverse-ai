import { SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function WhiteLabelPage() {
  return (
    <SidebarInset>
      <div className="flex flex-col gap-6 p-6">
        <h1 className="text-3xl font-bold">White Label Settings</h1>
        <p className="text-muted-foreground">Customize the appearance of your Omniverse AI instance</p>

        <Card>
          <CardHeader>
            <CardTitle>Branding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo-upload">Logo</Label>
              <Input id="logo-upload" type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <Input id="primary-color" type="color" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary-color">Secondary Color</Label>
              <Input id="secondary-color" type="color" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Domain</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="custom-domain">Custom Domain</Label>
              <Input id="custom-domain" placeholder="Enter your custom domain" />
            </div>
            <Button>Set Custom Domain</Button>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  )
}

