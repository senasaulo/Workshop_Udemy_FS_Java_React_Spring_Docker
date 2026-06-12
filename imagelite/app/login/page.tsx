'use client'

import { Template, RenderIf , InputText , Button } from "@/components"
import { useState } from "react"

export default function Login(){

    const [loading , setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    return(
        <Template loading ={loading}>
            <div className="flex min-h-full  flex-1 flex-col justyfy-certe px-6 py-12 lg:px-8">
               
                <div className = "sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center  text-1x1 font-bold leading-9 tracking-tight text-gray-900">
                       { newUserState ? "Create New User": "Login to your account"}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2 ">
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900" >Name: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText 
                                    style="w-full"
                                    id="name" 
                                    placeholder="Name" 
                                    textColor="text-gray-500" 
                                    placeholderColor="placeholder:text-gray-200" />
                            </div>
                        </RenderIf>
                            <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900" >Email: </label>
                            </div>
                            <div className='mt-2'>
                                    <InputText 
                                        style="w-full"
                                        id="email" 
                                        placeholder="user@email.com" 
                                        textColor="text-gray-500" 
                                        placeholderColor="placeholder:text-gray-200" />
                            </div>
                           <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900" >Password: </label>
                            </div>
                            <div className='mt-2'>
                                    <InputText 
                                        type="password"
                                        style="w-full"
                                        id="password" 
                                        placeholder="Password123" 
                                        textColor="text-gray-500" 
                                        placeholderColor="placeholder:text-gray-200" />
                            </div>
                            <RenderIf>
                                <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900" >Repeat Password: </label>
                                </div>
                                <div className='mt-2'>
                                        <InputText 
                                            type="password"
                                            style="w-full"
                                            id="passwordMatch" 
                                            placeholder="Password123" 
                                            textColor="text-gray-500" 
                                            placeholderColor="placeholder:text-gray-200" />
                                </div>
                            </RenderIf>
                            
                            <div className="mt-3 flex items-center justify-end gap-x-4">  
                                <RenderIf condition={newUserState}>
                                    <Button color="bg-blue-500 hover:bg-blue-300" 
                                            type="submit" 
                                            label="Save" />
                                    <Button color="bg-red-500 hover:bg-red-300" 
                                            type="button" 
                                            label="Cancel" 
                                            onClick={() => setNewUserState(false)}/>
                                </RenderIf>
                                <RenderIf condition={!newUserState}>
                                    <Button color="bg-blue-500 hover:bg-blue-300" 
                                            type="submit" 
                                            label="Login" />
                                    <Button color="bg-green-500 hover:bg-green-300" 
                                            type="button" 
                                            label="Sign Up"
                                            onClick={() => setNewUserState(true)} />
                                </RenderIf>                             
                            </div>      
                    </form>

                </div>
            </div>
        </Template>
    )
}