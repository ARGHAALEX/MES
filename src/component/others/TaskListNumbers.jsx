import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between p-5 screen gap-5'>
      <div className=' w-[45%] py-6 px-10 bg-rose-500 rounded-xl'>
         <h2 className='text-3xl font-semibold'>1</h2>
         <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

      <div className=' w-[45%] py-6 px-10 bg-amber-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>3</h2>
         <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className=' w-[45%] py-6 px-10 bg-lime-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>0</h2>
         <h3 className='text-xl font-medium'>Compleate Task</h3>
      </div>
      <div className=' w-[45%] py-6 px-10 bg-cyan-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>4</h2>
         <h3 className='text-xl font-medium'>New Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers