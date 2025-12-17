"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {
  const kind = String(formData.get("kind") ?? "OFFER");
  const category = String(formData.get("category") ?? "OTHER");
  const title = String(formData.get("title") ?? "").trim();

  if (!title) return;

  const brand = String(formData.get("brand") ?? "").trim() || null;
  const details = String(formData.get("details") ?? "").trim() || null;
  const emission = String(formData.get("emission") ?? "").trim() || null;
  const status = String(formData.get("status") ?? "").trim() || null;
  const location = String(formData.get("location") ?? "").trim() || null;
  const zip = String(formData.get("zip") ?? "").trim() || null;
  const condition = String(formData.get("condition") ?? "").trim() || null;

  await prisma.listing.create({
    data: { kind: kind as any, category: category as any, title, brand, details, emission, status, location, zip, condition },
  });

  revalidatePath("/");
  redirect("/#angebote");
}

export async function deleteListing(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  if (!id) return;

  await prisma.listing.delete({ where: { id } });
  revalidatePath("/");
}

