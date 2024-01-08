"use client"

import { useState } from "react"

export default function Post() {
    const [postTitle, setPostTitle] = useState<string | null>("")

    const changePostTitle = () => {
        setPostTitle(null)
    }

    return (
        <div>
            <h1>{postTitle}</h1>
        </div>
    )
}


