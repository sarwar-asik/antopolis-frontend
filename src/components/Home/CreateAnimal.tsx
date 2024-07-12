"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import toast, { Toaster } from 'react-hot-toast';
import { serverUrl } from '@/helpers/config';
import { UsePost } from '@/hooks/usePost';

export default function CreateAnimal() {
    // const [openModal, setOpenModal] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);
        const formData = new FormData(e.target);
        const image = formData.get('image') as File;
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            const url = `http://localhost:5001/api/v1/image/upload`;
            const responseImage = await fetch(url, {
                method: 'PUT',
                body: formData,
            });
            // console.log(responseImage, 'imageResult')
            if (responseImage.ok) {
                const imageData = await responseImage.json();
                console.log(imageData, 'imageData')
                const bodyData = {
                    title: values.title,
                    image: imageData.data
                }
                const responseAnimal = await UsePost("/animal", bodyData)
                console.log(responseAnimal, 'responseAnimal')
                if (responseAnimal) {
                    toast.success(responseAnimal.message ?? `created ${values.title} successfully`)
                    e.target.reset();
                    setModalOpen(false);
                }
            }
        }
        // setModalOpen(false);
        toast.success('Successfully toasted!')
    };
    return (
        <React.Fragment>

            <p onClick={() => setModalOpen(true)}>
                <ButtonPrimary text="Add Animal" color='#FFFFFF'></ButtonPrimary>
            </p>
            <ModalUI isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className='text-2xl font-[500] '>Create Animal</h2>
                <form onSubmit={handleFormSubmit} className='px-2 py-3'>
                    <InputUI id='title' label='Animal Name' name='title' />
                    <InputUI id='image' label='Animal Name' name='image' type='file' />
                    <ButtonSubmit text='Create Animal' color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
