"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import { UsePost } from '@/hooks/usePost';
import toast from 'react-hot-toast';
import { revalidatePath, revalidateTag } from 'next/cache';
import { categoryTag } from '@/helpers/const';
import { serverUrl } from '@/helpers/config';

export default function CreateCategory() {
    // const [openModal, setOpenModal] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setIsLoading] = useState(false)

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);
        // setModalOpen(false);
        const bodyData = {
            title: values.title
        }
        // console.log(bodyData)
        const response = await UsePost("/category", bodyData)
        console.log(response, 'response')
        if (response) {
            toast.success(response.message ?? `created ${values.title} successfully`)
            e.target.reset();
            setIsLoading(false)
            // revalidateTag(categoryTag)
            // revalidatePath(`${serverUrl}/category`)
            setModalOpen(false);
        }

    };
    return (
        <React.Fragment>
            <p onClick={() => setModalOpen(true)}>
                <ButtonPrimary text="Add Category" color='#FFFFFF'></ButtonPrimary>
            </p>
            <ModalUI isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className='text-2xl font-[500] '>Add Category</h2>
                <form onSubmit={handleFormSubmit} className='px-2 py-3'>

                    <InputUI id='title' label='Category Name' isRequired={true} name='title' />
                    {/* loading button */}
                    <ButtonSubmit text={`${loading ? "Saving..." : "Save"}`} color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
