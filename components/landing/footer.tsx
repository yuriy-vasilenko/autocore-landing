"use client"

import { Send, Mail } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Примеры", href: "#examples" },
  { label: "Процесс", href: "#process" },
  { label: "Результат", href: "#result" },
]

export function Footer() {
  const handleSectionClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return
    event.preventDefault()

    const id = href.slice(1)
    const section = document.getElementById(id)
    if (!section) return

    const headerOffset = 88
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: Math.max(0, top), behavior: "auto" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <footer className="premium-tone-footer border-t border-[#d4af3726] py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          <div>
            <a href="#top" onClick={handleSectionClick("#top")} className="inline-flex items-center gap-2.5 group">
              <Image
                src="/brand-logo.png"
                alt="Автоматизация в дело"
                width={156}
                height={44}
                className="h-8 w-auto"
              />
              <span className="text-[0.82rem] font-semibold tracking-[0.08em] uppercase text-[#F5F1E8D9] transition-opacity duration-300 group-hover:opacity-90">
                Автоматизация в дело
              </span>
            </a>
            <p className="mt-2.5 max-w-xs text-[14px] leading-[1.55] tracking-[-0.006em] text-[#F5F1E8B8]">
              Автоматизация бизнес-процессов под реальные задачи компании.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#d4af37b8]">
              Навигация
            </h4>
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleSectionClick(link.href)}
                  className="text-[14px] leading-[1.4] tracking-[-0.006em] text-[#F5F1E8C2] transition-colors duration-300 hover:text-[#F5F1E8]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#d4af37b8]">
              Контакты
            </h4>
            <div className="space-y-1.5">
              <a
                href="https://t.me/VYA555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] leading-[1.4] tracking-[-0.006em] text-[#F5F1E8C2] transition-colors duration-300 hover:text-[#F5F1E8]"
              >
                <Send className="h-3 w-3 text-[#d4af37bf]" />
                <span>@VYA555</span>
              </a>
              <a
                href="mailto:gorcovd@gmail.com"
                className="flex items-center gap-2 text-[14px] leading-[1.4] tracking-[-0.006em] text-[#F5F1E8C2] transition-colors duration-300 hover:text-[#F5F1E8]"
              >
                <Mail className="h-3 w-3 text-[#d4af37bf]" />
                <span>gorcovd@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#d4af3720] pt-5">
          <p className="text-center text-[11px] tracking-[0.04em] text-[#F5F1E899]">
            {new Date().getFullYear()} Автоматизация в дело
          </p>
        </div>
      </div>
    </footer>
  )
}
