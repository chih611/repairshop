import { File, HomeIcon, UserRound } from "lucide-react"
import { NavButton } from "@/components/NavButton"
import Link from "next/link"


export function Header() {
    return (
        <header className="animate_slide bg-background h-12 p-2 border-b sticky top-0 z-90">
            <div className="flex h-8 items-center justify-between w-full ">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon} />
                    <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home" />
                    <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Computer Repair shop</h1>
                </div>
                <div className="flex items-center">
                    <NavButton href="/tickets" label="Tickets" icon={File} />
                    <NavButton href="/customers" label="Customers" icon={UserRound} />
                </div>
            </div>
        </header>
    )
}