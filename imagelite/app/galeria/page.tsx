import{Template , ImageCard} from '@/components'

export default function Galeria() {
  return (
    <div >
      <main >
        <Template>
          <section className="grid grid-cols-4 gap-8">
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
          </section>   
       </Template>
      </main>
    </div>
  )
}