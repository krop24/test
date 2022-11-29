import Image from 'next/image'

interface ButtonContent { 
    text: string,
}

function ButtonBordered(props:ButtonContent) {
    return ( 
        <button className="button_bordered flex items-center py-6 px-14 rounded-3xl text-theme bg-white border  transition-all  border-grey hover:bg-theme hover:text-white hover:border hover:border-transparent">
            {props.text}
        </button>
    )
}

export default ButtonBordered