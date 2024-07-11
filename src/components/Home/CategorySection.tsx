import { ICategory } from '@/type/category.type'
import React from 'react'
import ButtonPrimary from '../UI/ButtonPrimary'

import CreateCategory from './CreateCategory'
import CreateAnimal from './CreateAnimal'


export default function CategorySection() {

    const categoryData: ICategory[] = [
        { _id: "11", title: "Bird" },
        { _id: "22", title: "Fist" },
        { _id: "3", title: "Insect" },
    ]
    return (
        <React.Fragment >
            <div className="flex justify-between gap-3">
                {/* category Section */}
                <div className="flex justify-between gap-2 flex-wrap">
                    <ButtonPrimary text="Land Animal" color='#058F34'></ButtonPrimary>
                    {
                        categoryData?.map((category: ICategory, index: number) => (
                            <ButtonPrimary text={category.title} color='#EF0D0D' width='100px' key={category?._id + index}></ButtonPrimary>
                        ))
                    }
                </div>
                {/* add section */}
                <div className="flex gap-2">

                    <CreateCategory />
                    <CreateAnimal />
                </div>
            </div>
        </React.Fragment>
    )
}
