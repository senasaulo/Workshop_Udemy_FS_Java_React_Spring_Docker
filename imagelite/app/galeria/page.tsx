'use client'

import{Template , ImageCard} from '@/components'
import {ImageDTO} from '@/resources/image/image.resources'
import {useImageService} from '@/resources/image/image.service'
import {useState} from 'react'

export default function Galeria() {
  const imageService = useImageService();
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
      <div >
        <main >
          <Template loading={loading}>
            <section className="flex flex-col items-center justify-center my-5">
                <div className="flex space-x-4 ">
                    <input type="text"                     
                           onChange={event => setQuery(event.target.value)}
                           className="border px-5 py-2 rounded-lg text-gray-500 placeholder:text-gray-500" placeholder="Buscar imagens" />             
                    <select className="border px-4 py-2 rounded-lg text-gray-900" onChange={event => setExtension(event.target.value)}>
                      <option value="">All Formats</option>
                      <option value="JPEG">JPEG</option>
                      <option value="PNG">PNG</option>
                      <option value="GIF">GIF</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300" onClick={serchImages}>Search</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-300">Add New</button>
                </div>
            </section>
            <section className="grid grid-cols-4 gap-8">
              {renderImageCards()}
            </section>   
          </Template>
        </main>
      </div>
  )
}