"use client";
import Link from "next/link";

interface SecretButtonProps {
    triggered: boolean;
}

export default function SecretButton({ triggered }: SecretButtonProps) {
    if(!triggered) return null;

    return (
        <div className="fixed bottom-4 right-4">
            <Link
                href="/secret"
                className="
                bg-[#EB5E28] hover:bg-[#BB4430]
                text-off-white font-semibold
                px-4px-2 rounded-lg shadow-lg
                transition opacity-0 animate-fade-in">
                    Psst!
                </Link>
        </div>
    )
}