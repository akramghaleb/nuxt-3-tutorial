import { LazyBody } from "~/.nuxt/components"

export default defineEventHandler(async (event)=>{

    // handle  query params
    const { name } = getQuery(event)

    // handle post data
    const { age } = await readBody(event)

    // api call with privacy key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=at7KOLA72kRGOLQJtHgUgIeTHCgNbW9g7YjwcjVU')

    return {
        message: `Hello, ${name}! You are ${age} years old`
    }
})