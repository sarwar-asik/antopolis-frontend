import React from 'react'

import { IAnimal } from '@/type/animal.type'
import Image from 'next/image'
import Skeleton from '../UI/Skeleton'

export default function Animals({ animalData }: { animalData: IAnimal[] }) {

    return (
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-5 mt-7 bg-whit'>

            {animalData?.length < 1 &&
                [1, 2, 3, 4, 5, 6, 8, 9, 10]?.map((i) => <Skeleton key={i} />)}

            {
                animalData?.map((animal: IAnimal, index: number) => (
                    <div key={index} className='' >
                        <div className='p-2 bg-[#141414] rounded'>  <Image src={animal.img} alt="" height={103} width={103} className='rounded h-[153px] w-[143px] mx-auto bg-transparent p-2' /></div>
                        <h1 className='text-white uppercase py-2 text-center'>{animal.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}
