import '@src/main.css'

export default function Calender() {
    const d = new Date()
    const day_num = d.getDay()
    let day: string = ''
    const date = d.getDate()
    const month_num = d.getMonth()
    let month: string = ''

    switch (day_num) {
        case 0:
            day = "Sunday"
            break
        case 1:
            day = "Monday"
            break
        case 2:
            day = "Tuesaday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thrusday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break

    }

    switch (month_num) {
        case 0:
            month = "January"
            break
        case 1:
            month = "February"
            break
        case 2:
            month = "March"
            break
        case 3:
            month = "April"
            break
        case 4:
            month = "May"
            break
        case 5:
            month = "June"
            break
        case 6:
            month = "July"
            break
        case 7:
            month = "August"
            break
        case 8:
            month = "September"
            break
        case 9:
            month = "October"
            break
        case 10:
            month = "November"
            break
        case 11:
            month = "December"
            break
    }

    return (
        <div className='flex flex-col leading-none text-center pr-4'>
            <div className='text-cWhite text-c2 font-poppins'>{day}</div>
            <div className='text-cWhite text-c4 font-poppins'>{date}</div>
            <div className='text-cWhite text-c2 font-poppins'>{month}</div>
        </div>
    )
}
