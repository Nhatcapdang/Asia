/** @format */

import dynamic from 'next/dynamic'
import Loading from './loading'

const Home = dynamic(() => import('./home'), {
  loading: () => <Loading />,
})

const Footer = dynamic(() => import('./footer'), {
  loading: () => <Loading />,
})

const FadeUp = dynamic(() => import('./fade-up'), {
  loading: () => <Loading />,
})

const Message = dynamic(() => import('./message'), {
  loading: () => <Loading />,
})
export { Home, Footer, FadeUp, Message }
