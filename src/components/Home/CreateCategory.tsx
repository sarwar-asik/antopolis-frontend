"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';

export default function CreateCategory() {
    // const [openModal, setOpenModal] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.fromEntries(new FormData(e.target))
        console.log('Form values:', values);
        setModalOpen(false);
    };
    return (
        <React.Fragment>
            <p onClick={() => setModalOpen(true)}>
                <ButtonPrimary text="Add Category" color='#FFFFFF'></ButtonPrimary>
            </p>
            <ModalUI isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <form onSubmit={handleFormSubmit}>
                    <InputUI id='categoryName' label='Category Name' name='categoryName' />
                    <ButtonSubmit text='Save' color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
