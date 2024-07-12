import { ICategory } from '@/type/category.type'
import React from 'react'
import ButtonPrimary from '../UI/ButtonPrimary'

import CreateCategory from './CreateCategory'
import CreateAnimal from './CreateAnimal'
import { Toaster } from 'react-hot-toast'


export default function CategorySection({ categoryData }: { categoryData: ICategory[] }) {

    // const categoryData: ICategory[] = [
    //     { _id: "11", title: "Bird" },
    //     { _id: "22", title: "Fist" },
    //     { _id: "3", title: "Insect" },
    // ]
    // console.log(console.log(categoryData))
    return (
        <React.Fragment >

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex justify-between gap-3">
                {/* category Section */}
                <div className="flex justify-between gap-2 flex-wrap">
                    {/* <ButtonPrimary text="Land Animal" color='#058F34'></ButtonPrimary> */}
                    {
                        categoryData?.map((category: ICategory, index: number) => (
                            <ButtonPrimary text={category.title} color={index === 0 ? '#058F34' : '#EF0D0D'} width={index === 0 ? '140px' : '100px'} key={category?._id + index}></ButtonPrimary>
                        ))
                    }
                </div>
                {/* add section */}
                <div className="flex gap-2">

                    <CreateCategory />
                    <CreateAnimal categoryData={categoryData} />
                </div>
            </div>
        </React.Fragment>
    )
}
