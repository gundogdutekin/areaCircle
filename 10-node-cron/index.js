import { schedule } from 'node-cron'

schedule('* * * * *', () => {
    console.log('Dakika başı çalışan cron')
})