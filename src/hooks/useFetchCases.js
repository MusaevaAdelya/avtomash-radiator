import {useEffect, useState} from "react";
import {
    getCases,
} from "../services/casesService";

function useFetchCases() {
    const [cases, setCases] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                setIsLoading(true);
                const casesData = await getCases();
                if (!casesData.error) {
                    setCases(casesData);
                }
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCases();
    }, []);

    return [cases, isLoading, isError];
}

export default useFetchCases;
