import dynamic from 'next/dynamic'

const HomeView = dynamic(() => import('./../views/home'))

export default () => <HomeView />
