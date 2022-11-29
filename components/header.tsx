import Image from 'next/image'

function Header() { 
    return (
        <header className='absolute top-0 left-0 z-10 w-full py-10'>
            <div className='container'> 
                <div className='flex justify-between'>
                    <Image src='/assets/images/icons/logo.svg' width='246' height='39' alt='Event Store logo'></Image>
                    <div className="flex items-center gap-6">
                        <a href='#' className='h-fit hover:underline'>Организовать ивент</a>
                        <a href='#' className='transition-all hover:opacity-70'>
                            <Image src='/assets/images/icons/user.svg' width='34' height='34' alt="Log in to account"></Image>
                        </a>
                        <a href='#' className='transition-all hover:opacity-70'>
                            <Image src='/assets/images/icons/ethernet.svg' width='34' height='34' alt="Log in to account"></Image>
                        </a>
                    </div>
                </div>
            </div> 
        </header>   
    );
}

export default Header;