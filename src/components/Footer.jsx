import vector from '../assets/Vector.svg'
import union from '../assets/Union.svg'
import mine from '../assets/Group.svg'
import friends from '../assets/Group(1).svg'
import earn from '../assets/Group 8.svg'
import airdrop from '../assets/image 2.svg'

function Footer() {


    const boxes = [
        {
            id: 1,
            img: union,
            text: 'Exchange'
        },
        {
            id: 2,
            img: mine,
            text: 'Mine'
        },
        {
            id: 3,
            img: friends,
            text: 'Friends'
        },
        {
            id: 4,
            img: earn,
            text: 'Earn'
        },
        {
            id: 5,
            img: airdrop,
            text: 'Airdrop'
        },
    ]

    return (
        <>
            <div className='px-2 pt-16'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center text-white gap-2'>
                        <img src={vector} alt="" />
                        <p className='text-sm font-semibold'>6500 / 6500</p>
                    </div>
                    <p className='text-white text-sm font-semibold'>Boost</p>
                </div>

                <div className='mt-7'>
                    <div className='flex  justify-around items-center bg-[#32363CB2] py-2 rounded-xl'>
                        {
                            boxes.map((box) => (
                                <div key={box.id} className='flex flex-col gap-1 items-center hover:bg-[#21242980] text-[11px] text-gray-400  hover:text-white w-[65px] rounded-lg py-[6px] cursor-pointer'>
                                    <img src={box.img} className='w-6 h-6 object-contain' />
                                    <p>{box.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer