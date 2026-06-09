'use client'

import { InputText, Template , Button, RenderIf , UseNotification, FieldError} from '@/components';
import { useImageService } from '@/resources/image/image.service';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FormProps , FormScheme , FormValidationSchema } from './formScheme';
import Link from 'next/link';


export default function FormularioPage() {

    const [imagePreview, setImagePreview] = useState<string>();
    const service = useImageService();
    const notification = UseNotification();
    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: FormScheme,
        onSubmit: HandleSubmit,
        validationSchema : FormValidationSchema
    })

    async function HandleSubmit(dados: FormProps) {
        setLoading(true);
        const formData = new FormData();
        formData.append("name", dados.name);
        formData.append("tags", dados.tags);
        formData.append("file", dados.file);

        await service.salvar(formData);

        formik.resetForm();
        setImagePreview('');
        setLoading(false);

        notification.notify("Image uploaded successfully!", "success");
    }



    function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
       if (event.target.files ) { 
        const file = event.target.files?.[0]
        formik.setFieldValue('file', file)
        setImagePreview(URL.createObjectURL(file))
       }
    }   
    return(
        <Template loading={loading}>
            <section className="flex flex-col items-center justify-center my-5">
                <h5 className = "mt-3 mb-10 text-3x1 font-extrabold tracking-tight text-gray-800">Upload de Imagem</h5>
                <form  onSubmit={formik.handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <div className="grid grid-cols-1">
                        <label className="block text-sm font-medium  leading-6 text-gray-600" >Name :*</label>
                        <InputText  id="name" value={formik.values.name} 
                                    onChange={formik.handleChange} 
                                    placeholder="Image Name" 
                                    textColor="text-gray-500" 
                                    placeholderColor="placeholder:text-gray-200" />
                        <FieldError error={(formik.submitCount > 0 || formik.touched.name || (formik.values.name?.length > 50)) ? formik.errors.name : null} />
                    </div>
                    <div className=" mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium leading-6 text-gray-600" >Tags :*</label>
                        <InputText  id="tags" 
                                    value={formik.values.tags} 
                                    onChange={formik.handleChange} 
                                    placeholder="Image Tags comma separated" 
                                    textColor="text-gray-500" 
                                    placeholderColor="placeholder:text-gray-200" />
                        <FieldError error={(formik.submitCount > 0 || formik.touched.tags || (formik.values.tags?.length > 50)) ? formik.errors.tags : null} />
                    </div>
                    <div className=" mt-5 grid grid-cols-1">
                        <label className="block text-sm font-medium  leading-6 text-gray-600" >Image :*</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <RenderIf condition={!imagePreview}>
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" 
                                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" 
                                              clipRule="evenodd" />
                                    </svg>
                                </RenderIf>    
                                <div className="mt-4 justify-center flex text-sm leading-6 text-gray-600">
                                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <RenderIf condition={!imagePreview}>
                                            <span>Upload a file</span>
                                        </RenderIf>
                                        <RenderIf condition={!!imagePreview}>
                                            <img src={imagePreview} width={250} className="rounded-t-md"  />
                                        </RenderIf>
                                        <input onChange={onFileUpload} type="file" className="sr-only" />
                                    </label>
                                    
                                </div>
                                <RenderIf condition={!imagePreview}>
                                     <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </RenderIf>
                                <FieldError error={(formik.submitCount > 0 || formik.touched.file) ? formik.errors.file : null} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-x-4">  
                        <Button color="bg-blue-500 hover:bg-blue-300" type="submit" label="Save" />
                        <Link href="/galeria">
                            <Button color="bg-red-500 hover:bg-red-300" type="button" label="Cancel" />
                        </Link>
                    </div>      
                </form>
            </section>
                    
        </Template>
    );
}    