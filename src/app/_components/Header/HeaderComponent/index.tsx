import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav>
      <Gutter>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={200} height={80} />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
