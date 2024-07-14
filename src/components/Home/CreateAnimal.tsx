"use client"
import React, { BaseSyntheticEvent, useState } from 'react'
import InputUI from '../Form/InputUI'
import ButtonSubmit from '../Form/ButtonSubmitUI'
import ModalUI from '../UI/ModalUI';
import ButtonPrimary from '../UI/ButtonPrimary';
import toast from 'react-hot-toast';
import { ICategory } from '@/type/category.type';
import SelectUI, { IOption } from '../Form/SelectUI';
import { actionRevalidate } from '@/app/action';
import { animalTag } from '@/helpers/const';
import { serverUrl } from '@/helpers/config';

export default function CreateAnimal({ categoryData, }: { categoryData: ICategory[] }) {


    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<IOption>({ label: "select One", value: "" });
    const [loading, setIsLoading] = useState(false)
    const options = categoryData?.map((category: ICategory) => ({ label: category.title, value: category._id }))

    // console.log(selectedValue, 'selectedValue')

    // ! submit handler
    // ! submit handler
    const handleFormSubmit = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const image = formData.get('image') as File;

        if (!image) {
            toast.error('Please upload an image');
            return;
        }

        if (selectedValue.value === "") {
            toast.error('Please select a category');
            return;
        }

        setIsLoading(true);
        formData.append('category_id', selectedValue.value);

        try {
            console.log(formData, 'formData'); // Logging the FormData for debugging
            const responseAnimal = await postSSDataWithFile("/animal", formData);

            if (responseAnimal) {
                await actionRevalidate(animalTag); // For refetching all animal data
                setIsLoading(false);
                toast.success(responseAnimal.message ?? `Created Animal successfully`);
                e.target.reset(); // Resetting the form after successful submission
                setModalOpen(false); // Closing the modal after successful submission
            } else {
                setIsLoading(false);
            }
        } catch (error: any) {
            console.log("Error creating animal:", error);
            toast.error("Error creating animal:", error.message ?? error);
            setIsLoading(false);
        }
    };


    //! post with file and body

    async function postSSDataWithFile(
        url: string,
        formData: FormData,
        options = {} as RequestInit
    ): Promise<any> {
        try {
            const response = await fetch(`${serverUrl}${url}`, {
                method: "POST",
                ...options,
                body: formData, // FormData instance containing file and other data
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            return await response.json(); // Parsing JSON response from the server
        } catch (error) {
            console.error("Error in postSSDataWithFile:", error);
            throw error; // Propagate the error to the caller for handling
        }
    }



    return (
        <React.Fragment>

            {/* modal open button */}

            <p onClick={() => setModalOpen(true)}>
                <ButtonPrimary text="Add Animal" color='#FFFFFF'></ButtonPrimary>
            </p>
            {/* //! reusable Modal used  */}
            <ModalUI isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className='text-2xl font-[500]  '>Create Animal</h2>
                <form onSubmit={handleFormSubmit} className='px-2 '>
                    <InputUI id='title' label='Animal Name' name='title' />
                    <InputUI id='image' label='Animal Name' name='image' type='file' />
                    {/* //! used for relation between category and animal */}
                    <SelectUI label='Select Category' options={options} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
                    {/* //! reusable submit butt */}
                    <ButtonSubmit text={`${loading ? 'Loading...' : 'Create Animal'}`} color='white' bg='black' />
                </form>
            </ModalUI>
        </React.Fragment>
    )
}
