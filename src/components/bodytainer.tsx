import React from 'react'

const Bodytainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='px-9 max-w-6xl mx-auto mt-[150px] mb-[92px]'>
      <main className="grid md:grid-cols-2 gap-12">
        {children}
      </main>
    </div>
  )
}

export default Bodytainer