// KellyInvestigates.com 网站初始结构
// Tailwind + React + ShadCN 组件规范化搭建

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Kelly Investigates</h1>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          A cross-border investigative journalism initiative exposing legal corruption, asset seizures, and judicial retaliation targeting foreign nationals in China.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">📰 Latest Investigations</h2>
            <p className="text-muted-foreground mb-4">Coming soon: cross-border corruption, foreign asset seizures, and legal retaliation timelines.</p>
            <Button disabled>Browse Reports (Coming Soon)</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🎙️ About Kelly</h2>
            <p className="text-muted-foreground mb-4">
              Kelly Shofner is a USPA-accredited journalist, U.S. citizen, and founder of Kelly Investigates. With experience reporting across Asia, she documents state corruption and judicial coercion.
            </p>
            <Button disabled>Read Bio (Coming Soon)</Button>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white shadow-lg p-8 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">📬 Contact / 联系方式</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2"><Mail className="w-5 h-5" /><span>press@kellyinvestigates.com</span></div>
          <div className="flex items-center gap-2"><Phone className="w-5 h-5" /><span>+86 159 1091 7479</span> <span className="text-sm text-muted-foreground">(For verification only)</span></div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /><span>U.S. Consulate General in Shenyang – case fully documented and filed diplomatically</span></div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Secure Message</h3>
          <p className="text-sm text-muted-foreground mb-4">You may leave a message below. This inbox is monitored and archived.</p>
          <form className="space-y-4">
            <Input placeholder="Your email (optional)" />
            <Textarea placeholder="Your message or lead…" rows={4} />
            <Button type="submit" disabled>Submit (Disabled in preview)</Button>
          </form>
        </div>
      </section>
    </main>
  )
}
