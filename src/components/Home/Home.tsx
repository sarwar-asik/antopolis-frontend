"use client"
import React, { useEffect, useState } from 'react'
import CategorySection from './CategorySection'
import { ICategory } from '@/type/category.type'
import Animals from './Animals'
import { serverUrl } from '@/helpers/config'

export interface HomeProps {
    categoryData: { data: ICategory[] };
}
async function getAnimalData(categoryId: string | null) {
    const res = await fetch(`${serverUrl}/animal/${categoryId}`, {
        next: { tags: ['animal'] },
        cache: 'no-store'
    });
    console.log(res, "res")
    const result = await res.json();
    return result;
}
export default function HomePage({ categoryData }: HomeProps) {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>("all");
    const [animalData, setAnimalData] = useState<any[]>([]);
    console.log(selectedCategoryId)
    useEffect(() => {
        async function fetchAnimalData() {
            if (selectedCategoryId) {
                const animalResult = await getAnimalData(selectedCategoryId);
                setAnimalData(animalResult.data);
            }
        }
        fetchAnimalData();
    }, [selectedCategoryId]);

    console.log(animalData.length, "and", animalData)
    return (
        <div>
            <CategorySection categoryData={categoryData.data} setSelectedCategoryId={setSelectedCategoryId} />
            <Animals animalData={animalData} />
        </div>
    )
}
