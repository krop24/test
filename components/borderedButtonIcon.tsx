import Image from 'next/image'

interface ButtonContent { 
    text: string,
    icon?: string,
    hoverIcon?: string,
    className?: string
}

function ButtonBorderedIcon({text, icon='/assets/images/icons/topic.svg', hoverIcon='/assets/images/icons/topic-white.svg', className=''}:ButtonContent) {
    let elClass:string = 
    'button_bordered text-start flex items-center py-6 px-14 rounded-3xl text-theme bg-white border  transition-all  border-grey hover:bg-theme hover:text-white hover:border hover:border-transparent ';
    
    return ( 
        <button className={elClass + className} >
            {text}
            <Image src={icon} alt='icon' width='34' height='34' className='button__image ml-1'></Image>
            <Image src={hoverIcon} alt='icon' width='34' height='34' className='button__image_hover ml-1'></Image>                       
        </button>
    )
}

export default ButtonBorderedIcon