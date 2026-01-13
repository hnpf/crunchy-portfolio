
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
    id: '4',
    title: 'the epstein "files" is a joke lol',
    snippet: 'so the DOJ finally dropped the files and... surprise! it’s basically just 50 pages of ONLY blacked out text...',
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
    votes: { up: 12, down: 2 },
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
    votes: { up: 45, down: 0 },
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
    votes: { up: 8, down: 0 },
    link: 'first-blog-post'
  }
];

export const IMAGES: Photo[] = [
  {
    src: '/photography/20241027_071257_optimized.jpg',
    title: 'Florida Beach at Dawn (Real)',
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
    tags: ['architecture', 'theatre']
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
    title: 'Someone got pulled over..',
    date: 'november 2025',
    description: 'A cop pulled over some dude. I was there. I took a photo. Guy was probably speeding. I don’t care either way. I just took a photo!',
    tags: ['cop', 'thanksgiving']
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

];

export const TECH_CATEGORIES = [
  { name: "Frontend Architecture", icon: Code, items: ["React 19", "TypeScript", "Tailwind CSS", "Three.js"] },
  { name: "Interface & Experience", icon: Layers, items: ["Material Design 3", "Framer Motion", "Design Systems"] },
  { name: "Systems & Infrastructure", icon: Server, items: ["Node.js", "Rust", "PostgreSQL", "Docker"] }
];
