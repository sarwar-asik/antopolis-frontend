import React from 'react'
import CategorySection from './CategorySection'
import { ICategory } from '@/type/category.type'
import Animals from './Animals'

export interface HomeProps {
    categoryData: { data: ICategory[] };
}
export default function HomePage({ categoryData }: HomeProps) {
    return (
        <div> 
        <CategorySection categoryData={categoryData.data} />
         <Animals/></div>
    )
}
