'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

export default function PlanningForm() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the prompt and file to your backend
    // For now, we'll just set a dummy output
    setOutput(`Processed prompt: "${prompt}" ${file ? `with file: ${file.name}` : ''}`)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Plan with AI</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex items-center space-x-2">
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="flex-grow"
            />
            <Button type="submit" className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send</span>
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-2">Output:</h3>
          <div className="bg-muted p-4 rounded-md">
            {output || 'Your plan will appear here...'}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

