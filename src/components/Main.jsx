import { useState } from 'react'
import coin from '../assets/coin.svg'
import hamster from '../assets/hamster.svg'
import './Main.css'
import Modal from './Modal'

function Main({ setModalOpen, isModalOpen }) {

    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-28 mt-12'>
                <div className='flex gap-4 items-center'>
                    <img src={coin} className='w-12' alt="" />
                    <p className='text-[40px] font-bold text-white'>{count}</p>
                </div>

                <div className='relative'>
                    <img src={hamster} onClick={() => { setCount(count + 1); setShow(true); setTimeout(() => { setShow(false) }, 900) }} className='cursor-pointer' alt="" />
                    <p className={show == true ? 'first' : 'second'}>
                        +1
                    </p>
                </div>

                {
                    isModalOpen && (
                        <Modal setModalOpen={setModalOpen} />
                    )
                }
            </div >
        </>
    )
}

export default Main