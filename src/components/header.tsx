"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="site-header">
            <Link href="/" style={{ fontWeight: 600, fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.25"/>
                    <circle cx="6.5" cy="7.5" r="0.85" fill="currentColor"/>
                    <circle cx="11.5" cy="7.5" r="0.85" fill="currentColor"/>
                    <path d="M6 11c0.8 1.2 5.2 1.2 6 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
                Sebastian
            </Link>

            <div className="flex items-center gap-4">
                <nav className="flex items-center gap-4" style={{ fontSize: "0.9rem" }}>
                    <Link href="/#projects">Projects</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="mailto:sebastian@example.com">Contact</Link>
                </nav>

                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--foreground)",
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                    }}
                >
                    {mounted ? (
                        theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
                    ) : (
                        <div style={{ width: 18, height: 18 }} />
                    )}
                </button>
            </div>
        </header>
    );
}
