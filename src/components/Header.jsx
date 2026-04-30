import coin from '../assets/coin.svg'

function Header() {

    const cards = [
        {
            id: 1,
            text: 'Earn per tap',
            number: '+12',
            img: coin,
            variant: 'text-[#F79841]'
        },
        {
            id: 2,
            text: 'Coins to level up',
            number: '10 M',
            variant: 'text-[#6F72E2]'
        },
        {
            id: 3,
            text: 'Profit per hour',
            number: '+636',
            img: coin,
            variant: 'text-[#84CB69]'
        },
    ]

    return (
        <>
            <div className='text-white'>
                <p className='font-semibold text-center pt-5'>Hamster Kombat</p>

                <div className='flex gap-2 justify-center mt-10'>
                    {
                        cards.map((card) => (
                            <div className='bg-[#32363C] w-full max-w-[117px] px-3 py-2 rounded-[10px] text-[11px] flex flex-col items-center justify-center'>
                                <p className={`${card.variant}`}>{card.text}</p>
                                <div className='flex items-center justify-center gap-1 mt-1'>
                                    <img src={card.img} className='w-4' alt="" />
                                    <p>{card.number}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Header