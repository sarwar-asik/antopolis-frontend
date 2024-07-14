import { ICategory } from '@/type/category.type'
import React from 'react'
import ButtonPrimary from '../UI/ButtonPrimary'

import CreateCategory from './CreateCategory'
import CreateAnimal from './CreateAnimal'
import { Toaster } from 'react-hot-toast'


export default function CategorySection({ categoryData, setSelectedCategoryId }: { categoryData: ICategory[], setSelectedCategoryId: any }) {


    return (
        <React.Fragment >

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex justify-between gap-4">
                {/* category list Section */}
                <div className="flex justify-between  flex-wrap gap-2">

                    {
                        categoryData?.map((category: ICategory, index: number) => (
                            <ButtonPrimary onClick={() => setSelectedCategoryId(category._id)} text={category.title} color={index === 0 ? '#058F34' : '#EF0D0D'} width={index === 0 ? '140px' : '100px'} key={category?._id + index}></ButtonPrimary>
                        ))
                    }
                </div>
                {/* add modal and section */}
                <div className="flex gap-2 flex-wrap justify-between">

                    <CreateCategory />
                    <CreateAnimal categoryData={categoryData} />
                </div>
            </div>
        </React.Fragment>
    )
}
