const list_articles = [
    {
        id: 1,
        titulo: "Design Patterns in React: Beyond Components",
        cuerpo: `React has evolved far beyond simple component-based architecture. Understanding advanced design patterns is crucial for building scalable and maintainable applications.

**Compound Components Pattern**
This pattern allows components to share implicit state while giving the consumer full control over rendering. Think of it like HTML's <select> and <option> — they work together implicitly.

**Render Props & Custom Hooks**
While render props were the go-to pattern for sharing logic, custom hooks have largely replaced them. However, render props still shine when you need to share logic that involves JSX rendering decisions.

**Key Takeaways:**
- Always evaluate if a simpler pattern can solve the problem before reaching for complex ones
- Custom hooks are the modern way to share stateful logic
- Compound components provide flexible APIs for component libraries
- The best pattern is the one your team can understand and maintain

The journey of mastering React patterns is continuous. Each project brings new challenges that push us to think differently about component architecture.`,
        fecha: "2026-08-07",
        tag: "Front",
        imagen: "learn/frontend.png",
        url: "https://github.com/LeoSan/EscuelaJavaScript2021",
        likes: 0
    },
    {
        id: 2,
        titulo: "API REST Best Practices: Lessons from Production",
        cuerpo: `After years of building and consuming REST APIs in production environments, I've compiled the most impactful best practices that make a real difference.

**Versioning Strategy**
Always version your APIs from day one. Whether you choose URL versioning (/api/v1/) or header-based versioning, consistency is key. I prefer URL versioning for its simplicity and discoverability.

**Error Handling Done Right**
A well-structured error response saves hours of debugging. Always include: HTTP status code, error code, human-readable message, and a timestamp. Consider adding a trace ID for distributed systems.

**Pagination & Filtering**
Never return unbounded collections. Implement cursor-based pagination for large datasets — it's more performant than offset-based pagination and handles data mutations gracefully.

**Security Essentials:**
- Always validate input on the server side, never trust the client
- Implement rate limiting to prevent abuse
- Use HTTPS everywhere, no exceptions
- Implement proper CORS policies

**Performance Tips:**
- Use HTTP caching headers (ETag, Cache-Control)
- Compress responses with gzip/brotli
- Consider implementing GraphQL for complex data requirements

Building robust APIs is an art that combines technical excellence with empathy for the developers who will consume them.`,
        fecha: "2026-08-05",
        tag: "Back",
        imagen: "learn/backend.png",
        url: "https://github.com/LeoSan/DesarrolloWebBackendPHP_PLATZI_2021",
        likes: 0
    },
    {
        id: 3,
        titulo: "From Raw Data to Insights: My Data Pipeline Journey",
        cuerpo: `Building effective data pipelines is one of the most rewarding challenges in modern software engineering. Here's what I've learned from building pipelines that process millions of records daily.

**The ETL vs ELT Debate**
Traditional ETL (Extract, Transform, Load) works well for structured data with known schemas. However, modern data lakes favor ELT (Extract, Load, Transform) — load raw data first, then transform as needed. This preserves data fidelity and allows for retrospective analysis.

**Data Quality is Everything**
The most sophisticated ML model is useless with bad data. Implement data quality checks at every stage:
- Schema validation at ingestion
- Null checks and type coercion during transformation
- Statistical anomaly detection on outputs
- Data lineage tracking for auditability

**Tools That Made a Difference:**
- Python + Pandas for prototyping transformations
- Apache Airflow for orchestration
- dbt for SQL-based transformations
- Great Expectations for data validation

**Lessons Learned:**
- Start simple, iterate fast — don't over-engineer your first pipeline
- Monitor everything: latency, data volume, error rates
- Document your data schemas obsessively
- Build idempotent pipelines that can be safely re-run

The data engineering field is evolving rapidly. Staying current requires continuous learning and a willingness to experiment with new tools and approaches.`,
        fecha: "2026-08-03",
        tag: "Data",
        imagen: "learn/data.png",
        url: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024",
        likes: 0
    },
    {
        id: 4,
        titulo: "Practical AI: Integrating LLMs into Real Applications",
        cuerpo: `The explosion of Large Language Models (LLMs) has opened incredible opportunities for software engineers. Here's my practical guide to integrating AI into production applications.

**Prompt Engineering Fundamentals**
The quality of your prompts directly determines the quality of AI outputs. Key principles:
- Be specific and provide context
- Use few-shot examples for complex tasks
- Structure your prompts with clear instructions and constraints
- Iterate and test systematically

**RAG (Retrieval Augmented Generation)**
Pure LLMs have knowledge cutoffs and can hallucinate. RAG solves this by:
1. Indexing your domain-specific documents into a vector database
2. Retrieving relevant chunks based on the user's query
3. Feeding those chunks as context to the LLM
4. Generating grounded, accurate responses

**Production Considerations:**
- Implement guardrails to prevent harmful outputs
- Cache common queries to reduce API costs
- Monitor response quality with automated evaluation
- Have fallback mechanisms when the AI service is unavailable
- Always inform users they're interacting with AI

**Cost Optimization:**
- Use smaller models for simpler tasks (classification, extraction)
- Implement streaming for better user experience
- Batch non-urgent requests
- Fine-tune models for repetitive domain-specific tasks

AI is a powerful tool, but it's not magic. The best AI applications combine machine intelligence with thoughtful engineering and human oversight.`,
        fecha: "2026-08-01",
        tag: "IA",
        imagen: "learn/ia.png",
        url: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024",
        likes: 0
    }
];

export default list_articles;
