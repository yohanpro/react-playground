import { ReactElement } from 'react'
import Home from 'src/components/Home'
import DefaultLayout from 'src/layouts'

const HomePage = () => {
  return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
