"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function AddSpeciesDialog({ species }: { species: Species }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => setOpen(true)}>
          <Icons.info className="mr-3 h-5 w-5" />
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>More Information</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="relative h-40 w-full">
            {species.image && (
              <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "contain" }} />
            )}
          </div>
        </DialogDescription>
        <DialogDescription>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <b>{species.common_name}</b>
            <br></br>
            {species.scientific_name}
          </div>
          <b>Total Population:</b> {species.total_population && species.total_population}
          {!species.total_population && "Unknown"}
          <br></br>
          <b>Kingdom:</b> {species.kingdom}
          <br></br>
          <b>Description:</b> {species.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
