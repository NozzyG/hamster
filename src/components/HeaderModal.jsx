import iconX from '../assets/iconX.svg'
import coin from '../assets/coin.svg'


function HeaderModal({ setModalBox }) {


    const earningInfo = [
        {
            id: 1,
            img: coin,
            txt: 'lvl 1',
            num: '+2',
            amount: '-1000'
        },
        {
            id: 2,
            img: coin,
            txt: 'lvl 2',
            num: '+3',
            amount: '-2500'
        },
        {
            id: 3,
            img: coin,
            txt: 'lvl 3',
            num: '+4',
            amount: '-6000'
        },
    ]

    return (
        <>
            <div className="w-[240px] h-[223px] rounded-[20px] bg-[#2C2F35] shadow-[4px_4px_10px_5px_rgba(0,0,0,0.25)] border border-[rgba(133,117,117,0.43)] absolute left-7 top-[175px] z-10">
                <img src={iconX} className='absolute top-[45px] right-[25px] cursor-pointer w-4' onClick={() => setModalBox(false)} alt="" />

                <div className='mt-20 flex flex-col gap-3 pt-3'>
                    {
                        earningInfo.map((earnnings) => (
                            <div className='flex justify-between px-2 bg-[#32363C] py-[6px] rounded-3xl mx-5'>
                                <div className='flex gap-2'>
                                    <p className='text-[10px] font-semibold border-r border-[rgba(255,255,255,0.2)] pr-2'>{earnnings.txt}</p>
                                    <div className='flex gap-1'>
                                        <p className='text-[11px] font-semibold'>{earnnings.num}</p>
                                        <img src={earnnings.img} className='w-4' alt="" />
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-[11px] font-semibold'>{earnnings.amount}</p>
                                    <img src={earnnings.img} className='w-4' alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HeaderModal