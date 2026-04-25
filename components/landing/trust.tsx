"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { SectionTitle } from "@/components/landing/section-title"

const trustPoints = [
  "Работаем с реальными бизнес-процессами",
  "Не усложняем без необходимости",
  "Сохраняем привычную логику работы",
  "Проверяем на тестовых данных",
  "Не ломаем текущие файлы без причины",
  "Можно начать с одной задачи",
  "Делаем понятный инструмент",
]

export function Trust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
  const cardHover = shouldReduceMotion ? undefined : { y: -3, scale: 1.005 }

  return (
    <section className="premium-section premium-tone-cool">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-9 lg:mb-12">
            <SectionTitle
              title="Почему решение будет удобно использовать"
              description="Автоматизация сохраняет понятный рабочий сценарий и не превращается в отдельную сложную систему."
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }}
                className="premium-card flex items-start gap-3 p-4"
                whileHover={cardHover}
              >
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d4af3726]">
                  <Check className="h-2.5 w-2.5 text-[#d4af37]" />
                </div>
                <span className="text-[14px] leading-[1.55] tracking-[-0.008em] text-[#F5F1E8] text-pretty">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
