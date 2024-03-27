import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import CrewList from '@/components/crew-management/crew-list'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 

  return (  
  
      <div>
      <Layout>
      <div className="container mx-auto p-4">
        <CrewList />
      </div>
    </Layout>
    </div>

  
  )
}
