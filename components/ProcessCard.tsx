import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProcessProps {
  name?: string;
  description?: string;
  department?: string;
  title?: string;
  id?: number;
}

export default function ProcessCard({
  name,
  description,
  department,
  id,
}: ProcessProps) {
  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <a href={`/process/${id}`}>
          <Button>Ver procesos</Button>
        </a>
      </CardContent>
      <CardFooter>{department}</CardFooter>
    </Card>
  );
}
