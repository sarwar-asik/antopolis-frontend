"use client"

import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import toast, { Toaster } from 'react-hot-toast';
import { serverUrl } from '@/helpers/config';
import { UsePost } from '@/hooks/usePost';
import { ICategory } from '@/type/category.type';
import SelectUI, { IOption } from '../Form/SelectUI';
import { uploadImage } from '@/hooks/uploadImage';

export default function CreateAnimal({ categoryData }: { categoryData: ICategory[] }) {
    // const [openModal, setOpenModal] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<IOption>({ label: "select One", value: "" });
    const [loading, setIsLoading] = useState(false)
    const options = categoryData?.map((category: ICategory) => ({ label: category.title, value: category._id }))

    console.log(selectedValue, 'selectedValue')

    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get('image') as File;

        if (!image) {
            toast.error('Please upload an image');
            return;
        }
        if (selectedValue.value === "") {
            toast.error('Please select a category');
        }

        setIsLoading(true);

        const bodyData = {
            title: formData.get('title') as string,
            category_id: selectedValue.value
        };

        try {
            const responseAnimal = await UsePost("/animal", {
                ...bodyData,
                img: await uploadImage(image),
            });

            if (responseAnimal) {
                setIsLoading(false);
                toast.success(responseAnimal.message ?? `created ${bodyData.title} successfully`);
                e.target.reset();
                setModalOpen(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            // Handle error
            console.error("Error creating animal:", error);
            setIsLoading(false);
        }
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
                    <SelectUI label='Select Category' options={options} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
                    <ButtonSubmit text={`${loading ? 'Loading...' : 'Create Animal'}`} color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
