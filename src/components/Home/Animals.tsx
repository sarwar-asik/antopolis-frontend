import React from 'react'
import { IAnimal } from '@/type/animal.type'
import Image from 'next/image'
import Skeleton from '../UI/Skeleton'

export default function Animals({ animalData }: { animalData: IAnimal[] }) {

    return (
        <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-2 py-5 mt-7 '>

            {animalData?.length < 1 &&
                [1, 2, 3, 4, 5, 6, 8, 9, 10]?.map((i) => <Skeleton key={i} />)}

            {
                animalData?.map((animal: IAnimal, index: number) => (
                    <div key={index} >
                        <div className='h-[153px] w-[143px] mx-auto rounded border border-gray-800 p-4 flex justify-center items-center'>  <Image src={animal.img} alt="" height={190} width={160} className='flex-1 rounded  mx-auto object-cover' /></div>
                        <h1 className='text-white uppercase py-2 mt-1 mx-auto text-center'>{animal.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}
