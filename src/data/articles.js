const list_articles = [
    {
        id: 1,
        titulo: "A Little Front-End for the Road",
        cuerpo: `🚀A Little Front-End for the Road: These Last 26 Years — What I Learned Building 30 Visual Styles on Top of the Same Components 🚀

When I started out in this field, I admired — and still admire — the geniuses who built websites back in the Flash era. Sites that were almost sensory experiences: impossible transitions, animated typography, entire worlds packed into a browser.

I remember thinking, "that's what I want to do." Over the years I understood something a little uncomfortable: that's not who I am. I'm not the visual genius who designs the page that leaves you breathless. For a long time, I felt like that was a shortcoming.

Today I see it differently. What actually hooked me on front-end development was never the aesthetics on their own, but the question underneath:

- How do I make it so a person can solve what they came for with the least friction possible⁉️
- How do I turn a seven-click process into three⁉️
- How do I make a summary understandable in three seconds instead of forcing someone to read a paragraph⁉️

Front-end has always chased two things at once, even if we don't always notice because one makes a lot more noise than the other.

On one side, the visual layer: from the plain HTML of the '90s we moved to skeuomorphism (interfaces that imitated leather, metal, physical buttons), then to flat design, which stripped everything down to color and typography, then to Material Design with its elevation system, to neumorphism, to glassmorphism, to neobrutalism — each wave reacting against the last, almost always for aesthetic or trend-driven reasons.

On the other side, running in parallel and with far less spotlight, usability has been quietly maturing: Nielsen's heuristics, Fitts's Law, task-centered design, design systems, accessibility as a requirement rather than a "nice to have." This second evolution doesn't show up in a screenshot. It doesn't generate a "wow" in a feed. But it's the one that decides whether a system actually works for someone using it at 7 a.m., in a rush, on a phone, with one hand.

My hypothesis is simple: the visual layer is the skin. Usability is the skeleton. And a badly built skeleton doesn't get fixed with better skin.

What did this exercise confirm for me?

Aesthetics are interchangeable; interaction shouldn't be. You can completely redesign a system visually without touching a single user flow, if you separated those layers properly from the start.

Web development, when combined with systems thinking (design systems, reusable components, design tokens), makes exactly this possible: clean interfaces, adapted to whatever visual trend the context or brand calls for, without that trend ever compromising the reason the user is there in the first place.

**What do you prioritize when you design or build: the first visual impression, or how many clicks it takes the user to reach their goal? I'd love to hear your take in the comments.**`,
        fecha: "2026-08-01",
        tag: "Front",
        imagen: "articulo/30casos_front_001.png",
        url: "https://animated-churros-4dd771.netlify.app/",
        code: null,
        likes: 4
    },
    {
        id: 2,
        titulo: "How has AI impacted programming language activity? 🤔",
        cuerpo: `Driven by this question and a curiosity to validate this year's trends, I decided to build my own "source of truth." I used the Stack Overflow API to analyze activity volume across key technologies like C#, Go, Java, PHP, Python, R, and TypeScript.

What started as a simple question evolved into a Modular Data Pipeline. Here’s a breakdown of the architecture and the technical hurdles I cleared:

🚀 The Pipeline Architecture

Resilient Extraction Module (/extractor): I implemented the tenacity library with exponential backoff patterns. If the API hits rate limits, the script automatically manages pauses and retries to prevent blocks.

The Power of Parquet (/io_module): To process 24 months of historical data without crashing the RAM, I swapped CSV/JSON for Parquet. Its columnar storage handles large volumes with a fraction of the memory footprint and superior compression.

Multidimensional Analytics (/analytics): I went beyond raw volume. I calculated the Engagement Rate and Health Index (% of answered questions) to understand which communities are truly the most active and efficient.

🎨 Visualization with a Static Data App (MVC Pattern)
- Model: Strong typing with TypeScript to ensure metadata integrity.
- Controller: Custom React Hooks to orchestrate global filtering in real-time.
- View: Dynamic dashboards built with recharts and react-wordcloud (Bubbles, Treemaps, and Radars).`,
        fecha: "2026-04-01",
        tag: "DATA",
        imagen: "articulo/ia_stack.png",
        url: "https://peppy-capybara-81d560.netlify.app/",
        code: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024/tree/main/04_PRACTICAS/05_DashBoardRadarTecnologia",
        likes: 5
    },
    {
        id: 3,
        titulo: "🚀 Can a dashboard capture the pulse of the global economy? 🚀 ",
        cuerpo: `After recently completing my Master’s in Big Data, I set a challenge for myself: build a tool that translates social media "noise" into actionable financial data. This is part of my Kaizen (continuous improvement) journey.

I developed this Correlation Dashboard that crosses Donald Trump's social media activity with the price of Brent Crude oil (2017-2026).

Behind the Code: Dynamic Web Scraping: Built a Python engine using Playwright to capture thousands of records from Truth Social, overcoming modern rendering obstacles. High-Performance Visualization: Leveraged D3.js with binary search algorithms (bisecting) to ensure a smooth 60fps interaction, even with extensive historical datasets. 

Quantitative Logic: Implemented Log Returns in the client-side logic to measure the statistical impact of each event on the market for the following day (T+1).

The result is a fluid experience where every data point tells a story of market volatility.
`,
        fecha: "2026-03-01",
        tag: "DATA",
        imagen: "articulo/trump_brent.png",
        url: "https://funny-profiterole-bb7e80.netlify.app/",
        code: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024/tree/main/04_PRACTICAS/04_DashBoardTrumpBrent",
        likes: 5
    },
    {
        id: 4,
        titulo: "🚀 CCan a neural network truly understand human handwriting from scratch? 🧠✍️",
        cuerpo: `Driven by the curiosity to dissect Computer Vision fundamentals without black-box shortcuts, I decided to build and train a Convolutional Neural Network (CNN) from scratch using TensorFlow and Keras.

The challenge: Train a binary classifier capable of distinguishing the digit "3" from any other handwritten number in the classic MNIST dataset with production-grade precision.

Here is a breakdown of the end-to-end architecture and the engineering decisions behind the solution:

🚀 The Pipeline Architecture
1. Data Engineering & Pipeline Preprocessing (/data_pipeline):

Binary Relabeling: Transformed 10-class labels (0–9) into a clean binary classification target (1 for digit 3, 0 for others).
Matrix Normalization: Scaled pixel values from [0, 255] to [0.0, 1.0] by dividing by 255.0 to ensure mathematical gradient stability and avoid exploding gradients.
Tensor Reshaping: Converted 2D raw inputs (28, 28) into a single-channel 3D tensor format (28, 28, 1) required by convolutional filters.
2. Feature Extraction & Brain Architecture (/model_architecture):

Feature Extraction Base: Chained Conv2D layers (spatial edge/curve detection) with MaxPooling2D layers (downsampling to isolate salient features and reduce spatial dimensions).
Decision Top (Flatten + Dense): Flattened multidimensional feature maps into a 1D vector connected to fully dense reasoning layers.
Activation Strategy: Used ReLU across hidden layers for computational efficiency and gradient propagation, culminating in a Sigmoid activation on the final output neuron to return a calibrated probability score [0.0, 1.0].
3. The Balance: Parameter Optimization (modelo.summary()):

Designed an architecture with 223,873 trainable parameters—a sweet spot that avoids both Underfitting (insufficient expressive capacity) and Overfitting (memorizing pixel noise).
📊 Training & Validation Results
Compiled with the Adam optimizer and Binary Cross-Entropy loss:

Training Accuracy: 99.90% (Loss: 0.0027)
Validation Accuracy (val_accuracy): 99.81% on unseen test data!
Generalization Check: The minimal gap between training and validation accuracy confirms the model generalized robust visual features of digit "3" rather than overfitting.`,
        fecha: "2026-01-01",
        tag: "IA",
        imagen: "articulo/mnist.png",
        url: null,
        code: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024/tree/main/04_PRACTICAS/01_EJERCICIO_CNN/AppMiniImagen",
        likes: 5
    },
    {
        id: 5,
        titulo: "How can Computer Vision streamline tedious office paperwork? 📄🧾🤔",
        cuerpo: `Every modern workspace handles countless documents daily—from expense receipts and invoices to formal letter-sized reports. Driven by the challenge of automating manual sorting without relying on heavy cloud APIs, I decided to build a Local Visual Document Classifier using Convolutional Neural Networks (CNNs) with TensorFlow, Keras, and Gradio.

The objective: Visually distinguish between Expense Receipts/Tickets and Letter-Sized Text Sheets directly on-device with high confidence and zero cloud latency.

Here is a breakdown of the modular pipeline architecture, the technical hurdles encountered, and how they were solved:

🚀 The Pipeline Architecture
1. Dataset Sanitization & Forensic Cleaning (/data_cleaning):

The Technical Hurdle: Encountered INVALID_ARGUMENT: Unknown image file format during batch loading caused by mobile device formats (such as Apple .HEIC) disguised with false .jpg extensions.
The Solution: Engineered a custom validation script using Python’s imghdr to inspect the actual byte headers ("file signature DNA") instead of trusting file extensions, automatically purging corrupted or spoofed images before ingestion.
2. The 5-Step Atomic Preprocessing Recipe (/data_pipeline):

Deterministic Constants: Standardized inputs to 128x128x3 (Full RGB color channels) with a lightweight batch size of 8 for memory stability.
Dynamic Stratified Split: Partitioned the directory structure into an 80/20 ratio (80% Training / 20% Validation exam).
Automatic Class Indexing: Auto-discovered directory schemas (receipts vs. letter_sheets).
Mathematical Normalization: Scaled RGB pixel intensities from [0, 255] to [0.0, 1.0] (dividing by 255.0) to ensure fast convergence and avoid gradient explosion.
RAM & I/O Optimization: Implemented tf.data pipelines with .cache() and .prefetch(tf.data.AUTOTUNE)—allowing the CPU to prepare the next batch in RAM concurrently while the GPU/accelerator trains the current one.
3. Feature Extraction & CNN Architecture (/model_architecture):

Convolutional Base: Multi-stage Conv2D layers to capture spatial geometry, paper edges, text block density, and receipt aspect ratios.
Spatial Compression: MaxPooling2D layers to compress feature maps, retain dominant signals, and prevent overfitting.
Decision Top: Flatten into dense layers paired with ReLU activations and a final Sigmoid output neuron returning a calibrated probability score (0.0 = Letter Sheet, 1.0 = Receipt).
🎨 Interactive Real-Time App (/gradio_app)
To turn the trained .keras model into an actionable tool:

Interactive UI with Gradio: Developed a lightweight local web interface supporting drag-and-drop file uploads and live webcam capture.
Instant Inference: Snaps a picture of any document on your desk and outputs real-time classification verdicts with confidence percentages (e.g., "Receipt detected with 96.4% confidence").`,
        fecha: "2026-02-01",
        tag: "IA",
        imagen: "articulo/document_vision.png",
        url: null,
        code: "https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024/tree/main/04_PRACTICAS/02_EJERCICIO_CNN_PROPIO_SET",
        likes: 5
    },


];

export default list_articles;
