import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Button from '../components/button'
import ButtonBorderedIcon from '../components/borderedButtonIcon'

export default function Buy() {
    return (
        <>
            <Head>
                <title>Event Store</title>
                <meta name='description' content='Event Store' />
                <link rel='icon' href='/favicon.ico' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
            </Head>
            <Header></Header>
            
            <section className='pt-52 pb-28'>
                <div className="container">
                    <div className="flex pb-40 items-center">
                        <Link href='/card'> 
                            <Image src='/assets/images/icons/right-arrow.svg' alt='Arrow right' height='20' width='22' className='rotate-180 cursor-pointer'></Image>
                        </Link>
                        <h1 className='theme-font card-heading ml-20 ml-36 font-medium'>Подтвреждение</h1>
                    </div>
                    
                    <div className="flex justify-between ">
                        <div className="flex flex-col  w-3/6">
                            <ButtonBorderedIcon 
                                text='Все даннные не передаются третьим лицам' 
                                icon='/assets/images/icons/home.svg' 
                                hoverIcon='/assets/images/icons/home-white.svg'
                                className='text-black flex justify-between'></ButtonBorderedIcon>
                            <div className="py-14 border-b border-grey">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-4">
                                        <span className='font-medium pb-4 text-4xl'>Дата</span> 
                                        <span>17.12.2022</span>
                                    </div>
                                    <a href="#" className='link'>Изменить</a>
                                </div>
                                <div className="flex justify-between items-center pt-8">
                                    <div className="flex flex-col gap-4">
                                        <span className='font-medium text-4xl'>2 персоны</span> 
                                        <span>Оффлайн, 2 ряд, 3 место</span>
                                        <span>Оффлайн, 2 ряд, 4 место</span>
                                    </div>
                                    <a href="#" className='link'>Изменить</a>
                                </div>
                                <div className="flex justify-between items-center pt-8">
                                    <div className="flex flex-col gap-4">
                                        <span className='font-medium text-4xl'>Адрес</span> 
                                        <span>г. Алматы, ул. Пушкина 18</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col pt-14">
                                <div className='font-medium pb-4 text-4xl'>Способ оплаты</div>
                                <div className="flex text-black-grey items-center input justify-between">
                                    Выбрать способ оплаты
                                    <Image src='/assets/images/icons/arrow-down.svg' alt='/' width='34' height='34'></Image>
                                </div>
                            </div>
                            <div className="flex flex-col pt-14">
                                <div className='font-medium pb-4 text-4xl'>Способ оплаты</div>
                                <input type="text" placeholder='E-mail' className='w-full input'/>
                            </div>
                        </div>

                        <div className="flex flex-col w-5/12 h-fit">
                            <div className="flex flex-col border border-grey p-12 rounded-3xl">
                                <div className="flex items-center pb-12">
                                    <Image src='/assets/images/yoga.png' width='532' height='329' alt='/' className='rounded-3xl mb-8 w-60 h-60 object-cover mr-4'></Image>
                                    <div className="flex flex-col">
                                        <h4 className='font-medium text-5xl'>Начни изучать свой внутренний мир с помощью йоги</h4>
                                        <div className="flex items-center gap-3 my-4  text-2xl">
                                        <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                                        @ioga_master
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-12 border-t border-grey">
                                    <span className='font-medium text-4xl'>1650 тг</span> 
                                    <span>Оффлайн, 2 ряд, 3 место</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-16 text-4xl font-medium">
                                Напомнить за день до мероприятия
                                <div className="thumler">
                                    <Image src='/assets/images/icons/switch-1.svg' width='32' height='20' alt='/'></Image>
                                    <Image src='/assets/images/icons/switch-2.svg' width='32' height='20' alt='/'></Image>
                                </div>
                            </div>
                            <Button text='Записаться' className='w-full'></Button>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}