"use client";

import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Back() {
    const router = useRouter();

    function goBack() {
        router.back()
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => goBack()}
        >
            <ArrowLeftCircle className="h-8 w-8" />
        </Button>
    );
}