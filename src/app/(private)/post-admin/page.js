"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

import CardPostAdmin from "@/components/card-post-admin";
import PostForm from "@/components/post-form";

const API = "http://localhost:5500/api/posts";

export default function PostsAdmin() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [sheetOpen, setSheetOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        image: "",
    });

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        setLoading(true);

        const res = await fetch(API);
        const data = await res.json();

        setPosts(data);
        setLoading(false);
    }

    function openCreate() {
        setEditing(null);

        setForm({
            title: "",
            content: "",
            category: "",
            image: "",
        });

        setError("");
        setSheetOpen(true);
    }

    function openEdit(post) {
        setEditing(post);

        setForm({
            title: post.title ?? "",
            content: post.content ?? "",
            category: post.category ?? "",
            image: post.image ?? "",
        });

        setError("");
        setSheetOpen(true);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setSaving(true);
        setError("");

        const res = await fetch(
            editing ? `${API}/${editing.id}` : API,
            {
                method: editing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form),
            }
        );

        setSaving(false);

        if (!res.ok) {
            const data = await res.json();
            setError(data.error ?? "Erro ao salvar post.");
            return;
        }

        setSheetOpen(false);
        fetchPosts();
    }

    async function handleDelete(id) {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        setConfirmDelete(null);
        fetchPosts();
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Posts</h1>

                <Button onClick={openCreate}>
                    <Plus className="mr-2 size-4" />
                    Novo Post
                </Button>
            </div>

            {loading ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <Skeleton
                            key={i}
                            className="h-64 rounded-xl"
                        />
                    ))}
                </div>
            ) : posts.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                    Nenhum post cadastrado.
                </p>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <CardPostAdmin
                            key={post.id}
                            post={post}
                            confirmDelete={confirmDelete}
                            onEdit={openEdit}
                            onDelete={handleDelete}
                            onRequestDelete={setConfirmDelete}
                            onCancelDelete={() => setConfirmDelete(null)}
                        />
                    ))}
                </div>
            )}

            <PostForm
                editing={editing}
                sheetOpen={sheetOpen}
                setSheetOpen={setSheetOpen}
                form={form}
                setForm={setForm}
                handleSubmit={handleSubmit}
                saving={saving}
                error={error}
            />
        </div>
    );
}