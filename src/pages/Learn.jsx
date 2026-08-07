import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';
import list_articles from '../data/articles.js';
import ArticleCard from '../components/ux/ArticleCard.jsx';
import ArticleModal from '../components/ux/ArticleModal.jsx';

const LIKES_STORAGE_KEY = 'leosan_article_likes';

function getLikesFromStorage() {
    try {
        const stored = localStorage.getItem(LIKES_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

function saveLikesToStorage(likesMap) {
    try {
        localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likesMap));
    } catch {
        // localStorage might be full or unavailable
    }
}

export default function Learn() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [likesMap, setLikesMap] = useState(() => getLikesFromStorage());

    // Persist likes whenever they change
    useEffect(() => {
        saveLikesToStorage(likesMap);
    }, [likesMap]);

    const handleLike = (articleId) => {
        setLikesMap(prev => ({
            ...prev,
            [articleId]: (prev[articleId] || 0) + 1
        }));
    };

    const filteredArticles = list_articles.filter(article => {
        if (activeFilter === 'all') return true;
        return article.tag === activeFilter;
    });

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'Front', label: 'Front-End' },
        { key: 'Back', label: 'Back-End' },
        { key: 'Data', label: 'Data' },
        { key: 'IA', label: 'IA' },
    ];

    return (
        <div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-200 shadow-sm border-b py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h3 className="style pull-left text-2xl font-bold uppercase text-primary flex items-center gap-3">
                            <FaBookOpen className="text-3xl" />
                            Learn & Reflect
                        </h3>
                        <ol className="pull-right flex space-x-2 text-sm text-gray-500">
                            <li>
                                <Link className="hover:text-primary transition-colors" to="/">Profile</Link>
                                <span className="mx-2">/</span>
                            </li>
                            <li className="active font-medium text-gray-800 font-bold">Learn</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Hero intro */}
            <div className="container mx-auto px-4 mt-8 mb-4">
                <div className="learn-hero-banner">
                    <p className="text-lg text-gray-600 max-w-3xl">
                        A space for sharing insights, lessons learned, and reflections on software development. 
                        From front-end architectures to AI integrations — continuous learning is the path to excellence.
                    </p>
                </div>
            </div>

            <div className="mt-2 mx-auto px-4">
                {/* Filters */}
                <ul id="filters" className="flex flex-wrap gap-4 justify-start">
                    {filters.map(f => (
                        <li key={f.key}>
                            <span
                                onClick={() => setActiveFilter(f.key)}
                                className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === f.key ? 'activo' : 'inactivo'}`}
                            >
                                {f.label}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Articles grid */}
                <div id="articles-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
                    {filteredArticles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            onSelect={setSelectedArticle}
                            likes={likesMap[article.id] || 0}
                            onLike={handleLike}
                        />
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-400 text-lg">No articles found for this category yet.</p>
                        <p className="text-gray-300 text-sm mt-2">Check back soon for new content!</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedArticle && (
                <ArticleModal
                    article={selectedArticle}
                    onClose={() => setSelectedArticle(null)}
                    likes={likesMap[selectedArticle.id] || 0}
                    onLike={handleLike}
                />
            )}
        </div>
    );
}
