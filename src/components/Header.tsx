import { HomeIcon } from "lucide-react"
import { NavButton } from "@/components/NavButton"


export function Header() {
    return (
        <header className="animate_slide bg-background h-12 p-2 border-b sticky top-0 z-90">
            <div className="flex h-8 items-center justify-between w-full ">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Home" icon={HomeIcon}></NavButton>
                </div>
                <div className="flex items-center">

                </div>
            </div>
        </header>
    )
}