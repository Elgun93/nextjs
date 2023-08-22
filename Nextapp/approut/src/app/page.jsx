import Image from 'next/image';
import Link from 'next/link';


export function generateMetadata() {

    return {
      title: 'Logistic LV company',
    };
}


export default function Home() {
  return (

    <section>

        <div className='bg-green-700 text-2xl'>

          <h2 className='text-4xl'>Home</h2>
          {/* <Link className="text-red-400 text-3xl" href='/blog'>Blog</Link> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti, nesciunt quod reprehenderit ipsam omnis impedit perspiciatis minus animi sed!
        </div>

    </section>

  )
}
