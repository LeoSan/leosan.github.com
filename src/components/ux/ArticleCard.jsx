import React from 'react';
import { FaHeart, FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';

const TAG_COLORS = {
    Front: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', glow: 'shadow-blue-200' },
    Back: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', glow: 'shadow-emerald-200' },
    Data: { bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', glow: 'shadow-amber-200' },
    IA: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', glow: 'shadow-purple-200' },
};

export default function ArticleCard({ article, onSelect, likes, onLike }) {
    const colors = TAG_COLORS[article.tag] || TAG_COLORS.Front;

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    // Get first ~120 chars of the body as excerpt
    const excerpt = article.cuerpo
        .replace(/\*\*/g, '')
        .substring(0, 120)
        .trim() + '...';

    return (
        <div className="article-card group" onClick={() => onSelect(article)}>
            {/* Image container */}
            <div className="relative w-full h-44 overflow-hidden">
                <img
                    src={`/imagen/${article.imagen}`}
                    alt={article.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold ${colors.bg} shadow-lg ${colors.glow}`}>
                    {article.tag}
                </span>

                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <FaArrowRight className="text-primary text-lg" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <FaCalendarAlt />
                    <span>{formatDate(article.fecha)}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {article.titulo}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {excerpt}
                </p>

                {/* Footer: Like + Read more */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                        id={`article-like-${article.id}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onLike(article.id);
                        }}
                        className="flex items-center gap-2 group/like"
                    >
                        <FaHeart
                            className={`transition-all duration-300 ${likes > 0
                                ? 'text-red-500 animate-heartbeat'
                                : 'text-gray-300 group-hover/like:text-red-400 group-hover/like:scale-125'
                            }`}
                        />
                        <span className={`text-sm font-semibold ${likes > 0 ? 'text-red-500' : 'text-gray-400'}`}>
                            {likes}
                        </span>
                    </button>

                    <span className={`text-sm font-semibold ${colors.text} flex items-center gap-1 group-hover:gap-2 transition-all duration-200`}>
                        Read more
                        <FaArrowRight className="text-xs" />
                    </span>
                </div>
            </div>
        </div>
    );
}
