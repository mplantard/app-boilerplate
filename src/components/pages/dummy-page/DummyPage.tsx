import React from "react"
import { useParams } from "react-router-dom"

export const DummyPage = () => {
    const params = useParams();
    return <h1>{'Page ' + params.id}</h1>
}

export default DummyPage;