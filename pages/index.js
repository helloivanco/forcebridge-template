export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <img src='/forcebridge.svg' />

        <p className='mt-10 text-2xl'>NextJS</p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          <a
            href='https://nextjs.org/docs'
            className='bg-cell-pattern bg-cover text-white p-6 mt-6 text-left border w-96 rounded-xl hover:text-nervos-green focus:text-nervos-green transition duration-500 ease-in-out'>
            <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
            <p className='mt-4 text-xl'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='bg-cell-pattern bg-cover text-white p-6 mt-6 text-left border w-96 rounded-xl hover:text-nervos-green focus:text-nervos-green transition duration-500 ease-in-out'>
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='bg-cell-pattern bg-cover text-white p-6 mt-6 text-left border w-96 rounded-xl hover:text-nervos-green focus:text-nervos-green transition duration-500 ease-in-out'>
            <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
            <p className='mt-4 text-xl'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='bg-cell-pattern bg-cover text-white p-6 mt-6 text-left border w-96 rounded-xl hover:text-nervos-green focus:text-nervos-green transition duration-500 ease-in-out'>
            <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
            <p className='mt-4 text-xl'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <p className='mt-16 text-2xl'>Tailwind CSS</p>
        <div className='max-w-4xl justify-center flex flex-wrap space-y-2 mt-4 mb-12'>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-green'></div>
            <div className='text-nervos-green ml-1'>nervos-green</div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-greenlight'></div>
            <div className='text-nervos-greenlight ml-1'>nervos-greenlight</div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-greyquantum'></div>
            <div className='text-nervos-greyquantum ml-1'>
              nervos-greyquantum
            </div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-greylight'></div>
            <div className='text-nervos-greylight ml-1'>nervos-greylight</div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-greydark'></div>
            <div className='text-nervos-greydark ml-1'>nervos-greydark</div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-purple'></div>
            <div className='text-nervos-purple ml-1'>nervos-purple</div>
          </div>
          <div className='flex w-48 items-center'>
            <div className='w-12 h-12 rounded-full bg-nervos-indigo'></div>
            <div className='text-nervos-indigo ml-1'>nervos-indigo</div>
          </div>
        </div>
      </main>

      <footer className='mt-12 flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://nervos.org'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/nervos-logo-black.svg'
            alt='Nervos Logo'
            className='h-10'
          />
        </a>
      </footer>
    </div>
  );
}
