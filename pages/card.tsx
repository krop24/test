import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Button from '../components/button'
import ButtonBordered from '../components/borderedButton'
import ButtonBorderedIcon from '../components/borderedButtonIcon'

export default function Card() {
    return (
        <>
            <Head>
                <title>Event Store</title>
                <meta name='description' content='Event Store' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header></Header>
            
            <section className='pt-52 pb-28'>
                <div className="container">
                    <div className="flex pb-40 items-center">
                        <Link href='/'> 
                            <Image src='/assets/images/icons/right-arrow.svg' alt='Arrow right' height='20' width='22' className='rotate-180 cursor-pointer'></Image>
                        </Link>
                        <h1 className='theme-font card-heading ml-20 ml-36 font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h1>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col  w-3/6">
                            <div className="flex flex-col gap-14 py-14 border-t border-b border-grey">
                                <div className="flex justify-between items-center">
                                    <span className='font-medium'>Дата</span><span>17.12.2022</span> 
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className='font-medium'>Тематика</span><span>Мастер-класс</span> 
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className='font-medium'>Организатор</span><span>@ioga_master</span> 
                                </div>
                            </div>
                            <div className="py-14 border-b border-grey text-4xl">
                                <div className='font-medium pb-8'>Программа ивента</div>
                                <ul className='list-disc pl-16 flex flex-col gap-4'>
                                    <li>Изучение основ йоги</li>
                                    <li>Как йога влияет на психику</li>
                                    <li>Что происходит с вашим организмом</li>
                                    <li>Советы от специалиста по клиссической йоги</li>
                                </ul>
                            </div>
                            <div className="py-14 border-b border-grey text-4xl">
                                <div className='font-medium pb-8'>Какие удобства вас ждут</div>
                                <ul className='grid grid-cols-2 gap-8 pb-8'>
                                    <li className='flex items-center'>
                                        <Image src='/assets/images/icons/green.svg' alt='/' className='mr-4' width='24' height='24'></Image>
                                        Изучение основ йоги
                                    </li>
                                    <li className='flex items-center'>
                                        <Image src='/assets/images/icons/pat.svg' alt='/' className='mr-4' width='24' height='24'></Image>
                                        Как йога влияет на психику
                                    </li>
                                    <li className='flex items-center'>
                                        <Image src='/assets/images/icons/car.svg' alt='/' className='mr-4' width='24' height='24'></Image>
                                        Что происходит с вашим организмом
                                    </li> 
                                    <li className='flex items-center'> 
                                        <Image src='/assets/images/icons/food.svg' alt='/' className='mr-4' width='24' height='24'></Image>
                                        Советы от специалиста по клиссической йоги
                                    </li>
                                </ul>
                                <ButtonBordered text='Показать все удобства: 67'></ButtonBordered>
                            </div>
                            <div className="py-14 border-b border-grey">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image src='/assets/images/yoga.png' alt='/' width='64' height='64' className='rounded-full w-24 h-24'></Image>
                                        <div className="flex flex-col pl-8">
                                            <div className='text-4xl pb-2'><span className="font-bold">Организатор:</span> ioga_master</div>
                                            <div className='text-black-grey text-2xl'>Вступление в сообщество: февраль 2014 г.</div>
                                        </div>
                                    </div>
                                    <button className='py-2 px-6 text-white bg-theme rounded-3xl border border-transparent text-2xl transition-all hover:text-theme hover:bg-white hover:border-grey'>Подписаться</button>
                                </div>
                                <div className="flex gap-6 pl-6 mt-2">
                                    <div className="flex items-center">
                                        <Image src='/assets/images/icons/star-rev.svg' alt='/' width='16' height='16' className='mr-4 w-6 h-6'></Image>
                                        117 отзывов
                                    </div>
                                    <div className="flex items-center">
                                        <Image src='/assets/images/icons/verify.svg' alt='/' width='16' height='16' className='mr-4 w-6 h-6'></Image>
                                        117 отзывов
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-4 mt-10 pb-16'>
                                    <li>
                                        Язык: Русский
                                    </li>
                                    <li>
                                        Быстрота ответов: 100%
                                    </li>
                                    <li>
                                        Время ответа: в течение часа    
                                    </li>
                                </ul>
                                <ButtonBordered text='Связаться с организатором'></ButtonBordered>
                                <ButtonBorderedIcon  text='В целях безопосности не переводите деньги вне системы Event store' 
                                    icon='/assets/images/icons/home.svg' 
                                    hoverIcon='/assets/images/icons/home-white.svg'
                                    className='mt-16 text-black'></ButtonBorderedIcon>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Image src='/assets/images/yoga.png' width='532' height='329' alt='/' className='rounded-3xl mb-8'></Image>
                            <div className="flex items-center justify-between pb-8">
                                <div className="flex flex-col">
                                    <span className='font-medium mb-4'>Адрес</span>
                                    г. Алматы, ул. Пушкина 18
                                </div>
                                <ButtonBordered text='Показать на карте'></ButtonBordered>
                            </div>
                            <div className="flex gap-4">
                                <div className='like-btn'>
                                    <Image src='/assets/images/icons/like.svg' width='56' height='56' alt='/' className=''></Image>
                                    <Image src='/assets/images/icons/like-hover.svg' width='56' height='56' alt='/' className=''></Image>
                                </div>
                                <Link href='/buy' className='w-full h-full'><Button text='Записаться' className='w-full h-full py-3'></Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-96 pb-96'> 
                <div className="container ">
                    <div className="flex flex-col pt-24 border-t border-grey  max-w-screen-lg">
                        <div className="flex items-center font-medium pb-16">
                            <Image src='/assets/images/icons/star.svg' alt='/' width='28' height='28' className='mr-4'></Image>
                            5.0 · 9 отзывов
                        </div>

                        <div className="grid grid-cols-2 gap-8 gap-x-40">
                            <div className="flex items-center justify-between">
                                <div className="flex">Чистота</div>
                                <div className="flex items-center">
                                    <div className="w-36 bg-black h-2 rounded-2xl mr-4"></div>
                                    5.0
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex">Общение</div>
                                <div className="flex items-center">
                                    <div className="w-36 bg-black h-2 rounded-2xl mr-4"></div>
                                    5.0
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex">Местоположение</div>
                                <div className="flex items-center">
                                    <div className="w-36 bg-black h-2 rounded-2xl mr-4"></div>
                                    4.8
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex">Прибытие</div>
                                <div className="flex items-center">
                                    <div className="w-36 bg-black h-2 rounded-2xl mr-4"></div>
                                    5.0
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex">Соотношение цена/качество</div>
                                <div className="flex items-center">
                                    <div className="w-36 bg-black h-2 rounded-2xl mr-4"></div>
                                    5.0
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-20 gap-x-40 pt-24 pb-36">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <Image src='/assets/images/icons/tom.svg' alt='/' width='40' height='40' className='mr-4 w-20 h-20'></Image>
                                    <div className="flex flex-col ">
                                        <span className='mb-1 font-medium'>Tom</span>
                                        <span className="text-black-grey text-2xl">октябрь 2022 г.</span>
                                    </div> 
                                </div>
                                <p className='pt-8 pb-4 text-2xl'>
                                    Мэтт и Джейми приняли большую группу из нас (всего 19 человек) за абсолютно волшебные выходные. Люксы были великолепны с большим пространством и красивой 
                                </p>
                                <div className="cursor-pointer font-medium flex items-center text-2xl">Показать еще <Image src='/assets/images/icons/arrow-right-tr.svg' alt='/' width='12' height='12' className='ml-1'></Image></div>
                            </div>
                        </div>
                        <div className="flex w-fit mx-auto align-items-center justify-center">
                            <ButtonBordered text='Показать все отзывы: 15'></ButtonBordered>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}