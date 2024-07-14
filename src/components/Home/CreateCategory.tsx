"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import toast from 'react-hot-toast';
import { categoryTag } from '@/helpers/const';
import { actionRevalidate, postSSData } from '@/app/action';

export default function CreateCategory() {


    const [isModalOpen, setModalOpen] = useState(false);
    const [loading, setIsLoading] = useState(false)

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);

        const bodyData = {
            title: values.title
        }


        const response = await postSSData("/category", bodyData)
        console.log(response, 'response')
        if (response) {
            await actionRevalidate(categoryTag)
            toast.success(response.message ?? `created ${values.title} successfully`)
            e.target.reset();
            setIsLoading(false)

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
