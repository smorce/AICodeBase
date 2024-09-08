"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { InsertExample, SelectExample } from "../schema/example-schema";
import { exampleTable } from "./../schema/example-schema";

export const createExample = async (data: InsertExample) => {
  try {
    const [newExample] = await db.insert(exampleTable).values(data).returning();
    return newExample;
  } catch (error) {
    console.error("Error creating example:", error);
    throw new Error("Failed to create example");
  }
};

export const getExampleById = async (id: string) => {
  try {
    const example = await db.select().from(exampleTable).where(eq(exampleTable.id, id)).limit(1); // 修正箇所
    if (!example) {
      throw new Error("Example not found");
    }
    return example;
  } catch (error) {
    console.error("Error getting example by ID:", error);
    throw new Error("Failed to get example");
  }
};

export const getAllExamples = async (): Promise<SelectExample[]> => {
  return db.select().from(exampleTable);
};

export const updateExample = async (id: string, data: Partial<InsertExample>) => {
  try {
    const [updatedExample] = await db.update(exampleTable).set(data).where(eq(exampleTable.id, id)).returning();
    return updatedExample;
  } catch (error) {
    console.error("Error updating example:", error);
    throw new Error("Failed to update example");
  }
};

export const deleteExample = async (id: string) => {
  try {
    await db.delete(exampleTable).where(eq(exampleTable.id, id));
  } catch (error) {
    console.error("Error deleting example:", error);
    throw new Error("Failed to delete example");
  }
};