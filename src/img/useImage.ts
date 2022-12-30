import { useEffect, useState } from "react";

export const useImage = (fileName: string) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/img/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage();
    }, [fileName])

    return {
        loading: loading,
        error: error,
        image: image
    }

};