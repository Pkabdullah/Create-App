
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hello = () => {

  
  return (
    <div>
<Link href={"/Add "}>
      <Button>
      Add
      </Button>
      </Link>
    
    </div>
  )
}

export default Hello