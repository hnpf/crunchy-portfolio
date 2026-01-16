
import React from 'react';
import { Project, Experience, Opinion, Photo } from './types';
import { 
  Code, 
  Layers, 
  Server, 
} from 'lucide-react';

export const SOCIALS = {
  discord: "https://discord.gg/vixencommunity",
  email: "mailto:virex@is.notaskid.ong",
  github: "https://github.com/hnpf"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Rust Projects',
    description: 'A collection of low-level, zero-dependency tools built for speed and reliability.',
    tags: ['RUST', 'CLI', 'CORE'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/hnpf/'
  },
  { 
    id: '2',
    title: 'Async Net Program',
    description: 'Network-first asynchronous architecture demonstration built from the ground up.',
    tags: ['ASYNC', 'RUST', 'NET'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/hnpf/effective-rotary-phone'
  },
  {
    id: '3',
    title: 'Engine',
    description: 'A wrapper focused on design maintainability. Simple, fast, and privacy-first search.',
    tags: ['WRAPPER', 'WEB', 'JS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    link: 'https://search.virex.lol/'
  },
  {
    id: '4',
    title: 'Nekofetch',
    description: 'Custom GUI/CLI fetcher written in BASH and Python. Aesthetic system info for everyone.',
    tags: ['PYTHON', 'BASH', 'OS'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/hnpf/nekofetch'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Cybersecurity And Social Engineer',
    company: 'Stackpointer',
    period: '2024 - Present',
    description: 'Focusing on human-centric security routes, vulnerability research, and penetration testing.'
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'VIREX',
    period: '2022 - Present',
    description: 'Architecting expressive UI systems and cross-platform native-feeling web tools.'
  },
  {
    id: '3',
    role: 'Junior Software Researcher',
    company: 'Independent Research',
    period: '2021 - 2022',
    description: 'Explored low-level systems programming and Windows automation workflows.'
  }
];

export const OPINIONS: Opinion[] = [

  {
    id: '7',
    title: 'The web is cooked (..And we are the ones smelling the smoke)',
    snippet: 'Why does a site need more processing power than the apollo 11 moon landing?? The state of web dev is actually embarrassing.',
    content: `
# The modern web is basically malware at this point.

I was looking at a "minimalist" landing page the other day and the dev tools showed **12mb of javascript**. For a page with three buttons and a logo. Are we okay?

* Developers are importing entire ecosystems just to handle a toggle menu. If you need 500kb of react code for a STATIC site, you aren't an engineer.
* 60% of your load time is just a dozen different analytics scripts trying to figure out how long you hovered over a "buy now" button. 
* We've reached a point where we have frameworks to fix the performance issues caused by the *other* frameworks we're already using. 

I built virex.lol to be fast because I actually respect your hardware. The average webpage in 2026 is over 2.5mb, most of which is just "management overhead" and ads. 

We don't need more "ai-native" features or 3d micro interactions. We need people to remember how to write a basic media query and ship some damn html once in a while, even if it's ugly.

If your site takes more than 2 seconds to be interactive on a 4g connection, you didn't build a website. Please stop!!!
    `,
    date: 'Jan 14, 2026',
    category: 'Dev',
    readTime: '2 min read',
    votes: { up: 0, down: 0 },
    link: 'the-web-is-cooked'
  },

  {
    id: '6',
    title: 'Your cloud is just someone elses computer.',
    snippet: 'This is why i hoard data (and you should too)',
    content: `
# Stop trusting corporations to keep your data safe. 

I have massive amounts of storage for a reason. People think im crazy for archiving games, software, and gallery backups, but have you even seen the state of the internet lately?
People call me crazy until it actually comes useful and you lose stuff forever. The internet is made to have temporary-first data.

* If it's on my drive, no one can "un-license" it or edit the content after the fact.
* Paying $15 a month for a library that changes every week is a joke.
* I keep games, movies, music, tools, and old software because once they're gone from the main web, they're gone FOREVER.

I'm running huge amounts of storage on my local rig for a reason. It's not just about hoarding. It's about digital sovereignty. Plus, having local access to my entire music and libraries without worrying about deletion or "Site is down" is a huge advantage.

Everyone is so comfortable with streaming and cloud storage until the servers go dark, the license expires, or even worse? Data loss. They don't care about your files, they care about your subscription. That is why I archive everything!
    `,
    date: 'Jan 14, 2026',
    category: 'Tech',
    readTime: '3 min read',
    votes: { up: 0, down: 0 },
    link: 'cloud-is-someone-elses-computer'
  },
  {
    id: '5',
    title: 'Why I actually use Arch.. (and it’s not for the meme)',
    snippet: 'Everyone thinks Arch users just want to flex their Neofetch, but I actually just want a system that doesnt hand bs over to me...',
    content: `
# Why Arch? (unironically)

Honestly if I were to see one more person say "I use Arch btw" as a joke I might actually lose it. On a serious note, I use it because I dont want some random distro maintainer deciding what packages I need to have installed.

* **No bloat:** I have exactly what I need and nothing else. 
* **The Wiki:** Literally the holy grail of 'perfect' documentation. If it’s not in the wiki, it probably doesnt even exist.
* **Rolling release:** Yes, I want the latest kernel features immediately, and NOT in six months when the "stable" release feels like prehistoric technology.

My current rig is running an RX 6800xt and an i5 14600k, and honestly, setting up the drivers manually (Which is still incredibly easy) is much better than fighting a "user-friendly" os that tries to hide the literal config files from you. 

If you want to spend your life clicking "remind me later" on ANY operating system updates, go for it. I'll just be over here actually owning my hardware.
    `,
    date: 'Jan 14, 2026',
    category: 'Tech',
    readTime: '2 min read',
    votes: { up: 0, down: 0 },
    link: 'why-i-actually-use-arch'
  },
{
    id: '8',
    title: 'The internet is dead.',
    snippet: 'If you think you are talking to real people on the big platforms anymore, I have a bridge to sell you.',
    content: `
# This is why I self host my website.

I've been looking at the traffic patterns on the major socials and it's literally just bots talking to bots. 
It's now just a loop of ai-generated slop being consumed by ai-generated scrapers. Dystopian right?

* You post a thought, and three seconds later, five "blue checks" with generic ai names reply with something vaguely related.
* We aren't even being shown what's good anymore, rather, we're just being shown what keeps us scrolling for 0.5 seconds longer. 
* You can't have a debate anymore because the "person" you are arguing with is probably a clanker running on a server in a basement somewhere.


Everyone is so obsessed with "The future of AI" that they didn't even notice it already killed the world wide web.

Go outside. Or at least close a tab. There is soon going to be nothing left for us here.
    `,
    date: 'Jan 12, 2026',
    category: 'Opinion',
    readTime: '2 min read',
    votes: { up: 66, down: 6 },
    link: 'the-internet-is-dead'
  },

  {
    id: '4',
  title: 'The epstein "files" is a joke!',
    snippet: 'So the DOJ finally dropped the files and... surprise! it’s basically just 50 pages of ONLY blacked out text...',
    content: `
# The most transparent administration I guess?

The DOJ literally just dropped a bunch of documents that are so redacted they look like modern art.

Apparently, they missed the deadline set by the transparency act and are now doing "rolling releases" slash slash.. batches, which is just code for "we're still redacting."

Some files even "disappeared" from the site after being posted, including photos that actually featured the current admin.

Lawmakers are already talking about impeachment and contempt because the DOJ is basically treating federal law like a literal suggestion!

It's honestly really embarrassing how much effort is going into hiding names when the law specifically said no redactions for "political sensitivity.", and that turned into a "we'll redact everything and call it a day" situation.

> The United States is literally one big social experiment.
    `,
    date: 'Dec 21, 2025',
    category: 'News',
    readTime: '3 min read',
    votes: { up: 0, down: 0 },
    link: 'epstein-files-is-a-joke'
  },
  {
    id: '1',
    title: 'This is why I love Open Source',
    snippet: 'honestly, open source is just built different. it’s all about the community and...',
    content: `
# Why Open Source is absolutely goated

It's literally just people helping people for learning (and overall better code).

* You get to peek under the hood of massive projects.
* See how the experienced developers actually build things.
* Contributing feels way better than just gatekeeping code.
* Community feedback makes everything 10x more secure and efficient.
    `,
    date: 'Nov 12, 2025',
    category: 'Tech',
    readTime: '1 min read',
    votes: { up: 0, down: 0 },
    link: 'why-i-love-open-source'
  },
  {
    id: '2',
    title: 'This is the first blog post!',
    snippet: 'This is the first blog post, and im happy to share updates on..',
    content: `
# Hello World

I'm happy to share updates on my projects and thoughts on development and other topics!

As a self-taught full-stack developer, I believe in sharing knowledge and experiences.

This blog will cover everything from coding tutorials to personal insights on the tech industry.

Stay tuned for more content!
    `,
    date: 'Nov 04, 2025',
    category: 'Tech',
    readTime: '2 min read',
    votes: { up: 0, down: 0 },
    link: 'first-blog-post'
  }
];

export const IMAGES: Photo[] = [
  {
    src: '/photography/20241027_071257_optimized.jpg',
    title: 'Florida Beach at Dawn',
    date: 'october 2024',
    description: 'Super quiet morning by the beach. The light was so soft it felt fake, but I promise I didn’t render this.',
    tags: ['beach', 'nature', 'morning']
  },
  {
    src: '/photography/20250401_192316.jpg',
    title: 'Random Morning Landscape',
    date: 'april 2025',
    description: 'Found this random spot and the atmosphere was kinda insane? Everything looked washed in a soft sleepy glow. Had to capture it before I woke up.',
    tags: ['nature']
  },
  {
    src: '/photography/20250610_050746.jpg',
    title: 'Nostalgic Road Trip Twilight',
    date: 'june 2025',
    description: 'Shot this while cruising during twilight. Definitely gives off "lost media" energy. If you find a VHS of this, let me know.',
    tags: ['nature', 'twilight']
  },
  {
    src: '/photography/20250702_171801.jpg',
    title: 'Majestic Cloud Chaos',
    date: 'july 2025',
    description: 'The clouds were going absolutely feral in the sky that day. Bright edges, wild textures—I was obsessed. Nature was showing off.',
    tags: ['clouds', 'nature']
  },
  {
    src: '/photography/20250703_173213.jpg',
    title: 'Calm Wetumpka River',
    date: 'july 2025',
    description: 'A really calm river shot. Soothing in that way where you briefly forget the universe is chaotic and loud. A nice pause button.',
    tags: ['river', 'nature']
  },
  {
    src: '/photography/20250705_210251.jpg',
    title: 'Pitch Black Outskirts (July 4th)',
    date: 'july 2025',
    description: 'Miles outside Montgomery. Night shot with visible stars and distant fireworks. Felt super cool, like a movie scene but without the plot.',
    tags: ['night', 'stars', 'fireworks']
  },
  {
    src: '/photography/20250705_212705.jpg',
    title: 'Lunar Serenity',
    date: 'july 2025',
    description: 'A really simple moon shot. Super captivating. Sometimes the moon just sits there looking perfect and you gotta respect it.',
    tags: ['moon', 'night']
  },
  {
    src: '/photography/20250709_185003.jpg',
    title: 'AC-130 Flyover',
    date: 'july 2025',
    description: 'An AC-130 went right over me! Felt so intense, everyone was staring. Probably the loudest thing I’ve ever photographed.',
    tags: ['aircraft', 'night']
  },
  {
    src: '/photography/20250824_142028.jpg',
    title: 'Historic Victorian Hotel',
    date: 'august 2025',
    description: 'Charming Victorian hotel in Americus. Architectural elegance with a serious old-school vibe. You can almost feel the history (and maybe ghosts?).',
    tags: ['architecture', 'building']
  },
  {
    src: '/photography/20250824_142257.jpg',
    title: 'Half-Brutalism in Americus',
    date: 'august 2025',
    description: 'Old buildings in Americus with one tall one standing out. Striking contrast. It’s like the buildings couldn’t decide on a decade.',
    tags: ['architecture', 'building']
  },
  {
    src: '/photography/20250827_201738.jpg',
    title: 'Vibrant Sunset & Dramatic Clouds',
    date: 'august 2025',
    description: 'Raw sunset shot with rich colors and insane cloud formations. Nature going wild again. 10/10 would watch the sun set here again.',
    tags: ['sunset', 'clouds']
  },
  {
    src: '/photography/20250828_184721.jpg',
    title: 'Urban Sunset Glow',
    date: 'august 2025',
    description: 'Another killer sunset. The building was literally glowing. The urbanscape looked beautiful, almost like it was trying too hard.',
    tags: ['sunset', 'building']
  },
  {
    src: '/photography/20250828_203050.jpg',
    title: 'Moonlit Beach Reflection',
    date: 'august 2025',
    description: 'The moon reflecting on the beach water. Actual celestial vibes with the gulf. 10/10, no notes.',
    tags: ['moon', 'water', 'beach']
  },
  {
    src: '/photography/20250902_133945.jpg',
    title: 'Vintage Theatre Facade',
    date: 'september 2025',
    description: 'Old theatre that looks cooler than expected IRL. Serious architectural charm. Popcorn not included.',
    tags: ['theatre']
  },
  {
    src: '/photography/20250920_191221.jpg',
    title: 'Post-Sunset Color Explosion',
    date: 'september 2025',
    description: 'Sunset colors lingering after the sun dipped. Vibrant sky colors. Mind-blowing stuff.',
    tags: ['sunset', 'colors']
  },
  {
    src: '/photography/20250924_190858.jpg',
    title: 'Dragonfly Photobomb',
    date: 'september 2025',
    description: 'Beautiful cloud formations with a random dragonfly crashing the party. Added some extra flair to the shot. Paid actor.',
    tags: ['clouds', 'nature', 'dragonfly']
  },
  {
    src: '/photography/20251016_190318.jpg',
    title: 'Purple(?) Cloud Patterns',
    date: 'october 2025',
    description: 'Incredible clouds with... purple colors? Super mesmerizing and dramatic. Sky was feeling moody.',
    tags: ['clouds', 'colors']
  },
  {
    src: '/photography/20251018_072440.jpg',
    title: 'Morning Sky Beauty',
    date: 'october 2025',
    description: 'Peaceful morning sky. The edit makes it pop, but the vibe was already there.',
    tags: ['sky', 'morning']
  },
  {
    src: '/photography/20251018_191259.jpg',
    title: 'Eerie Sunset Silhouette',
    date: 'october 2025',
    description: 'Dramatic sunset where everything went black except the sky. Cool eerie feeling. Spooky season energy.',
    tags: ['sunset', 'eerie']
  },
  {
    src: '/photography/20251021_072420.jpg',
    title: 'Processed Morning Beauty',
    date: 'october 2025',
    description: 'Edited morning sky to bring out the real vibrancy. Looks sick. Sometimes reality needs a little boost.',
    tags: ['sky', 'morning', 'processed']
  },
  {
    src: '/photography/20251028_183233.png',
    title: 'Pre-Storm Cloud Stuff',
    date: 'october 2025',
    description: 'Clouds right before a massive storm. The beauty made up for the imminent doom. Worth it.',
    tags: ['clouds', 'storm']
  },
  {
    src: '/photography/20251028_183326.png',
    title: 'Unexpectedly Beautiful Streetlight',
    date: 'october 2025',
    description: 'Simple streetlight shot. Elegant minimalism against complex clouds. Clean aesthetic. Who knew streetlights could be this photogenic?',
    tags: ['streetlight', 'minimal']
  },
  {
    src: '/photography/20251028_183525.png',
    title: 'October Cloud Series #3',
    date: 'october 2025',
    description: 'Part of the October cloud series. Atmospheric formations were on point. The sky was just showing off all month.',
    tags: ['clouds']
  },
  {
    src: '/photography/20251028_183620.png',
    title: 'Saturated Cloud Vibrancy',
    date: 'october 2025',
    description: 'Super saturated cloud pic. Rich colors and textures popping off. Maybe too much saturation? Nah, never.',
    tags: ['clouds', 'saturated']
  },
  {
    src: '/photography/20251028_183756.png',
    title: 'Colorful Cloud Display',
    date: 'october 2025',
    description: 'Loved the coloring IRL. This shot captures those great cloud hues perfectly. Nature’s palette is unbeaten.',
    tags: ['clouds', 'colors']
  },
  {
    src: '/photography/20251028_184236.png',
    title: 'Lightning in Motion',
    date: 'october 2025',
    description: 'Exciting lightning capture before the storm. Raw power of nature holding absolutely nothing back. ZAP.',
    tags: ['lightning', 'storm']
  },
  {
    src: '/photography/20251029_140343.jpg',
    title: 'The Boss (My Cat)',
    date: 'october 2025',
    description: 'High-quality silly pic of my cat. He mogs everything, I don’t make the rules. Look at him.',
    tags: ['cat', 'pet']
  },
  {
    src: '/photography/20251106_084017.jpg',
    title: 'Enveloping Fog',
    date: 'november 2025',
    description: 'Fog enveloping the scene. Atmospheric stuff that feels a little eerie. Silent Hill vibes, anyone?',
    tags: ['fog', 'nature']
  },
  {
    src: '/photography/20251106_151437.jpg',
    title: 'Pink Cloud Elegance',
    date: 'november 2025',
    description: 'Super cool pink clouds in motion. Gave the sky a soft romantic touch. Pretty aesthetic, not gonna lie.',
    tags: ['clouds', 'pink']
  },
  {
    src: '/photography/20251106_1607282.jpg',
    title: 'Sunbeam',
    date: 'november 2025',
    description: 'Just beams of light. Way more visible IRL, but you get the idea. Heavenly lighting.',
    tags: ['beams', 'light']
  },
  {
    src: '/photography/IMG_20251101_1654442.png',
    title: 'Thin Film Interference Clouds',
    date: 'november 2025',
    description: 'Colorful clouds with a thin-film interference vibe. Colors were surreal IRL. Physics or magic? You decide.',
    tags: ['clouds', 'colors', 'interference']
  },
  {
    src: '/photography/20251021_100045.png',
    title: 'Morning Sunrise Glow',
    date: 'october 2025',
    description: 'Beautiful sunrise scene. Warmth and promise of a new day. Feels hopeful, even if I haven’t had coffee yet.',
    tags: ['sunrise', 'morning']
  },
  {
    src: '/photography/20251030_201855.png',
    title: 'Raw Nighttime Capture',
    date: 'october 2025',
    description: 'Raw night shot. Details preserved. No filter, just vibes and darkness.',
    tags: ['night', 'raw']
  },
  {
    src: '/photography/IMG_20251101_1654482.png',
    title: 'Sky Palette (Interference Edition)',
    date: 'november 2025',
    description: 'Another colorful sky capture. Super dynamic colors. Never gets old. The sky is the best painter.',
    tags: ['sky', 'colors']
  },
  {
    src: '/photography/1764261937737.jpg',
    title: 'License and registration',
    date: 'november 2025',
    description: 'Not much to say, it is a decent point and shoot shot!',
    tags: ['cops']
  },
  {
    src: '/photography/SGCAM_20251127_134227019.jpg',
    title: 'Kitty on the car.',
    date: 'november 2025',
    description: 'A cat on a car. Cat was literally just chilling. Kinda cute.',
    tags: ['cat', 'car']
  },
  {
    src: '/photography/SGCAM_20251127_134233696.jpg',
    title: 'Kitty on the car but stretching..',
    date: 'november 2025',
    description: 'A cat on a car. Cat was stretching this time. An adorable photo was taken.',
    tags: ['cat', 'car']
  },
  {
    src: '/photography/1764280637311.png',
    title: 'Kitty on the car but sophisticated..',
    date: 'november 2025',
    description: 'A cat on a car. Cat was looking sophisticated. Really cute icl.',
    tags: ['cat', 'car']
  },
  {
    src: '/photography/PXL_20251211_141636981.PORTRAIT.ORIGINAL.jpg',
    title: 'Rune!',
    date: 'december 2025',
    description: 'My tarantula, she was in a box during this photo and i got a good shot of her. She is cute.',
    tags: ['rune', 'tarantula']
  },
  {
    src: '/photography/PXL_20251214_045928796.jpg',
    title: 'Rune in her enclosure!',
    date: 'december 2025',
    description: 'She was in her enclosure when i took this photo and i also got a good shot of her. She is cute... Or maybe just photogenic.',
    tags: ['rune', 'tarantula']
  },
  {
    src: '/photography/20251217_154817.jpg',
    title: 'Lonely Theatre',
    date: 'december 2025',
    description: 'I went to a theatre and had it all to myself. It was a pretty liminal vibe and definitely got that in the picture. I like it.',
    tags: ['theatre', 'liminal space', 'eerie', 'alone']
  },
  {
    src: '/photography/20251221_035746.jpg',
    title: 'Rune just outside of her hideout',
    date: 'december 2025',
    description: 'Rune was just outside of her hideout looking absolutely stunning, shes adorable.',
    tags: ['rune', 'tarantula']
  },
  {
    src: '/photography/20251221_153540.jpg',
    title: 'honey, wrapped in a blanket',
    date: 'december 2025',
    description: 'She looked really uncomfortable but she was totally cute, so worth the shot.. 112.26/10',
    tags: ['pug', 'honey', 'dog']
  },
  {
    src: '/photography/1768255601300.jpg',
    title: 'Feline good',
    date: 'january 2026',
    description: 'kitty staring at camera / has watermark',
    tags: ['kitty', 'pixel']
  },
  {
    src: '/photography/PXL_20251224_213643656~2.jpg',
    title: 'Pug fighting the camera',
    date: 'january 2026',
    description: 'Yes, she tried to fight the camera.',
    tags: ['pug', 'adorable']
  },
  {
    src: '/photography/PXL_20251225_133739921~2.jpg',
    title: 'foggy morning',
    date: 'january 2026',
    description: 'another foggy morning, really liminal again.',
    tags: ['fog', 'morning']
  },
  {
    src: '/photography/PXL_20251225_133754491~2.jpg',
    title: 'foggy morning II',
    date: 'january 2026',
    description: 'also another foggy morning, this one looks more stock',
    tags: ['fog', 'morning']
  },
  {
    src: '/photography/PXL_20251225_142558068~2.jpg',
    title: 'Rocks.',
    date: 'january 2026',
    description: 'A really good shot of some rocks',
    tags: ['rocks', 'dew']
  },
  {
    src: '/photography/PXL_20251225_230447199~2.jpg',
    title: 'road trip dump 1',
    date: 'december 2025',
    description: 'just a water tower, looks nice with the blur on the buildings.',
    tags: ['dump', 'cityscape']
  },
  {
    src: '/photography/PXL_20251225_230511241~2.jpg',
    title: 'road trip dump 2',
    date: 'december 2025',
    description: 'a nice shot of some vintage looking hotel.',
    tags: ['dump', 'cityscape']
  },
  {
    src: '/photography/PXL_20251227_015111965.jpg',
    title: 'Ink biting into a cricket!',
    date: 'december 2025',
    description: 'cycle of life, okay?',
    tags: ['food', 'spider']
  },
  {
    src: '/photography/PXL_20251227_021739429.jpg',
    title: 'Ink biting into a cricket II',
    date: 'december 2025',
    description: 'this ones darker and another angle, kinda cinematic.',
    tags: ['food', 'spider']
  },
  {
    src: '/photography/PXL_20251230_074304887.PORTRAIT.jpg',
    title: 'Desk preview one',
    date: 'january 2026',
    description: 'some basic portrait shot of my desk.',
    tags: ['setup', 'desk']
  },
  {
    src: '/photography/PXL_20251231_013358426.PORTRAIT~2.jpg',
    title: 'paws',
    date: 'january 2026',
    description: 'kittys paws. really precious',
    tags: ['paws', 'cat']
  },
  {
    src: '/photography/PXL_20251231_235312192.jpg',
    title: 'HDR sunset',
    date: 'january 2026',
    description: 'it was super bright and vivid',
    tags: ['sunset', 'dump']
  },
  {
    src: '/photography/PXL_20260103_002059679.BURST-01~2.jpg',
    title: 'The Moon!',
    date: 'january 2026',
    description: 'really high definition, super cool!!',
    tags: ['moon', 'space']
  },
  {
    src: '/photography/PXL_20260103_235744667.PORTRAIT.jpg',
    title: 'the gradient sunset',
    date: 'january 2026',
    description: 'honestly that sky blends really well, i love it',
    tags: ['sunset', 'dump']
  },
  {
    src: '/photography/PXL_20260107_181543166.jpg',
    title: 'staring cat',
    date: 'january 2026',
    description: 'idk why he does that but its cute',
    tags: ['cat', 'chair']
  },
  {
    src: '/photography/PXL_20260107_192749765.PORTRAIT.jpg',
    title: 'pug portrait',
    date: 'january 2026',
    description: 'i love the blur, makes it look nice.',
    tags: ['pug', 'portrait']
  },
  {
    src: '/photography/PXL_20260108_040856251.jpg',
    title: 'Ink water droplet 1',
    date: 'january 2026',
    description: 'SO CUTE THERES WATER ON HER BACK!!!',
    tags: ['spider', 'macro']
  },
  {
    src: '/photography/PXL_20260108_040900573~2.jpg',
    title: 'Ink water droplet 2',
    date: 'january 2026',
    description: 'this one has more quality and vivid colors, so cute!!',
    tags: ['spider', 'macro']
  },
  {
    src: '/photography/PXL_20260108_042253119.jpg',
    title: 'rune coming out of her rock',
    date: 'january 2026',
    description: 'pet rock outside the rock, wow.',
    tags: ['rune', 'cute']
  },
  {
    src: '/photography/PXL_20260108_042328184.PORTRAIT~2.jpg',
    title: 'rune coming out of her rock 2',
    date: 'january 2026',
    description: 'unreasonably dramatic. still super good quality!',
    tags: ['rune', 'cute']
  },
  {
    src: '/photography/PXL_20260110_235129332.jpg',
    title: 'ink staring from her plant',
    date: 'january 2026',
    description: 'she ended up jumping at me and didnt succeed :(',
    tags: ['ink', 'looking']
  },
  {
    src: '/photography/PXL_20260110_235650661.PORTRAIT.jpg',
    title: 'ink staring but from her roof',
    date: 'january 2026',
    description: 'shes so adorable when she does this omg',
    tags: ['ink', 'looking']
  },
  {
    src: '/photography/PXL_20260112_222349039.PORTRAIT.jpg',
    title: 'pug with her toys - portrait',
    date: 'january 2026',
    description: 'not much to say, but yea shes scary',
    tags: ['pug', 'couch']
  },
  {
    src: '/photography/PXL_20260113_074317741.PORTRAIT~2.jpg',
    title: 'desk setup 2',
    date: 'january 2026',
    description: 'ive recently moved those enclosures to the right.',
    tags: ['desk', 'portrait']
  },
  {
    src: '/photography/PXL_20260114_034330048.PORTRAIT.jpg',
    title: 'ink eating a roach',
    date: 'january 2026',
    description: 'looks like theyre boxing kinda cool',
    tags: ['ink', 'spider']
  },
  {
    src: '/photography/PXL_20260114_052811593.PORTRAIT.ORIGINAL.jpg',
    title: 'rune hiding with her leaves lol',
    date: 'january 2026',
    description: 'she does this often and then hides in her rock for a week.',
    tags: ['rune', 'leaves']
  },
  {
    src: '/photography/PXL_20260115_062158733.PORTRAIT.jpg',
    title: 'rune exploring again',
    date: 'january 2026',
    description: 'you can really see her well here!',
    tags: ['spider', 'activities']
  },
  {
    src: '/photography/PXL_20260115_224356196.PORTRAIT.jpg',
    title: 'sam being cute',
    date: 'january 2026',
    description: 'ig he wanted to be pet on the chest lol',
    tags: ['cat', 'sam']
  },

];

export const TECH_CATEGORIES = [
  { name: "Frontend Architecture", icon: Code, items: ["React 19", "TypeScript", "Tailwind CSS", "Three.js"] },
  { name: "Interface & Experience", icon: Layers, items: ["Material Design 3", "Framer Motion", "Design Systems"] },
  { name: "Systems & Infrastructure", icon: Server, items: ["Node.js", "Rust", "PostgreSQL", "Docker"] }
];

export const LOCAL_SEARCH_INDEX = [
  {
    title: "About VIREX",
    content: "VIREX (HNPF) is a niche independent software researcher and full-stack developer semi-known for building purely for the love of the game, and expressive development architectures."
  },
  {
    title: "Material Design 3",
    content: "Material Design 3 is Google's best design system. It introduces 'Material You' which focuses on personalization through dynamic color and expressive shapes."
  },
  {
    title: "Rust Programming",
    content: "Rust is a systems programming language focused on safety, speed, and concurrency. It's the core of most high-performance self written projects."
  },
  {
    title: "Photography Lens Module",
    content: "The 'Lens' module contains captures of my personal life. All assets are stored locally in the vault ."
  },
  ...PROJECTS.map(project => ({
    title: project.title,
    content: `${project.description} ${project.tags.join(' ')}`
  })),
  ...EXPERIENCE.map(exp => ({
    title: exp.role,
    content: `${exp.description} ${exp.company}`
  })),
  ...OPINIONS.map(opinion => ({
    title: opinion.title,
    content: `${opinion.snippet} ${opinion.content} ${opinion.category}`
  }))
];
