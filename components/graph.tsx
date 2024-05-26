'use client'

import Image from 'next/image'
import React from 'react'


const Graph = () => {
    return (
        <div className='grid md:grid-cols-2 gap-4 md:p-12'>
            <div>
                <Image
                    src='/graph.svg'
                    width={500}
                    height={500}
                    alt='graph'
                    className='h-full w-full'
                />
            </div>

            <div>
                <div className='flex flex-col gap-4 p-12'>
                    <div className='flex flex-col gap-1 text-4xl md:text-6xl'>
                        <h1>
                            Access
                        </h1>
                        <h1>
                            Alternative
                        </h1>
                        <h1>
                            Investments
                        </h1>
                    </div>

                    <p>
                        Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities
                        <br /> <br />
                        Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Graph
