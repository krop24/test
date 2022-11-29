interface options {
    text: string,
    link?: string
}

function ArrowLink({text, link = '#'}:options) {
    return (
        <a href={link} className='text-theme font-bold'>
            {text}
        </a>
    )
}

export default ArrowLink