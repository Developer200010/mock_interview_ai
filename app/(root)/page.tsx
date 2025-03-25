import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterview } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
    <section className='card-cta p-3'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>
          Get Interview-Ready with AI-Powered Practice & Feedback.
        </h2>
        <p className='text-lg'>Practice on real interview questions & get instant feedback</p>
        <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview">Start Interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
    </section>

    <section className='flex flex-col gap-6 mt-8 p-2'>
      <h2 className='text-center underline'>Your Interviews</h2>

      <div className='interviews-section flex flex-wrap gap-4 justify-start w-full max-w-6xl mx-auto'>
        {dummyInterview.map((interview,i)=>(
          <InterviewCard {...interview} key={i}/>
        ))}
        
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8 p-2'>
      <h2 className='text-center underline'>Take an interview</h2>
      <div className="interviews-section flex flex-wrap gap-4 justify-start w-full max-w-6xl mx-auto">
      {dummyInterview.map((interview,i)=>(
          <InterviewCard {...interview} key={i}/>
        ))}      </div>
    </section>
    </>
  )
}

export default page; 