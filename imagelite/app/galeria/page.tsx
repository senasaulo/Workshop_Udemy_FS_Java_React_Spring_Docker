'use client'

import{Template , ImageCard , Button , InputText,UseNotification, AuthenticatedPage} from '@/components'
import {ImageDTO} from '@/resources/image/image.resources'
import {useImageService} from '@/resources'
import {useState} from 'react'
import Link from 'next/link'

export default function Galeria() {
  const imageService = useImageService();
  const notification = UseNotification();
  const [images, setImages] = useState<ImageDTO[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function serchImages() {
    setLoading(true);
    const result = await useImageService().buscar(query, extension);
    setImages(result);
    console.table(result);
    setLoading(false);

    if(!result.length) {
      notification.notify("No results found!", "warning");
    }
  }

  function renderImageCard(image: ImageDTO) {
    return (
      <ImageCard  key={image.url}
                  imageUrl={image.url} 
                  name={image.name} 
                  size={image.size} 
                  uploadDate={image.uploadDate}
                  extension={image.extension} />
    );
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
      <AuthenticatedPage>
        <Template loading={loading}>
          <section className="flex flex-col items-center justify-center my-5">
                <div className="flex space-x-4 ">
                  <InputText  placeholder="Type Name or Tags"
                                  textColor="text-gray-500"
                                  placeholderColor="placeholder:text-gray-200"
                                  value={query}
                                  onChange={event => setQuery(event.target.value)}
                  />
                    <select className="border px-4 py-2 rounded-lg text-gray-900" value={extension} onChange={event => setExtension(event.target.value)}>
                      <option value="">All Formats</option>
                      <option value="JPEG">JPEG</option>
                      <option value="PNG">PNG</option>
                      <option value="GIF">GIF</option>
                    </select>
                  <Button color="bg-blue-500 hover:bg-blue-300" label="Search" onClick={serchImages} />
                  <Link href="/formulario">
                          <Button color="bg-green-500 hover:bg-green-300" label="Add New" />
                  </Link>
              </div>
          </section>
          <section className="grid grid-cols-4 gap-8">
                {renderImageCards()}
          </section>   
        </Template>
    </AuthenticatedPage>
  )
}