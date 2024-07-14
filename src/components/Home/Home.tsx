"use client"
import React, { useCallback, useEffect, useState } from 'react'
import CategorySection from './CategorySection'
import { ICategory } from '@/type/category.type'
import Animals from './Animals'
import { serverUrl } from '@/helpers/config'
import { IAnimal } from '@/type/animal.type'
export interface HomeProps {
    categoryData: { data: ICategory[] };
    animalAllResult: { data: IAnimal[] }
}

export default function Home({ categoryData, animalAllResult }: HomeProps) {

    // ! select category declared parents for refetch Data 
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>("all");

    const [animalData, setAnimalData] = useState<any[]>(animalAllResult?.data);
    // console.log(selectedCategoryId)


    useEffect(() => {
        async function fetchAnimalData() {
            if (selectedCategoryId) {
                if (selectedCategoryId === 'all') {
                    // console.log('yes')
                    setAnimalData(animalAllResult?.data);
                }
                else {
                    const response = await fetch(`${serverUrl}/animal/${selectedCategoryId}`)
                    const result = await response.json();
                    setAnimalData(result.data);
                }

            }
        }

        fetchAnimalData();
    }, [animalAllResult?.data, selectedCategoryId]);

    // const handleCategoryChange = (categoryId: string) => {
    //     setSelectedCategoryId(categoryId);
    // }


    // console.log(animalData?.length, "and", animalData)

    return (
        <div className=''>
            <CategorySection categoryData={categoryData?.data} setSelectedCategoryId={setSelectedCategoryId} />
            <Animals animalData={animalData} />
        </div>
    )
}
