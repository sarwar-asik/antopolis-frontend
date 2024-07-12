"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateAnimal() {
    // const [openModal, setOpenModal] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);
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
                    <InputUI id='animalName' label='Animal Name' name='animalName' />
                    <InputUI id='image' label='Animal Name' name='image' type='file' />
                    <ButtonSubmit text='Create Animal' color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
