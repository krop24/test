interface ButtonText {
    text: string,
    className?:string
}

function Button(props:ButtonText) {
    return ( 
        <button 
        className={'py-6 px-14 bg-theme text-white border border-transparent rounded-3xl transition-all hover:text-theme hover:bg-white hover:border hover:border-grey ' + props.className}>
            {props.text}            
        </button>
    )
}

export default Button