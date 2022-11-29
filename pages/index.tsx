import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Button  from '../components/button'
import ButtonBorderedIcon from '../components/borderedButtonIcon'
import ButtonBordered from '../components/borderedButton'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Event Store</title>
        <meta name='description' content='Event Store' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <main>
        <section className='flex justify-center flex-col items-center relative pt-52'>
          <div className='container'>
            <h1 className='text-center pb-1.5'>Найди <span className='theme-color'>новое</span> для себя</h1>
            <p className='text-center pb-5'>Сервис по поиску мероприятий</p>
            <div className='flex gap-6 pb-5'>
              <div className='relative'>
                <input type='text' placeholder='Место' />
                <Image src='/assets/images/icons/map.svg' className="absolute top-1/2 right-8 -translate-y-1/2" width='24' height='24' alt="icon"></Image>
              </div>
              <div className='relative'>
                <input type='text' placeholder='Даты' />
                <Image src='/assets/images/icons/date.svg' className="absolute top-1/2 right-8 -translate-y-1/2" width='34' height='34' alt="icon"></Image>
              </div>
              <div className='relative'>
                <input type='text' placeholder='Место' />
                <Image src='/assets/images/icons/topic.svg' className='absolute top-1/2 right-8 -translate-y-1/2' width='34' height='34' alt="icon"></Image>
              </div>
              <Button text="Найти новое"></Button>
            </div>
            <div className="flex items-center w-fit mx-auto">
              <input type="checkbox" id="checkbox"  className='w-8 h-8 cursor-pointer'/>
              <label htmlFor="checkbox" className="ml-2.5 cursor-pointer">Также искать онлайн мероприятия</label>
            </div>
          </div>
          <div className="w-full border-y border-grey mt-16">
            <div className='lg-container'>
                <div className="w-full flex justify-between gap-24 flex-wrap py-6">
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/road.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Приключения</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/android.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">IT сфера</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/two-heart.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Романтика</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/message.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Клубы</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/map.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Новое</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/cafe.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Кулинария</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/bycicle.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Мотоциклы</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/circle.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Тренинги</h4>
                  </div>
                  <div className="flex flex-col justify-center items-center cursor-pointer transition-all hover:opacity-70">
                    <Image src='/assets/images/icons/bar.svg' alt="icon" width="24" height="24" className="mb-4"></Image>
                    <h4 className="text-center">Развлечение</h4>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section className='pt-40 pb-96'>
          <div className="container">
            <div className="grid grid-cols-4 gap-12">
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
              <Link href='/card' className="w-full p-6 border border-grey rounded-3xl relative">
                <Image src='/assets/images/yoga.png' width='283' height='386' alt='Event' className='w-full object-cover object-center rounded-xl mb-5'></Image>
                <Image src='/assets/images/icons/white-heart.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer transition-all hover:opacity-0'></Image>
                <Image src='/assets/images/icons/white-heart-filled.svg' width='20' height='20' alt='heart' className='absolute top-10 right-10 cursor-pointer opacity-0 transition-all hover:opacity-100'></Image>
                <h4 className='font-medium'>Начни изучать свой внутренний мир с помощью классической йоги</h4>
                <div className="flex items-center gap-3 my-4  text-2xl">
                  <div className="py-0 px-4 text-white bg-theme rounded-3xl">Мастер-класс</div>
                  @ioga_master
                </div>
                <div className="flex items-center text-2xl">
                  <Image src='/assets/images/icons/place.svg' width='18' height='18' alt='map icon' className='mr-4'></Image>
                  Алматы <span className='px-4'>|</span> Бесплатно
                </div>
              </Link>
            </div> 
            <div className='w-fit mx-auto mt-10'>
              <ButtonBorderedIcon text='Найдите мероприятие на любой вкус'></ButtonBorderedIcon>
            </div>
          </div>
        </section>

        <section className='pb-96'>
          <div className="container">
            <div className="flex items-center">
              <div>
                <h2 className='heading mb-6'>
                  найди <span className='theme-color'>мероприятие </span> 
                  рядом с вами
                </h2>
                <p className='mb-12'>
                  Ищи новые мероприятия рядом с вами
                  в реальном времени и сразу торопись к приключениям 
                </p>
                <ButtonBordered text='Поиск по гео'></ButtonBordered>
              </div>
              <Image src='/assets/images/map.jpg' width='853' height='373' alt='Map' className='border border-grey rounded-3xl object-cover object-center'></Image>
            </div>
          </div>
        </section>

        <section className='pb-64'>
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <h2 className='text-center pb-12'>Организуй <span className='theme-color'>event</span><br/> и приведи новую публику</h2>
              <div className="px-40 flex justify-between w-full relative">
                <div className='absolute h-px w-full bg-theme top-8 left-0'></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-theme theme-font text-white flex items-center justify-center text-6xl">
                    <span >1</span>
                  </div>
                  <div className="font-medium text-3xl">Регистрация</div>
                </div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-theme theme-font text-white flex items-center justify-center text-6xl">
                    <span >2</span>
                  </div>
                  <div className="font-medium text-3xl">Верификация </div>
                </div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-theme theme-font text-white flex items-center justify-center text-6xl">
                    <span>3</span>
                  </div>
                  <div className="font-medium text-3xl">Соглашение</div>
                </div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-theme theme-font text-white flex items-center justify-center text-6xl">
                    <span>4</span>
                  </div>
                  <div className="font-medium text-3xl">Подтвреждение</div>
                </div>
              </div>  
              <p className='pt-16 pb-24 text-center'>
                Ищи новые мероприятия рядом с вами<br/>
                в реальном времени и сразу торопись к приключениям 
              </p>
              <ButtonBordered text="Стать организатором"></ButtonBordered>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
