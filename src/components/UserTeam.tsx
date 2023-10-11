import Image from 'next/image'
import React from 'react'

const UserTeam = ({ imgUrl, username, position }: { imgUrl: string, username: string, position: string }) => {
    return (
        <div className='flex flex-col flex-1 w-[320px] lg:w-full col-span-1 bg-team-bg'>
            <div className='w-full h-[25rem]'>
                <Image className='w-full h-full object-cover object-center' src={imgUrl} alt={username} width={320} height={400} />
            </div>
            <div className="py-6 flex flex-col items-center gap-2">
                <h1 className='text-xl font-medium text-center '>{username}</h1>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default UserTeam
