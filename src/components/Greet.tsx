import '@src/main.css'
import { getSetting } from '@src/utils/local'
import { Plus } from 'lucide-react'
import { Button } from '@src/shadcn/components/ui/button'
import { Link } from 'react-router-dom'

// Width Limit = 13
export default function Greet() {
    const d = new Date()
    const hours = d.getHours()
    let greet: string = ''
    let name: string = ''
    const settings = getSetting()
    if (hours < 11) {
        greet = 'Good Morning'
    } else if (hours >= 11 && hours < 17) {
        greet = 'Good Afternoon'
    } else if (hours >= 17 && hours < 22) {
        greet = 'Good Evening'
    } else if (hours >= 22) {
        greet = 'Good Night'
    }
    if (settings.first_name.length > 8 && settings.nick_name != "") {
        name = settings.nick_name
    } else {
        name = settings.first_name
    }


    return (
        <div className='flex'>
            <div className='m-3 max-w-[395px]  overflow-hidden'>

                <h2 className='text-5xl text-cWhite font-poppins font-medium'>{greet}</h2>
                <h1 className='text-8xl text-cWhite font-poppins font-medium h-[110px]'>{name}</h1>
            </div>
            <div className='w-[225px] items-center flex justify-center'>
                <Link to='/new' className='btn'>
                    <Button className='w-min'><Plus /></Button>
                </ Link>
            </div>
        </div>
    )
}
