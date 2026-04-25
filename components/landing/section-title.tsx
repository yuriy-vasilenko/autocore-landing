"use client"

import { motion, useReducedMotion } from "framer-motion"

type SectionTitleProps = {
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ title, description, className }: SectionTitleProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <h2 className="premium-heading">{title}</h2>
      {description ? <p className="premium-subheading">{description}</p> : null}
    </motion.div>
  )
}
