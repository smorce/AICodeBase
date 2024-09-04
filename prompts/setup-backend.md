# Backend Setup Instructions

Use this guide to setup the backend for this project.

It uses Supabase, Drizzle ORM, and Server Actions.

A code template is provided for you.

Your job is to analyze user requests and make modifications to the code template as needed. If there is no explicit request from the user or the code does not need to be modified, only perform the modification to remove the comment on the last line of code.

Your goal is to completely finish the backend setup.

## Helpful Links

If the user gets stuck, refer them to the following links:

- [Supabase](https://supabase.com/)
- [Drizzle Docs](https://orm.drizzle.team/docs/overview)
- [Drizzle with Supabase Quickstart](https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase)

## Required Environment Variables

Make sure the user knows to set the following environment variables:

```bash
DATABASE_URL=
```

## Install Libraries

Make sure the user knows to install the following libraries:

```bash
npm i drizzle-orm dotenv postgres
npm i -D drizzle-kit
```

## Code Template

- `Directory Structure`
```Directory Structure
AICodeBase/
├── actions
│   └── example-actions.ts
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── backend
├── db
│   ├── db.ts
│   ├── migrations
│   │   └── 0000_brave_sengi.sql
│   ├── queries
│   │   └── example-queries.ts
│   └── schema
│       ├── example-schema.ts
│       └── index.ts
├── .env.local
├── .gitignore
├── drizzle.config.ts
├── next.config.mjs
├── next-env.d.ts
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prompts
│   ├── setup-backend.md
│   ├── setup-frontend.md
│   ├── setup-payments.md
│   ├── setup-project.md
│   └── setup-supabase-auth.md
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── types
    ├── action-types.ts
    └── index.ts
```


- `drizzle.config.ts`
```drizzle.config.ts
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema/index.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
});
// WARNING: この行は古いコードなので削除が必要
```


- `package.json`
```package.json
{
  "name": "test-supabk",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:generate": "npx drizzle-kit generate",
    "db:migrate": "npx drizzle-kit migrate"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.7"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.7"
  }
}
```


- `actions/example-actions.ts` 
```actions/example-actions.ts
"use server";

import { createExample, deleteExample, getAllExamples, getExampleById, updateExample } from "@/db/queries/example-queries";
import { InsertExample } from "@/db/schema/example-schema";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";

export async function createExampleAction(data: InsertExample): Promise<ActionState> {
  try {
    const newExample = await createExample(data);
    revalidatePath("/examples");
    return { status: "success", message: "Example created successfully", data: newExample };
  } catch (error) {
    return { status: "error", message: "Failed to create example" };
  }
}

export async function getExampleByIdAction(id: string): Promise<ActionState> {
  try {
    const example = await getExampleById(id);
    return { status: "success", message: "Example retrieved successfully", data: example };
  } catch (error) {
    return { status: "error", message: "Failed to get example" };
  }
}

export async function getAllExamplesAction(): Promise<ActionState> {
  try {
    const examples = await getAllExamples();
    return { status: "success", message: "Examples retrieved successfully", data: examples };
  } catch (error) {
    return { status: "error", message: "Failed to get examples" };
  }
}

export async function updateExampleAction(id: string, data: Partial<InsertExample>): Promise<ActionState> {
  try {
    const updatedExample = await updateExample(id, data);
    revalidatePath("/examples");
    return { status: "success", message: "Example updated successfully", data: updatedExample };
  } catch (error) {
    return { status: "error", message: "Failed to update example" };
  }
}

export async function deleteExampleAction(id: string): Promise<ActionState> {
  try {
    await deleteExample(id);
    revalidatePath("/examples");
    return { status: "success", message: "Example deleted successfully" };
  } catch (error) {
    return { status: "error", message: "Failed to delete example" };
  }
}
// WARNING: この行は古いコードなので削除が必要
```


- `db/migrations/0000_brave_sengi.sql`
```db/migrations/0000_brave_sengi.sql
CREATE TABLE "example" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL DEFAULT now()
);
// WARNING: この行は古いコードなので削除が必要
```


- `db/queries/example-queries.ts`
```db/queries/example-queries.ts
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
    const example = await db.query.exampleTable.findFirst({
      where: eq(exampleTable.id, id)
    });
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
  return db.query.exampleTable.findMany();
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
// WARNING: この行は古いコードなので削除が必要
```


- `db/schema/example-schema.ts`
```db/schema/example-schema.ts
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const exampleTable = pgTable("example", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

export type InsertExample = typeof exampleTable.$inferInsert;
export type SelectExample = typeof exampleTable.$inferSelect;
// WARNING: この行は古いコードなので削除が必要
```


- `db/schema/index.ts`
```db/schema/index.ts
export * from "./example-schema";
// WARNING: この行は古いコードなので削除が必要
```


- `db/db.ts`
```db/db.ts
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { exampleTable } from "./schema";

config({ path: ".env.local" });

const schema = {
  exampleTable
};

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle(client, { schema });
// WARNING: この行は古いコードなので削除が必要
```


- `types/action-types.ts`
```types/action-types.ts
export type ActionState = {
    status: "success" | "error";
    message: string;
    data?: any;
  };
// WARNING: この行は古いコードなので削除が必要
```


- `types/index.ts`
```types/index.ts
export * from "./action-types";
// WARNING: この行は古いコードなので削除が必要
```


## Command Instructions

- Run the following command to generate the tables:

```bash
npm run db:generate
```

- Run the following command to migrate the tables:

```bash
npm run db:migrate
```

## Finish

- The backend is now setup.
