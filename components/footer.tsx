import Image from 'next/image'
import ArrowLink from './ArrowLink';

function Footer() {
    return (
        <footer className='pt-16 border-t border-grey'>
            <div className='container'>
                <div className='grid grid-cols-5 pb-16'>
                    <div className='flex flex-col gap-6'>
                        <div className='font-medium'>Мероприятия</div>
                        <nav>
                            <ul className='grid gap-3'>
                                <li><a href="#">Концерты</a></li>
                                <li><a href="#"> Выставки</a></li>
                                <li><a href="#">Ивенты</a></li>
                                <li><a href="#">Выстуления</a></li>
                                <li><a href="#">Театры</a></li>
                            </ul>
                        </nav>
                        <ArrowLink text='Все мероприятия →'></ArrowLink>                         
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='font-medium'>Клубы</div>
                        <nav>
                            <ul className='grid gap-3'>
                                <li><a href="#">Йога</a></li>
                                <li><a href="#">Бизнес</a></li>
                                <li><a href="#">Спорт</a></li>
                                <li><a href="#">Общение</a></li>
                                <li><a href="#">Хобби</a></li>
                                <li><a href="#">Психология</a></li>
                            </ul>
                        </nav>
                        <ArrowLink text='Все клубы →'></ArrowLink>                         
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='font-medium'>Организаторы</div>
                        <nav>
                            <ul className='grid gap-3'>
                                <li><a href="#">KazZentre</a></li>
                                <li><a href="#">New Life</a></li>
                                <li><a href="#">Whatisnew</a></li>
                                <li><a href="#">Yep</a></li>
                                <li><a href="#">NEWS</a></li>
                            </ul>
                        </nav>
                        <ArrowLink text='Все организаторы →'></ArrowLink>                         
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='font-medium'>Трансляции</div>
                        <nav>
                            <ul className='grid gap-3'>
                                <li><a href="#">Игры</a></li>
                                <li><a href="#">Концерты</a></li>
                                <li><a href="#">Тренинги</a></li>
                                <li><a href="#">Компании</a></li>
                                <li><a href="#">Выставки</a></li>
                                <li><a href="#">Благотворительность</a></li>
                            </ul>
                        </nav>
                        <ArrowLink text='Все трансляции →'></ArrowLink>                         
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='font-medium'>Сервисы</div>
                        <nav>
                            <ul className='grid gap-3'>
                                <li><a href="#">Карта</a></li>
                                <li><a href="#">Организаторам</a></li>
                            </ul>
                        </nav>                        
                    </div>
                </div>
                
                <div className="flex justify-center items-center gap-16">
                    <div className="flex items-center text-2xl text-theme font-medium cursor-pointer">
                        <Image src='/assets/images/icons/fb.svg' width='13' height='13' className='mr-4 h-5'  alt='Icon'></Image>
                        Фейсбук
                    </div>
                    <div className="flex items-center text-2xl text-theme font-medium cursor-pointer">
                        <Image src='/assets/images/icons/instagramm.svg' width='13' height='13' className='mr-4 h-5'  alt='Icon'></Image>
                        Инстаграм
                    </div>
                    <div className="flex items-center text-2xl text-theme font-medium cursor-pointer">
                        <Image src='/assets/images/icons/telegram.svg' width='13' height='13' className='mr-4 h-5'  alt='Icon'></Image>
                        Телеграм
                    </div>
                    <div className="flex items-center text-2xl text-theme font-medium cursor-pointer">
                        <Image src='/assets/images/icons/twitter.svg' width='13' height='13' className='mr-4 h-5' alt='Icon'></Image>
                        Твиттер
                    </div>
                </div>
                <ul className="flex justify-center items-center gap-2 text-2xl py-8"> 
                    <li>Партнёрская программа •</li>
                    <li>Реклама •</li>
                    <li>Пресс-центр •</li>
                    <li>Поддержка •</li>
                    <li>Правила •</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <p className='text-center pb-4 text-2xl'>© 2022, EventStore — сервис по поиску мероприятий</p>
            </div>
            <div className="w-full bg-black flex items-center justify-center py-6 gap-16">
                <div className="flex items-center gap-4">
                    <Image src="/assets/images/icons/google.svg" alt="icon" width="20" height="20"></Image>
                    <span className="text-2xl font-bold text-white">Google play</span>
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/assets/images/icons/apple.svg" alt="icon" width="20" height="20"></Image>
                    <span className="text-2xl font-bold text-white">App store</span>
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/assets/images/icons/build.svg" alt="icon" width="20" height="20"></Image>
                    <span className="text-2xl font-bold text-white">Организаторам</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;