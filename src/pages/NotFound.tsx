import { Link } from 'react-router-dom'
import { Button } from '@src/shadcn/components/ui/button'
import '@src/main.css'
export default function NotFound() {
    return (
        <div className='text-center flex flex-col align-middle'>
            <h1 className='text-cWhite font-poppins text-8xl p-3' >404</h1>
            <h2 className="text-cWhite font-poppins text-5xl p-3">Page not found</h2>
            <Link to='/' className='btn'>
                <Button className='rounded-full w-80 m-4'>Go to Home Page</Button>
            </Link>
        </div>
    )
}
