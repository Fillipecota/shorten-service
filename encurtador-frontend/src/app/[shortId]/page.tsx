'use client'

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react"

export default function Redirect() {
    const params = useParams();
    const shortId = params.shortId;

    useEffect(() => {
        loadOriginaUrl();
    }, [])

    async function loadOriginaUrl() {
        const response = await axios.get(`http://localhost:3333/shorten?identifier=${shortId}`)
        const originalUrl = response.data.originalUrl;

        window.location.href = originalUrl;

        
    }

    return <h1>Redirecionando....</h1>
}