import AuthorCard from "@/components/AuthorCard";
import React from "react";
import Mega from "@/components/mega";
import Feature from "@/components/Featured";


export default function Home() {
    return (
        <div>
            
            <Feature />
            <Mega />
            <AuthorCard />
            
        </div>
    );
}