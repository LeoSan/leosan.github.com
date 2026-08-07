import React, { useEffect } from 'react';
import { FaTimes, FaHeart, FaExternalLinkAlt, FaCalendarAlt, FaTag } from 'react-icons/fa';

const TAG_COLORS = {
    Front: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', light: 'bg-blue-50' },
    Back: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', light: 'bg-emerald-50' },
    Data: { bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', light: 'bg-amber-50' },
    IA: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', light: 'bg-purple-50' },
};

export default function ArticleModal({ article, onClose, likes, onLike }) {
    if (!article) return null;

    const colors = TAG_COLORS[article.tag] || TAG_COLORS.Front;

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    // Format the body text — convert **text** to bold and newlines to paragraphs
    const formatBody = (text) => {
        return text.split('\n\n').map((paragraph, i) => {
            if (paragraph.trim() === '') return null;

            // Check if it's a list item
            if (paragraph.trim().startsWith('- ')) {
                const items = paragraph.split('\n').filter(l => l.trim().startsWith('- '));
                return (
                    <ul key={i} className="list-disc list-inside space-y-1 my-3 text-gray-600">
                        {items.map((item, j) => (
                            <li key={j}>{formatInline(item.replace(/^-\s*/, ''))}</li>
                        ))}
                    </ul>
                );
            }

            // Check if it's a numbered list
            if (/^\d+\./.test(paragraph.trim())) {
                const items = paragraph.split('\n').filter(l => /^\d+\./.test(l.trim()));
                return (
                    <ol key={i} className="list-decimal list-inside space-y-1 my-3 text-gray-600">
                        {items.map((item, j) => (
                            <li key={j}>{formatInline(item.replace(/^\d+\.\s*/, ''))}</li>
                        ))}
                    </ol>
                );
            }

            // Regular paragraph
            return (
                <p key={i} className="text-gray-600 leading-relaxed my-3">
                    {formatInline(paragraph)}
                </p>
            );
        });
    };

    const formatInline = (text) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-gray-800 font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div
            className="article-modal-overlay"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="article-modal-content">
                {/* Close button */}
                <button
                    id="article-modal-close"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 shadow-md transition-all duration-200 hover:scale-110"
                >
                    <FaTimes className="text-lg" />
                </button>

                {/* Hero image */}
                <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-2xl">
                    <img
                        src={`/imagen/${article.imagen}`}
                        alt={article.titulo}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold ${colors.bg} shadow-lg`}>
                        {article.tag}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 article-modal-body">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                        {article.titulo}
                    </h2>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                            <FaCalendarAlt className="text-primary" />
                            {formatDate(article.fecha)}
                        </span>
                        <span className={`flex items-center gap-2 text-sm ${colors.text}`}>
                            <FaTag />
                            {article.tag}
                        </span>
                        <button
                            id={`article-modal-like-${article.id}`}
                            onClick={() => onLike(article.id)}
                            className="flex items-center gap-2 ml-auto group"
                        >
                            <FaHeart className={`transition-all duration-300 ${likes > 0 ? 'text-red-500 scale-110' : 'text-gray-300 group-hover:text-red-400 group-hover:scale-110'}`} />
                            <span className={`text-sm font-semibold ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}>
                                {likes}
                            </span>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="article-body">
                        {formatBody(article.cuerpo)}
                    </div>

                    {/* Footer actions */}
                    <div className="flex flex-wrap gap-3 mt-8 pt-4 border-t border-gray-200">
                        {article.url && (
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                            >
                                <FaExternalLinkAlt className="text-sm" />
                                View Resource
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
