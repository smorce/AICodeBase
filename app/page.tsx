"use client";

import { useState } from "react";
import {
  createExampleAction,
  deleteExampleAction,
  getAllExamplesAction,
  getExampleByIdAction,
  updateExampleAction,
} from "@/actions/example-actions";
import { InsertExample } from "@/db/schema/example-schema";
import { ActionState } from "@/types";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [actionResult, setActionResult] = useState<ActionState | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData: InsertExample = {
      name,
      age,
      email,
    };
    const result = await createExampleAction(formData);
    setActionResult(result);
  };

  const handleGetById = async () => {
    const result = await getExampleByIdAction(id);
    setActionResult(result);
  };

  const handleGetAll = async () => {
    const result = await getAllExamplesAction();
    setActionResult(result);
  };

  const handleUpdate = async () => {
    const formData: Partial<InsertExample> = {
      name,
      age,
      email,
    };
    const result = await updateExampleAction(id, formData);
    setActionResult(result);
  };

  const handleDelete = async () => {
    const result = await deleteExampleAction(id);
    setActionResult(result);
  };

  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
      
  return (
    <div>
      <h1>Example Actions</h1>
      <p>Welcome, {session.user.email}!</p> {/* ユーザーのメールアドレスを表示 */}
      <form onSubmit={handleSubmit}>
        <h2>Create Example</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>

      <h2>Get Example By ID</h2>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button onClick={handleGetById}>Get By ID</button>

      <h2>Get All Examples</h2>
      <button onClick={handleGetAll}>Get All</button>

      <h2>Update Example</h2>
      <div>
        <label htmlFor="update-id">ID:</label>
        <input type="text" id="update-id" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="update-name">Name:</label>
        <input type="text" id="update-name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="update-age">Age:</label>
        <input type="number" id="update-age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
      </div>
      <div>
        <label htmlFor="update-email">Email:</label>
        <input type="email" id="update-email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleUpdate}>Update</button>

      <h2>Delete Example</h2>
      <div>
        <label htmlFor="delete-id">ID:</label>
        <input type="text" id="delete-id" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <button onClick={handleDelete}>Delete</button>

      <h2>Action Result</h2>
      {actionResult && (
        <div>
          <p>Status: {actionResult.status}</p>
          <p>Message: {actionResult.message}</p>
          {actionResult.data && (
            <pre>{JSON.stringify(actionResult.data, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}