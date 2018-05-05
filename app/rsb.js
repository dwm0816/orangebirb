story = Math.floor(Math.random() * 4)

if (story === 0){
    $('#storyTime').append('<h1>Light up housing</h1>')
    $('#storyTime').append(`<p>A pair of mistle thrushes have set up their nest between the red and amber of traffic lights in Doncaster, Yorkshire, England. <br>Will believes that the birds are cunningly using the warmth from the red light to help incubate their eggs. Guy thinks that the pair are just waiting for the green light, then they will take their nest to the Doncaster council offices.</p>`)
} else if (story === 1) {
    $('#storyTime').append('<h1>Sammy the Seagull</h1>')
    $('#storyTime').append(`<p>A pilfering seagull has turned shoplifter by wandering into a store and helping himself to his favourite crisps. The fearless bird lies in wait every day and pounces at a corner shop in Aberdeen, Scotland, when the door opens. He sneaks in, grabs his spicy Doritos, then flies off with them in his beak and shares them with other birds. Seagull sam eating doritos. The seagull, nicknamed Sam by staff and customers, has become so popular locals have started paying for his crisps. Shop assistant Sriaram Nagarajan reported: 'At first I didn't believe a seagull was capable of stealing crisps. But I saw it with my own eyes and I was surprised. He's very good at it. He's becoming a bit of a celebrity. Seagulls are usually not that popular but Sam is a star because he's so funny.'</p>`)
    
} else if (story === 2) {
    $('#storyTime').append('<h1>Got any?</h1>')
    $('#storyTime').append(`<p>One day a duck walked up to the counter inside a convenience store. The duck said to the clerk "Got any grapes." "No" replied the store clerk. The duck smiled and walked out of the door. A little while later the duck returned and asked, "Got any grapes?" The clerk replied "No! I already told you 15 minutes ago, I don't have any grapes!" The duck smiled and once again walked out of the store. Ten minutes later,the duck returned and asked once again "Got any grapes?" The irate clerk yelled, "No! We didn't have any, we don't have any, and were not going to have any. If you come back in here again I'll nail your webbed feet to the floor!" The duck smiled and walked out of the store. Later during the day, the duck returned to the store and asked the clerk "Got any nails?" The clerk said "NO!" The duck replied, "Good! Got any grapes?"</p>`)

} else if (story === 3) {
    $('#storyTime').append('<h1>Boof</h1>')
    $('#storyTime').append(`<p>It was after midnight and a burglar had just broken into a very large house in an affluent neighborhood. Upon entering the house, he was very careful not to make a sound. As he crept around in the dark, he heard a voice say, "I can see you! Jesus can see you, too!" Stunned by the voice, the burglar came to a sudden halt, and remained motionless. After waiting a few minutes, once again, the same voice said, "I can see you! Jesus can see you, too!" Becoming a bit more frightened, the burglar took out his flashlight, turned it on, and glanced around the room. To his utter amazement, he saw a large birdcage with a parrot in it. The burglar chuckled quietly and said to the parrot "Did you say that?" The parrot repeated the same phrase again, "I can see you! Jesus can see you, too!" You're just a parrot!" said the amused burglar. "What is your name?" "Noah", said the parrot. "Well then who is Jesus and where is he?" The parrot quickly answered, " Jesus is the Doberman and he is right behind you."</p>`)

} else if (story === 4) {
    $('#storyTime').append('<h1>The auction</h1>')
    $('#storyTime').append(`<p>A rather sophisticated young woman attended an auction and noticed that a beautiful,colorful macaw parrot was soon to be put up for bidding. She immediately decided that she had to own it. She waited impatiently for the bird to be brought out for bidding. When the bird was finally brought out the auctioneer asked, "What do I hear for this marvelous parrot?" The woman opened bidding with a confident "Five hundred dollars." Her bid was raised by another bidder who shouted "Six hundred dollars." "Eight hundred!" She shouted. "Eight hundred fifty!" "Nine hundred!" The bidding continued for several minutes until the price was raised to $2000 and the woman became the owner of the parrot. She proudly approached the auctioneer and asked "Can this parrot talk?" The auctioneer replied "Who do you think was bidding against you?"</p>`)

}

// format demo

// else if (story === x) {
//     $('#storyTime').append('<h1>title</h1>')
//     $('#storyTime').append(`<p>content</p>`)
// }