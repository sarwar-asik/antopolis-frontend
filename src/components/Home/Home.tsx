"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
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

    const [animalData, setAnimalData] = useState<IAnimal[]>(animalAllResult?.data || []);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>('all');

    useEffect(() => {
        setAnimalData(animalAllResult?.data || []);
    }, [animalAllResult?.data]);

    const handleCategoryChange = useCallback((categoryId: string | null) => {
        setSelectedCategoryId(categoryId);
    }, []);

    const filteredAnimalData = useMemo(() => {
        if (selectedCategoryId === 'all') return animalData;
        return animalData.filter(animal => animal.category_id === selectedCategoryId);
    }, [animalData, selectedCategoryId]);

    return (
        <div className=''>
            <CategorySection categoryData={categoryData.data} onCategoryChange={handleCategoryChange} />
            <Animals animalData={filteredAnimalData} />
        </div>
    )
}
