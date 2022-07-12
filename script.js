const quotes = ['Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking. -Steve Jobs',
'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin', 
'Life is a long lesson in humility. -James M. Barrie',
'Many of life\'s failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison',
'Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill'
]
const randomQuoteGenerator = quotes =>{
    return quotes[Math.floor(Math.random()*quotes.length)];}
console.log(randomQuoteGenerator(quotes));