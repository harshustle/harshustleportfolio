import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const posts_fallbackEn = [
    { id: 1, title: 'how we 3x\'d a saas startup\'s organic traffic in 60 days', excerpt: 'a deep dive into the ai content system we built that publishes 3 seo-optimized articles per week automatically.', category: 'content', readTime: '6 min read', date: 'mar 2025', tags: ['content', 'ai'], url: '#' },
    { id: 2, title: 'n8n vs zapier: which automation platform actually scales?', excerpt: 'we\'ve built over 50 workflows on both platforms. here\'s what we\'ve learned about cost, reliability, and complexity.', category: 'automation', readTime: '8 min read', date: 'feb 2025', tags: ['automation'], url: '#' },
    { id: 3, title: 'the web design principles behind high-converting dark sites', excerpt: 'why dark-mode sites convert better, and the specific design patterns we use for every client.', category: 'design', readTime: '5 min read', date: 'jan 2025', tags: ['design', 'webdev'], url: '#' },
];

const posts_fallbackHin = [
    { id: 1, title: 'kaise humne ek saas startup ka organic traffic 60 din mein 3x kiya', excerpt: 'humaare banaye ai content system ka deep dive jo automatically har hafte 3 seo-optimized articles publish karta hai.', category: 'content', readTime: '6 min read', date: 'mar 2025', tags: ['content', 'ai'], url: '#' },
    { id: 2, title: 'n8n vs zapier: kaunsa automation platform sach mein scale karta hai?', excerpt: 'humne dono platforms par 50 se zyada workflows banaye hain. ye raha cost, reliability, aur complexity par humara analysis.', category: 'automation', readTime: '8 min read', date: 'feb 2025', tags: ['automation'], url: '#' },
    { id: 3, title: 'high-converting dark sites ke peeche web design principles', excerpt: 'dark-mode sites kyu behtar convert karti hain, aur wo specific design patterns jo hum har client ke liye use karte hain.', category: 'design', readTime: '5 min read', date: 'jan 2025', tags: ['design', 'webdev'], url: '#' },
];

const categories = ['all', 'webdev', 'javascript', 'react', 'ai', 'beginners'];

export default function Blog() {
    const { language } = useLanguage();
    const posts_fallback = language === 'hin' ? posts_fallbackHin : posts_fallbackEn;
    const [posts, setPosts] = useState(posts_fallback);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');

    useEffect(() => {
        setPosts(posts_fallback);
        fetch('https://dev.to/api/articles?tag=webdev&top=30')
            .then(r => r.json())
            .then(data => {
                setPosts(data.map(a => ({
                    id: a.id,
                    title: a.title,
                    excerpt: a.description,
                    author: a.user.name,
                    authorImage: a.user.profile_image,
                    date: new Date(a.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                    readTime: `${a.reading_time_minutes} min read`,
                    category: a.tag_list[0] || 'tech',
                    image: a.cover_image,
                    tags: a.tag_list,
                    url: a.url,
                })));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [language]);

    const filtered = posts.filter(p => {
        const matchCat = category === 'all' || (p.tags && p.tags.includes(category));
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || (p.excerpt && p.excerpt.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchSearch;
    });

    return (
        <div style={{ background: '#000', minHeight: '100vh', paddingTop: '60px' }}>

            {/* Hero */}
            <section style={{ padding: '6rem 1.5rem 4rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>{language === 'hin' ? 'blog' : 'blog'}</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff', marginBottom: '1.5rem' }}>
                        {language === 'hin' ? 'insights aur' : 'insights &'}<br />
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>{language === 'hin' ? 'deep dives.' : 'deep dives.'}</span>
                    </h1>

                    {/* Search */}
                    <div style={{ maxWidth: '500px', marginBottom: '2rem' }}>
                        <input
                            type="text"
                            placeholder={language === 'hin' ? 'articles search karein...' : 'search articles...'}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit' }}
                        />
                    </div>

                    {/* Category Filters */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {categories.map(c => (
                            <button key={c} onClick={() => setCategory(c)}
                                style={{ padding: '0.35rem 0.9rem', border: '1px solid', borderColor: category === c ? '#A855F7' : 'rgba(255,255,255,0.1)', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, background: category === c ? 'rgba(168,85,247,0.15)' : 'transparent', color: category === c ? '#A855F7' : 'rgba(255,255,255,0.4)', cursor: 'pointer', fontFamily: 'inherit' }}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {loading && <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>{language === 'hin' ? 'articles load ho rahe hain...' : 'loading articles...'}</p>}

                    {!loading && filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                            <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</p>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{language === 'hin' ? 'koi articles nahi mile. kuch aur search karein.' : 'no articles found. try a different search.'}</p>
                        </div>
                    )}

                    {!loading && filtered.length > 0 && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
                            {filtered.map(post => (
                                <a key={post.id} href={post.url || '#'} target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'block', background: '#000', padding: '2rem', textDecoration: 'none', transition: 'background 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#000'}>
                                    {post.image && (
                                        <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.25rem', aspectRatio: '16/9' }}>
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    )}
                                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(168,85,247,0.7)' }}>{post.category}</span>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                                    {post.excerpt && <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt.slice(0, 120)}...</p>}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                        {post.authorImage && <img src={post.authorImage} alt={post.author} style={{ width: '28px', height: '28px', borderRadius: '50%' }} />}
                                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{post.author} · {post.readTime}</p>
                                        <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>{post.date}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
