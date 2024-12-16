import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@/containers/home-page/HomePage'))

const Home = () => {
  return <HomePage />
}

export default Home
