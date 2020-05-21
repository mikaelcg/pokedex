import React, { createContext, useState, useContext } from 'react'

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
    let [nextPage, setNextPage] = useState(null)
    let [previousPage, setPreviousPage] = useState(null)
    let [currentPage, setCurrentPage] = useState(null)

    return (
        <PaginationContext.Provider value={{
            nextPage, previousPage, currentPage, setNextPage, setPreviousPage, setCurrentPage
        }}>{children}</PaginationContext.Provider>
    );
}

export function usePagination() {
    const context = useContext(PaginationContext)
    const {
        nextPage, previousPage, currentPage, setNextPage, setPreviousPage, setCurrentPage
    } = context

    return {
        nextPage, previousPage, currentPage, setNextPage, setPreviousPage, setCurrentPage
    }
}