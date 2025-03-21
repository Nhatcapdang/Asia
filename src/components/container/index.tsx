import clsx from 'clsx'
import React from 'react'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('max-w-[1272px] mx-auto px-4', className)}>
      {children}
    </div>
  )
}
