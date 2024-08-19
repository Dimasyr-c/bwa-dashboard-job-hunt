import { Separator } from "@/components/ui/separator";
import { title } from "process";
import React, {Children, FC, ReactNode} from "react";

interface FieldInputProps{
    title: string;
    subtitle: string; // Tambahkan subtitle di sini
    children: React.ReactNode;
}

const FieldInput: React.FC<FieldInputProps> = ({ title, subtitle, children }) => {
    return(
        <>
        <div className="flex flex-row items-start">
            <div className="w-[35%]">
                <div className="font-semibold">{title}</div>
                <div className="text-gray-400 w-80">{subtitle}</div>
            </div>
            {children}
        </div>
        <Separator />
        </>
    )
}

export default FieldInput;