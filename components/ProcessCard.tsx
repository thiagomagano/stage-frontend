import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Link from 'next/link'

interface ProcessProps {
  name: string,
  description: string,
  department: string,
  id: number
}

export default function ProcessCard({ name, description, department, id }: ProcessProps) {
  return (
    <Card draggable='false'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>

        <Button><Link href={`/process/${id}`}> Ver procesos </Link></Button>

      </CardContent>
      <CardFooter>
        {department}
      </CardFooter>

    </Card>
  )
}
