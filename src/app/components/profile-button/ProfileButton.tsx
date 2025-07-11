import { UserCog } from "lucide-react";
import { useRouter } from "next/navigation";
import LogoutButton from "../logout-button/Logout";


export default function ProfileButton(props: React.HTMLAttributes<HTMLButtonElement>) {
    const router = useRouter();
    const handleClick = () => {
        router.push("/profile");
    }

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handleClick}
                className="p-3 rounded hover:bg-neutral-800 w-12 h-12 flex items-center justify-center cursor-pointer"
                {...props}
                title="Profile">
                <UserCog className="w-8 h-8 hover:cursor-pointer" />
            </button>
            <LogoutButton />
        </div>

    )
}