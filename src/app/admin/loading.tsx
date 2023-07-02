import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

export default function loading({}: Props) {
  return (
    <Skeleton className="h-6 container" />
  )
}