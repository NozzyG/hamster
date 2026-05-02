import iconX from '../assets/iconX.svg'
import coin from '../assets/coin.svg'
import img1 from '../assets/Vector(1).png'
import img2 from '../assets/image 5.svg'
import img3 from '../assets/x10.svg'

function Modal({ setModalOpen }) {

    const modalInfo = [
        {
            id: 1,
            img: img1,
            title: 'Тоp 10 cmc pairs',
            text: 'Profit per hour',
            profit: '120',
            ivl: 'lvl 1',
            img2: coin,
            amount: '192'
        },
        {
            id: 2,
            img: img2,
            title: 'Mene coins',
            text: 'Profit per hour',
            profit: '376',
            ivl: 'lvl 1',
            img2: coin,
            amount: '2.3K'
        },
        {
            id: 3,
            img: img3,
            title: 'Margin trading x10',
            text: 'Profit per hour',
            profit: '997',
            ivl: 'lvl 1',
            img2: coin,
            amount: '11.2K'
        },
    ]

    return (
        <>
            <div className="bg-[#2C2F35] w-[375px] h-[502px] border border-[rgba(133,117,117,0.43)] rounded-[20px] absolute bottom-[125px] shadow-[4px_4px_10px_5px_rgba(0,0,0,0.25)]">
                <div className='relative'>
                    <img src={iconX} className='absolute top-[35px] right-[33px] cursor-pointer' onClick={() => setModalOpen(false)} alt="" />
                </div>





                <div className='mt-24 flex flex-col items-center gap-3'>
                    {
                        modalInfo.map((modal) => (
                            <div className='bg-[#32363C] rounded-2xl pt-3 mx-5 h-[107px] w-[319px]'>
                                <div className='flex border-b border-[rgba(255,255,255,0.2)] pb-2 pl-5'>
                                    <img src={modal.img} className='w-10' alt="" />
                                    <div className='pl-8'>
                                        <p className='text-[9px] font-normal pb-2 text-white'>{modal.title}</p>
                                        <p className='text-[7px] font-medium text-[rgba(255,255,255,0.2)]'>{modal.text}</p>
                                        <div className='flex items-center gap-1 pt-1'>
                                            <img src={coin} className='w-3' alt="" />
                                            <p className='text-[8px] text-white'>{modal.profit}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5 pl-7 py-3'>
                                    <p className='border-r border-[rgba(255,255,255,0.2)] pr-5 text-[9px] text-white font-semibold'>{modal.ivl}</p>
                                    <div className='flex items-center gap-1'>
                                        <img src={modal.img2} className='w-4' alt="" />
                                        <p className='text-[11px] font-semibold text-white'>{modal.amount}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Modal