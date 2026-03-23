const modules = [
  {
    id: 0,
    emoji: "👋",
    title: "Introduction",
    color: "#6366f1",
    sections: [
      {
        title: "Welcome — What This Course Is About",
        content: `## 🎓 Comprehensive AI Field Guide for Software Engineers
---

## 🎯 Objective

You already know how to build software. This course gives you the **mental model to work alongside AI effectively** — not as a buzzword consumer, but as an engineer who understands what's happening under the hood.

---

## 🧩 What You'll Walk Away With

- 🧠 Bird's-eye view of AI & ML — the important concepts without the noise
- ⚙️ Core knowledge every software engineer needs: tokens, context windows, embeddings, RAG
- 💬 How to use Claude & ChatGPT like a skilled developer — for coding, testing, and architecture
- ✍️ **Prompt Engineering** — Do's, Don'ts, and ready-to-use templates for your daily workflow
- 🛠️ The modern AI engineering stack and what it takes to ship AI features in production

---

> ⚡ **No maths. No theory dumps. Just what a senior dev needs to know.**

---
## ✍️ Author: Santhosha & AI Odds 😊 

 `
      }
    ]
  },
  {
    id: 1,
    emoji: "🧠",
    title: "How AI Works",
    color: "#6366f1",
    sections: [
      {
        title: "What is AI?",
        content: `Artificial Intelligence is a system that mimics human cognitive functions — reasoning, learning, problem-solving, and decision-making.
    {AILearningImage}   
**3 Layers of AI:**
- **Narrow AI** — Does one thing extremely well (Siri, Google Search, Spam filters)
- **General AI** — Human-level reasoning across all tasks (still theoretical)
- **Super AI** — Beyond human intelligence (future/sci-fi)

**Core Architecture:**
AI = Data + Algorithm + Compute

Think of it like this as a senior dev:
- **Data** = Your database / training set
- **Algorithm** = Your business logic / model
- **Compute** = Your cloud infrastructure (GPUs/TPUs)
- **Output** = Predictions, text, images, decisions`
      },
      {
        title: "AI vs ML vs Deep Learning vs GenAI",
        content: `**Hierarchy (largest to smallest scope):**
  
\`\`\`
title:AI Hierarchy — Largest to Smallest Scope
AI
└── Machine Learning
    └── Deep Learning
        └── Generative AI (LLMs, Diffusion Models)
\`\`\`

- **AI**: Broad umbrella — any machine simulating intelligence
- **ML**: AI that *learns from data* without explicit programming
- **Deep Learning**: ML using *neural networks* with many layers
- **GenAI**: Deep learning models that *generate* new content (text, image, audio, code)

**Analogy for developers:**
- AI = the concept of "web development"
- ML = the concept of "backend development"
- Deep Learning = "using Node.js / Python frameworks"
- GenAI = "building a ChatBot SaaS on top of those frameworks"`
      }
    ]
  },
  {
    id: 2,
    emoji: "⚙️",
    title: "Machine Learning Deep Dive",
    color: "#0891b2",
    sections: [
      {
        title: "How ML Works",
        content: `ML models *learn patterns* from historical data to make predictions on new data.

**The ML Pipeline (like a CI/CD for intelligence):**
1. **Data Collection** → Raw data (CSVs, databases, APIs)
2. **Data Preprocessing** → Cleaning, normalization, feature engineering
3. **Model Selection** → Pick algorithm based on problem type
4. **Training** → Feed data, model adjusts internal weights
5. **Evaluation** → Check accuracy, precision, recall, F1 score
6. **Deployment** → Serve as API endpoint (sound familiar? 😄)
7. **Monitoring** → Watch for model drift over time

**Training = Optimization:**
The model has millions of *parameters (weights)*. During training, it:
- Makes a prediction
- Calculates *error* (Loss Function)
- Adjusts weights using *Gradient Descent* + *Backpropagation*
- Learn more About Gradient Descent - [Watch: Gradient Descent explained with Google Maps](https://youtu.be/QoK1nNAURw4?si=fCTBhvPcHnebHXkJ)
- Learn more about Backpropogation - [Watch: Backpropagation](https://youtu.be/ovCyBmlrZGg?si=6wpFvcPbP7xo3QTW)
- Repeats millions of times

Think of it as: **auto-tuning a configuration file until errors hit near zero.**`
      },
      {
        title: "Types of ML",
        content: `**1. Supervised Learning**
- **Definition:** Learns from labeled data — every input has a known correct output
- **Real-World Example: Email Spam Identifier**
  - **Input Features:** External links, urgency phrases, grammatical mistakes, sensitive info requests, suspicious URL patterns
  - **Label (Known Output):** Spam or Not Spam (manually tagged on thousands of historical emails)
  - **Training:** Model learns which feature combinations = spam from the labeled dataset
  - **Algorithm:** Naive Bayes or Decision Tree — on new email arrival, scores the features and alerts the user if spam threshold is crossed
   - Step 1 → Train on thousands of historical emails (already labeled Spam/Not Spam)
   - Step 2 → Model learns the patterns (which features = spam)
   - Step 3 → New email arrives → model predicts → alerts user

- **Other Examples:** House price prediction, Fraud detection
- **Algorithms:** Linear Regression, Decision Trees, SVM, Neural Networks — [Watch: Neural Networks](https://youtu.be/0kZIGB_dG80?si=afWRYK5B76z5udfi)

**2. Unsupervised Learning**
- No labels — find hidden patterns
- Examples: Customer segmentation, anomaly detection
- Algorithms: K-Means, DBSCAN, PCA, Autoencoders

**2.A Differences **
- Supervised learning uses labeled training data, and unsupervised learning does not. 
- More simply, supervised learning models have a baseline understanding of what the correct output values should be. 

**3. Reinforcement Learning**
- Agent learns by reward/penalty in an environment
- Examples: Game AI (AlphaGo), robotics, recommendation engines
- Algorithms: Q-Learning, PPO, A3C

**4. Semi-Supervised & Self-Supervised**
- Mix of labeled + unlabeled (used in LLMs!)
- GPT-style models are trained via *self-supervision* — predict the next token
- GPT abbrevaiate itself as - Generative Pre-Trained Transformers(Algoritham)`
      },
      {
        title: "Main Algorithms — A Developer's Cheat Sheet",
        content: `| Algorithm | Type | Use Case | Complexity |
|-----------|------|----------|------------|
| Linear Regression | Supervised | Price prediction | Low |
| Logistic Regression | Supervised | Binary classification | Low |
| Decision Tree | Supervised | Rules-based classification | Medium |
| Random Forest | Supervised | Ensemble, robust predictions | Medium |
| XGBoost / LightGBM | Supervised | Kaggle champion, tabular data | Medium-High |
| SVM | Supervised | Text classification, small data | Medium |
| K-Means | Unsupervised | Clustering users/products | Low |
| K-Nearest Neighbors | Supervised | Recommendation, classification | Low |
| Naive Bayes | Supervised | Spam filter, text | Low |
| Neural Networks | All | Images, text, audio, anything | High |
| CNN | Supervised | Image recognition | High |
| RNN / LSTM | Supervised | Time series, sequences | High |
| Transformer | Self-supervised | NLP, LLMs (GPT, Claude, etc.) | Very High |


**As a senior dev — focus on:**
- XGBoost for tabular/structured data
- Transformers for anything language/text
- CNNs for image tasks`

      }
    ]
  },
  {
    id: 3,
    emoji: "🔤",
    title: "Tokens & How LLMs Work",
    color: "#059669",
    sections: [
      {
        title: "What is a Token?",
        content: `A **token** is the basic unit of text an LLM processes. NOT a word, not a character — something in between.
{TokensImage}
**Tokenization Examples:**
- "Hello" → 1 token
- "Hello world" → 2 tokens
- "ChatGPT" → 2 tokens: "Chat" + "GPT"
- "Unbelievable" → 3-4 tokens
- Code like \`console.log\` → ~3-4 tokens

**Rule of thumb:**
- 1 token ≈ 4 characters ≈ ¾ of a word
- 100 tokens ≈ 75 words
- 1,000 tokens ≈ 750 words ≈ ~1.5 pages

**Why tokens matter technically:**
- Models have a **context window** — max tokens they can "see" at once
  - GPT-4: 128K tokens
  - Claude 3.7: 200K tokens
  - Gemini 1.5 Pro: 1M tokens
- Both your *input* (prompt) and *output* (response) consume tokens
- Longer context = more memory usage + more compute = higher cost`
      },
      {
        title: "How Tokenization Works Internally",
        content: `LLMs use **Byte Pair Encoding (BPE)** or **SentencePiece** tokenization:

1. Start with characters as individual tokens
2. Merge the most frequent pairs repeatedly
3. Build a vocabulary of ~50,000–100,000 tokens

**To Learn about the how LLM works?**
- How different model generates different Tokens count?
- How Vocabulary Built? whats the advantage of Large vocabulary?
- Larger Vocabulary = Larger Memory to store = Higher the Cost
- How can we consume the SDK files of the different models in .tsx?
- How LLM process the Unused words?
- [Watch: How LLM Works](https://youtu.be/nKSk_TiR8YA?si=y85QJQINZElPN9I1)

\`\`\`
title:Real-World Example — "Hello World!" through an LLM
Input Text - "Hello World!"
   ↓ Tokenizer Encode
Token IDs [1023, 891, 5523, ...]
   ↓ Embedding Layer
LLM (Algorithm: Transformers)
   ↓ Transformer Blocks (Attention + FFN layers)
Generates the Tokens
   ↓
Next token ID → decoded to text [456, 789...]
   ↓
Output Text - "Hi!"
\`\`\`

\`\`\`
title:The Forward Pass (Simplified)
Input Text
   ↓ Tokenizer
Token IDs [1023, 891, 5523, ...]
   ↓ Embedding Layer
Dense Vectors (e.g., 4096 dimensions per token)
   ↓ Transformer Blocks (Attention + FFN layers)
Contextual representations
   ↓ Final Linear + Softmax Layer
Probability distribution over vocabulary
   ↓ Sampling (temperature, top-p)
Next token ID → decoded to text
\`\`\`

**Attention mechanism** is the key innovation:
- Each token "attends" to every other token in context
- Learns *relationships* between words (syntax, semantics, facts)
- Multi-head attention = parallel attention patterns`
      }
    ]
  },
  {
    id: 4,
    emoji: "💰",
    title: "Pricing, Costs & Subscriptions",
    color: "#d97706",
    sections: [
      {
        title: "How AI API Charges Work",
        content: `**Token-based pricing** — you pay per 1,000 or 1,000,000 tokens (varies by provider).

**Claude Pricing (approx, as of early 2026):**
| Model | Input | Output |
|-------|-------|--------|
| Claude Haiku | $0.25/M tokens | $1.25/M tokens |
| Claude Sonnet | $3/M tokens | $15/M tokens |
| Claude Opus | $15/M tokens | $75/M tokens |

**OpenAI GPT-4o:**
| Input | Output |
|-------|--------|
| $2.50/M tokens | $10/M tokens |

**Key cost drivers:**
- **Input tokens**: Your prompt + entire conversation history sent each time
- **Output tokens**: Typically 3-5x more expensive than input
- **Context window size**: Larger context = more tokens processed = higher cost
- **Model tier**: Bigger model = smarter but costlier

**Cost estimation formula for devs:**
\`Cost = (input_tokens × input_price) + (output_tokens × output_price)\`

Example: 10 API calls, avg 2K input + 500 output tokens on Sonnet:
= (20,000 × $0.000003) + (5,000 × $0.000015) = $0.06 + $0.075 = ~$0.135`
      },
      {
        title: "Subscription vs API — When to Use What",
        content: `**Consumer Subscriptions (Claude Pro, ChatGPT Plus ~$20/mo):**
✅ Best for: Individual use, daily work, writing, coding help
✅ Unlimited* usage (with rate limits)
✅ Access to latest models
✅ No per-token billing complexity
❌ Not for: Building products / integrating into your apps

**API Access (pay-per-use):**
✅ Best for: Building apps, automation pipelines, integrations
✅ Programmatic access
✅ Full control over model, parameters
✅ Scale from 0 to millions of calls
❌ Costs can spike without usage caps

**Enterprise Plans:**
✅ SSO, admin controls, data privacy guarantees (no training on your data)
✅ Higher rate limits
✅ SLAs and compliance (HIPAA, SOC2)
✅ Custom context windows
✅ In our Organization - Currrently using this

**For your use as a senior dev:**
- Personal: Pro subscription for daily coding assistance
- For projects: API with budget alerts set
- For teams/startups: Enterprise for data privacy`
      }
    ]
  },
  {
    id: 5,
    emoji: "🌐",
    title: "How AI Fetches Data",
    color: "#7c3aed",
    sections: [
      {
        title: "Training Data vs Real-time Data",
        content: `**Two completely different data pipelines:**
      {AITrainingImage}
      {GPT3Datasets}
      {WebCrawlerVsWebScraperImage}
      {AdvancedRAGArchitectureImage}
**1. Training Data (Offline — happens once)**
- LLMs are trained on massive internet snapshots: Common Crawl, Wikipedia, GitHub, books, Reddit, etc.
  - **Common Crawl** — a non-profit that freely hosts massive internet snapshots to help researchers, developers, and entrepreneurs build groundbreaking technologies. [Read More](https://commoncrawl.org/mission)
- Claude, GPT-4, Gemini — all trained on *hundreds of billions* of tokens
- This gives the model its "knowledge" up to a **cutoff date**
- The model doesn't "look things up" — it has compressed knowledge *baked into weights*
- Think of it like a developer who studied millions of Stack Overflow posts — they know a lot, but nothing after their last study session

**2. Retrieval-Augmented Generation (RAG) — Real-time**
- Most production AI apps use RAG to inject fresh data
- Architecture:
\`\`\`
title:RAG Architecture — How Real-Time Data is Injected
User Query ("What is our refund policy?")
    ↓
Embedding Model → Query Vector [0.23, -0.87, ...]
    ↓
Vector DB: cosine similarity search against stored doc vectors
    ↓
Top-K most relevant document chunks retrieved
    ↓
[System Prompt] + [Retrieved Chunks as Context] + [User Query]
    ↓ combined into one prompt
LLM reads context → generates grounded, accurate answer
\`\`\`
- This is how AI chatbots answer questions about YOUR company's docs

**3. Tool Use / Function Calling — Dynamic**
- LLMs can call external APIs/tools mid-conversation
- Claude, GPT-4 support *tool use*: web search, code execution, DB queries
- Model decides *when* to use a tool, calls it, gets result, incorporates into answer

**4. Real-World RAG — Company Policy Chatbot (see Image 3)**

Suppose you have your company's policy documents and standards, and you want to build a chatbot to help customers get answers from them. Here is exactly how it works:

**Phase 1 — Indexing (One-time setup)**
- Upload your documents to a Cloud Provider (AWS / Azure) where the Vector DB is hosted
- Documents are **chunked** into smaller pieces (typically 256–1024 tokens per chunk — chunk size is tunable based on your use case)
- Each chunk is passed through an **Embedding Model** → converted to a vector → stored in the Vector DB
- ⚠️ The embedding model used here must be the **same model** used at query time — mixing models breaks similarity scores

**Phase 2 — Query Pipeline (runs on every user request)**
- User submits a question: *"What is our refund policy?"*
- The query is passed through the **same Embedding Model** → converted to a query vector
- Vector DB performs a **cosine similarity search** → finds the top-K chunks whose vectors are closest to the query vector
- Those chunks are retrieved as **context** (this is the "Retrieval" in RAG)
- The system builds a final prompt: **[System Prompt] + [Retrieved Context] + [User Query]**
- The **LLM reads the context and generates the answer** — it never searches the internet; it only knows what was injected into the prompt
- The response is formatted and returned to the user

**What Exactly Does the LLM Do in RAG?**

The Vector DB is just a retrieval machine — it finds relevant text but it cannot reason, summarise, or explain. That is where the LLM steps in. Think of the Vector DB as a librarian who hands you the right books, and the LLM as the expert who reads those books and writes you a clear, tailored answer.

The LLM performs five distinct jobs inside a RAG pipeline:

**1. Reading and Understanding Context**
The LLM receives raw document chunks — these could be policy paragraphs, support articles, legal clauses, or API docs. It reads all of them together and understands how they relate to the user's question. A keyword search would just return the chunks; the LLM actually comprehends them.

**2. Synthesising Across Multiple Chunks**
The top-K retrieval may return 3 to 5 chunks from different parts of a document, or even from different documents. The LLM merges these into a single coherent answer. For example, the refund window may be in chunk 1 and the exceptions list may be in chunk 4 — the LLM combines both into one response naturally.

**3. Handling What Is Not in the Context (Grounding)**
A well-prompted LLM will say *"I don't have enough information to answer that"* when the retrieved context does not contain the answer, rather than hallucinating. This is called **grounded generation** — the LLM is instructed to answer only from the provided context, not from its training data.
\`\`\`
title:System Prompt Pattern for Grounded RAG
You are a helpful assistant for Acme Corp.
Answer ONLY using the provided context below.
If the answer is not in the context, say:
"I don't have that information. Please contact support."

Context:
{retrieved_chunks}

User question: "How the Acme Corp makes DoubleDigit Profit from Iron ore extraction?"

Suppose : Acme Corp is a Cosmetic Company - RAG should not hallucinate....!
\`\`\`

**4. Formatting the Response**
Raw document chunks are not user-friendly — they may be bullet-heavy policy text, dense legal language, or raw markdown. The LLM rewrites the answer in a natural, conversational tone appropriate for the user. It can apply headings, bullet points, bold key terms, or plain paragraphs depending on the system prompt instructions.

**5. Handling Follow-up Questions (Conversational RAG)**
In a chat interface, the LLM also tracks conversation history. If the user asks *"What about international orders?"* as a follow-up, the LLM understands that "that" refers to the refund policy from the previous turn, re-runs retrieval with the enriched context, and answers coherently — without the user having to repeat themselves.

**What the LLM Does NOT Do in RAG**

| Responsibility | Who handles it |
|---|---|
| Find relevant documents | Vector DB (cosine similarity search) |
| Store or index documents | Embedding model + Vector DB |
| Know your company data by default | Nobody — you must inject it via RAG |
| Generate the answer | LLM |
| Format and polish the response | LLM |
| Decide if context is sufficient | LLM (via system prompt instructions) |

**Senior Dev Insight — RAG vs Fine-tuning**
A common question is: *"Why not just fine-tune the LLM on our documents instead of using RAG?"*

- **Fine-tuning** bakes knowledge into the model weights permanently — expensive, slow to update, and risky (the model may hallucinate blended facts)
- **RAG** keeps knowledge external and updatable — change a document in the Vector DB and the LLM immediately answers differently with zero retraining
- In production, **RAG is almost always the right choice** for knowledge bases, support bots, and internal tools. Fine-tuning is reserved for changing the model's *behaviour or style*, not its *knowledge*.`
      },
      {
        title: "Vector Embeddings — The Secret Sauce",
        content: `**Simple Analogy First — The Map of Meaning**

Imagine a giant map where every word, sentence, or document is plotted as a dot.
Words with *similar meaning* land *near each other* on this map.

- "dog" and "puppy" → dots very close together
- "dog" and "quantum physics" → dots far apart
- "happy", "joyful", "elated" → all clustered in the same neighborhood

That map IS the vector space. An **embedding** is just the GPS coordinate of a word on that map.

- [Watch: Vector Embedding Explained](https://youtu.be/NEreO2zlXDk?si=243kqIxW3sR7cF47)

**What is a Vector, Actually?**

A vector is just a list of numbers. Nothing magical.
\`\`\`
title:What "dog" might look like as a vector (simplified)
"dog" → [0.21, -0.54, 0.88, 0.03, -0.67, ...]
                                    (1536 numbers total)
\`\`\`
Each number captures a tiny aspect of meaning — things like:
- Is this a living thing?
- Is this positive or negative?
- Is this abstract or concrete?
- Is this related to animals? to royalty? to technology?

No human labelled these. The model *learned* them by reading billions of sentences.

**Why 1536 Dimensions?**

You know X/Y coordinates on a 2D map — 2 dimensions.
Add height → 3 dimensions.
AI uses **1536 dimensions** to capture *every nuance of meaning*.
More dimensions = more precision = better understanding of subtle differences.

**The Famous Example — King Minus Man**
\`\`\`
title:Vector Arithmetic — Meaning has Math
"king"   - "man"   + "woman"  ≈  "queen"

Royalty  - Male    + Female   =  Female Royalty

This works because the model learned gender and royalty
as separate directions in the 1536-dimensional space.
\`\`\`

**Similar Meaning = Close Distance**

Two pieces of text are "similar" if their vectors point in the same direction.
This is measured using **cosine similarity** — think of it as the angle between two arrows.

- Angle ≈ 0° → identical meaning (similarity = 1.0)
- Angle ≈ 90° → unrelated (similarity = 0.0)
- Angle ≈ 180° → opposite meaning (similarity = -1.0)

**How It Powers Search — Step by Step**
\`\`\`
title:Semantic Search — How "Find Similar Docs" Actually Works
Step 1: At index time
  Your doc: "JWT tokens expire after 24 hours"
      ↓ Embedding model
  Vector: [0.23, -0.87, 0.44, ...] ← stored in Vector DB

Step 2: At query time
  User asks: "How long does authentication last?"
      ↓ Same embedding model
  Query vector: [0.21, -0.83, 0.47, ...] ← very similar numbers!

Step 3: Cosine similarity search
  Compare query vector against all stored vectors
      ↓
  Returns the JWT doc as top match — even though
  the words "JWT" and "authentication duration" never overlapped!
\`\`\`

**Keyword Search vs Semantic Search**

| | Keyword Search (old) | Semantic Search (embeddings) |
|---|---|---|
| How it works | Exact word match | Meaning match |
| "auth timeout" finds "JWT expiry"? | No | Yes |
| Handles synonyms? | No | Yes |
| Handles different languages? | No | Yes (multilingual models) |
| Speed | Fast | Fast (with Vector DB index) |

**The Embedding Pipeline as a Dev**
\`\`\`
title:Embedding Pipeline — Text to Vector to Search
"How does JWT auth work?"
       ↓ Embedding model (e.g., text-embedding-3-small)
[0.23, -0.87, 0.44, 0.12, ...] (1536 floats)
       ↓ Stored in Vector DB (Pinecone, pgvector, etc.)
       ↓ At query time: cosine similarity search
       ↓ Returns top-k most semantically similar docs
       ↓ Injected into LLM prompt as context (RAG)
\`\`\`

**Popular Vector DBs:** Pinecone, Weaviate, Qdrant, Milvus, pgvector (Postgres extension)

**One-line mental model:** A Vector DB is like a SQL database, but instead of WHERE name = 'foo', you query WHERE meaning ≈ 'foo'.`
      }
    ]
  },
  {
    id: 6,
    emoji: "🏛️",
    title: "Evolution of Claude, GPT & Gemini",
    color: "#be185d",
    sections: [
      {
        title: "GPT / OpenAI Timeline",
        content: `| Year | Model | Key Milestone |
|------|-------|---------------|
| 2018 | GPT-1 | First transformer-based LLM, 117M params |
| 2019 | GPT-2 | 1.5B params, "too dangerous to release" |
| 2020 | GPT-3 | 175B params, few-shot learning, API launch |
| 2022 | InstructGPT | RLHF introduced — model follows instructions |
| 2022 | ChatGPT | GPT-3.5 with chat interface — 100M users in 60 days |
| 2023 | GPT-4 | Multimodal, 1T+ params, massive reasoning leap |
| 2024 | GPT-4o | Omni — text, image, audio in one model, faster |
| 2025 | o1, o3 | "Reasoning" models — chain-of-thought at inference |
| 2026 | GPT-5? | Expected major release |

**Key innovations:** RLHF (Reinforcement Learning from Human Feedback), multimodality, reasoning/thinking models`
      },
      {
        title: "Claude / Anthropic Timeline",
        content: `| Year | Model | Key Milestone |
|------|-------|---------------|
| 2021 | Anthropic founded | Ex-OpenAI team, safety-focused |
| 2023 | Claude 1 | Constitutional AI — model trained with AI-generated feedback |
| 2023 | Claude 2 | 100K context window, much better reasoning |
| 2024 | Claude 3 (Haiku/Sonnet/Opus) | First tiered family, Opus beat GPT-4 on benchmarks |
| 2025 | Claude 3.5 Sonnet | Coding excellence, computer use (controls browser!) |
| 2025 | Claude 3.7 Sonnet | Extended thinking — visible reasoning chains |
| 2026 | Claude Sonnet 4.6 | Current model (that's me!) |

**Anthropic's key differentiator:** Constitutional AI + safety research. Models are trained to be *helpful, harmless, and honest* using AI feedback rather than only human labelers.`
      },
      {
        title: "Gemini / Google Timeline",
        content: `| Year | Model | Key Milestone |
|------|-------|---------------|
| 2017 | Transformer paper | Google Brain invented the architecture everyone uses |
| 2018 | BERT | Bidirectional transformers, NLP revolution |
| 2021 | LaMDA | Conversational model (leaked "sentience" controversy) |
| 2022 | PaLM | 540B params, strong reasoning |
| 2023 | Bard | Google's ChatGPT competitor (rocky launch) |
| 2023 | Gemini 1.0 | Natively multimodal from ground up |
| 2024 | Gemini 1.5 Pro | 1M token context window — insane scale |
| 2025 | Gemini 2.0 | Agentic capabilities, real-time multimodal |
| 2026 | Gemini 2.5? | Deep integration with Google ecosystem |

**Google's advantage:** Search index, YouTube data, Maps, proprietary TPU hardware, and owning the original Transformer architecture.`
      }
    ]
  },
  {
    id: 7,
    emoji: "🤖",
    title: "How Claude Answers You",
    color: "#0f766e",
    sections: [
      {
        title: "The Full Answer Pipeline",
        content: `When you send me a message, here's what happens technically:

**Step 1: Tokenization**
Your text is split into tokens and converted to IDs.

**Step 2: Context Assembly**
The full context window is built:
\`\`\`
title:Context Window Assembly — What the Model Sees
[System Prompt] + [Conversation History] + [Your Message]
\`\`\`
This entire "document" is sent to the model every single time.

**Step 3: Forward Pass**
96+ transformer layers process all tokens simultaneously via attention. Each layer refines the representation.

**Step 4: Token Generation (Autoregressive)**
The model outputs ONE token at a time:
- Computes probability over entire vocabulary (~100K tokens)
- Samples the next token (temperature controls randomness)
- Appends to context, repeats until \`<end>\` token

**Step 5: Streaming**
Tokens are streamed to you as they're generated — that's why you see text appear word-by-word.

**Total time:** 200ms–2s depending on output length and model size.`
      },
      {
        title: "🧠 Memory & Stateless Conversations — The Truth Every Dev Must Know",
        content: ` {ClaudeCodePillarsImage}

⚡ **This is the #1 misconception developers have about LLMs.**

## 🔁 Every Conversation is Stateless — Like an HTTP Request

When you talk to an LLM, it has **zero memory of you** between sessions.
Think of it exactly like an HTTP server:

\`\`\`
title:🌐 HTTP vs LLM — The Stateless Parallel
HTTP:
  → You send a request
  ← Server responds
  💨 Connection closes. Server remembers nothing.
  → Next request? Start from zero.

LLM:
  → You send a message
  ← Model responds
  💨 Session ends. Model remembers nothing.
  → New conversation? Completely blank slate.
\`\`\`

---

## 🤯 What "Stateless" Actually Means

Every time you send a message, the **entire conversation history is bundled and sent** inside the context window. The model doesn't "remember" — it **re-reads everything from scratch** on every single API call.

\`\`\`
title:📦 What Gets Sent on Every API Call
[ System Prompt ]
    +
[ Message 1 ] + [ Reply 1 ]
    +
[ Message 2 ] + [ Reply 2 ]
    +
[ Your New Message ]  ← appended at the end
\`\`\`

The illusion of memory? That's just the chat app **stuffing full history into each request.** The model itself is completely stateless.

---

## 😮 The Forget Test — Try It Yourself

\`\`\`
title:🧪 Stateless Proof — Two Separate Conversations
Conversation 1:
  User:      "My name is Raj, I'm a senior engineer at Acme Corp"
  Assistant: "Nice to meet you, Raj! How can I help?"

Conversation 2 (new session):
  User:      "What's my name?"
  Assistant: "I don't know your name — could you tell me?"  😶
\`\`\`

**The model isn't being rude. It genuinely has zero recollection.**

---

## 💥 What Happens When History Gets Too Long?

Every model has a **context window limit** (e.g., 200K tokens for Claude). When your conversation history exceeds it:

| Situation | What Happens |
|-----------|-------------|
| 🟢 Short conversation | Full history fits — perfect recall |
| 🟡 Long conversation | App truncates older messages silently |
| 🔴 Very long session | Early context is lost — model "forgets" the beginning |
| 🛠️ Production system | Summarisation layer kicks in to compress old history |

📝 **Note (Claude Code CLI):** Claude Code introduced a /compact command — when you run it manually, it **summarises the entire conversation so far** into a condensed form, freeing up context space so the session can continue. It does not trigger automatically and does not shrink the model's context window — it replaces old message history with a concise summary.
---

## 🏗️ How Real Apps Fake Persistent Memory

Since the model is stateless, apps build a **memory layer on top**:

| Method | How It Works | Best For |
|--------|-------------|---------|
| 💬 **In-context** | Full chat history bundled every API call | Short sessions, basic chatbots |
| 📝 **Summary Memory** | Compress old messages into a summary, inject it | Long multi-turn conversations |
| 🔍 **Vector Memory** | Embed past messages, retrieve relevant ones via similarity search | Personalised assistants, Claude Projects |
| 🗄️ **External DB** | Store user facts in a database, inject as system prompt | Enterprise bots, CRM integrations |
| 🔧 **Tool Use** | Model calls a "memory" tool to explicitly read/write facts | Advanced AI agents |

---

## 🔐 Where Your Data Actually Lives

- 🌐 **Claude.ai conversations** → Stored on Anthropic's servers
- 🔌 **API calls** → Generally NOT stored for training (especially on Enterprise)
- 🧠 **Claude Projects memory** → Extracts key facts, stored in Anthropic's memory system
- ⚙️ **Training opt-in** → Your prompts train future models ONLY if you opted in (turn off in settings)

---

## 🧑‍💻 Developer Takeaway

> 💡 **The LLM is a pure function:** same inputs → deterministic-ish output. No side effects, no hidden state, no memory.
> Build your stateful layer (DB, vector store, session store) *around* it — not inside it.`
      },
      {
        title: "📋 System Prompt — The Hidden Director Behind Every AI App",
        content: `## 🎭 What is a System Prompt?

A **System Prompt** is a hidden set of instructions sent to the model **before** any user message. The user never sees it — but it shapes every single response the model gives.

Think of it like a **job brief handed to an employee before a customer walks in**:
- The customer talks to the employee normally
- But the employee already has private instructions on how to behave, what to say, and what to avoid

---

## 🐴 Best Analogy — Horse Blinkers

{HorseBlinkers}

Think of the System Prompt as **horse blinkers** — the leather shields placed beside a horse's eyes to block its side and rear vision.

The horse is still powerful and fully intelligent. The blinkers don't reduce its strength — they simply **narrow its world** to exactly what the jockey needs.

An LLM with a system prompt works identically:

| 🐴 Horse Blinkers | 📋 System Prompt |
|---|---|
| Blocks peripheral vision | Blocks off-topic responses |
| Forces focus on the road ahead | Forces focus on your domain only |
| Horse retains full strength & intelligence | LLM retains full capability |
| Jockey controls what the horse sees | Developer controls what the model does |
| Remove blinkers → horse gets distracted | Remove system prompt → model goes off-brand |

> 💡 **Key insight:** You are not making the LLM dumber — you are making it **laser-focused**. A well-written system prompt turns a general-purpose model into a specialist that never wanders off-task.

\`\`\`
title:📦 What the Model Actually Receives (Full Context)
┌─────────────────────────────────────────────┐
│  SYSTEM PROMPT  ← hidden from user          │
│  "You are a helpful banking assistant..."   │
├─────────────────────────────────────────────┤
│  USER MESSAGE   ← what user typed           │
│  "What is my account balance?"              │
├─────────────────────────────────────────────┤
│  ASSISTANT REPLY ← model generates this    │
│  "I can help with that! Please log in..."  │
└─────────────────────────────────────────────┘
\`\`\`

The model reads **all three layers together** before generating a single token.

---

## 🏦 Use Case — AI Customer Support Bot for a Bank

Imagine you're building a chatbot for **"Acme Bank"**. Without a system prompt, the model would behave like a generic assistant. With one, you shape it into a focused, safe, on-brand agent.

\`\`\`
title:🏦 Acme Bank — Real System Prompt Example
You are Acme Bank's customer support assistant.

Your role:
- Help customers with account queries, card issues, and loan questions
- Always greet the user by name if provided
- Speak in a professional but friendly tone

Rules you MUST follow:
- Never reveal internal bank policies or fee structures not listed below
- Never give specific financial or legal advice — always say "consult your advisor"
- If the user asks about competitor banks, politely decline to compare
- Do not discuss topics unrelated to banking

Available info you can share:
- Savings account interest rate: 4.5% p.a.
- Credit card limit increase: user must call 1800-ACME-BANK
- Loan EMI calculator: available at acmebank.com/emi

If you cannot help, say: "I'll connect you to a human agent shortly."
\`\`\`

**Now watch how the same user message gets two very different responses:**

| Customer Query | Without System Prompt | With System Prompt |
|---|---|---|
| "Which bank has the best interest rate?" | "Sure! I can compare bank interest rates across India..." | "At Acme Bank our savings rate is 4.5% p.a. For specific advice, please consult your financial advisor." |
| "Tell me about HDFC vs Acme Bank" | Talks about competitors freely | Politely declines competitor comparisons |
| "Should I take a personal loan?" | Gives generic financial advice | Defers to human agents for complex queries |
| "Hi, help me with my account" | No personality or brand tone | Professional, on-brand, focused |


## 📁 Real-World Example — CLAUDE.md as a System Prompt

You already use system prompts in your dev workflow — you just didn't call it that.

**CLAUDE.md** is a file you place at the root of your codebase. When you open Claude Code in that project, the file is automatically injected as the system prompt — giving Claude full context about your project before you type a single message.

\`\`\`
title:📁 CLAUDE.md — Codebase System Prompt Example
# Project: Acme Bank Portal

## Tech Stack
- Frontend: React 19 + Vite, JSX (no TypeScript)
- Backend: Node.js + Express + PostgreSQL
- Auth: JWT stored in httpOnly cookies

## Coding Rules
- Always use functional components, no class components
- Use CSS variables from index.css — never hardcode colours
- All API calls go through src/api/client.js — never use fetch directly

## Project Structure
- src/components/ — reusable UI components
- src/pages/      — route-level page components
- src/api/        — all backend communication

## Important Context
- The /payments route is PCI-DSS compliant — never log card data
- Database migrations live in db/migrations/ — always create new files, never edit existing
- Run npm test before every commit — CI will block PRs if tests fail
\`\`\`

**What this achieves:**
- Claude knows your stack — no need to explain React vs Angular every session
- Claude follows your team's conventions automatically
- Claude understands your security rules (no logging card data, etc.)
- Every conversation starts with full project context — like onboarding a new dev instantly

| Without CLAUDE.md | With CLAUDE.md |
|---|---|
| "What framework are you using?" | Already knows it's React 19 + Vite |
| Suggests TypeScript imports | Respects your JSX-only rule |
| Uses fetch() directly | Routes calls through src/api/client.js |
| Generic advice | Advice specific to your architecture |

 💡 **Dev tip:** CLAUDE.md is your **permanent system prompt for your codebase**. Treat it like onboarding documentation for an AI teammate — the more context you put in, the less you repeat yourself across sessions.

## 🔑 Key Properties of System Prompts

- 🙈 **Invisible to the user** — they never see it in the chat UI
- ⚡ **Sent on every single API call** — re-injected with full history each turn
- 🧱 **Sets hard guardrails** — what the model will and won't do
- 🎨 **Defines persona & tone** — formal, casual, technical, friendly
- 📌 **Injects business context** — product info, pricing, policies, user data

 💡 **Dev tip:** The system prompt is your most powerful tool. A well-crafted system prompt can turn a general-purpose LLM into a laser-focused domain expert for your product — no fine-tuning required.`
      },
      {
        title: "Constitutional AI — Why Claude Behaves Differently",
        content: `Anthropic's unique training method:

**Standard RLHF (OpenAI approach):**
\`Human labelers → rank responses → train reward model → fine-tune LLM\`

**Constitutional AI (Anthropic approach):**
\`\`\`
title:Constitutional AI — Anthropic's Training Process
1. Define a Constitution (set of principles)
2. Generate responses
3. Ask AI to critique responses against constitution
4. Ask AI to revise based on critique
5. Train on revised responses
6. Human feedback used more sparingly
\`\`\`

**Result:** Claude reasons about ethics rather than just following rules.
- Refuses harmful requests while explaining why
- Can discuss nuanced topics thoughtfully
- Less "sycophantic" — pushes back when you're wrong
- Designed to be honest even when honesty is uncomfortable

---

## 🧪 Use Case — Same Sensitive Question, Two Different Approaches

**User asks:** *"How do extremist groups recruit people online?"*

This is a genuinely dual-use question — a researcher, journalist, policy maker, or parent might legitimately need this. A bad actor might also ask it.

\`\`\`
title:🤖 GPT (RLHF) — Typical Response Pattern
"I'm sorry, I can't help with that topic as it could be used
to cause harm. Please contact relevant authorities if you
have concerns about extremist activity."
\`\`\`

The RLHF model learned from human labelers who flagged this topic as risky, so it fires a blanket refusal — regardless of who is asking or why.

\`\`\`
title:🟣 Claude (Constitutional AI) — Typical Response Pattern
"This is an important topic studied by researchers and
counter-terrorism experts. Extremist groups typically exploit:
- Social isolation and a need for belonging
- Grievance narratives (economic, political, cultural)
- Gradual desensitisation through private channels

Understanding these tactics is key to building early
intervention programs. If you're researching counter-radicalisation,
I'd recommend the work of [relevant academic sources]..."
\`\`\`

Claude reasons: *"Is this request harmful or educational?"* — then engages thoughtfully rather than pattern-matching to a refusal.

| | GPT / RLHF | Claude / Constitutional AI |
|---|---|---|
| **Training signal** | Human labelers rank responses | AI critiques against a constitution |
| **On sensitive topics** | Tends to refuse broadly | Reasons about intent and context |
| **Nuanced requests** | May over-refuse to be "safe" | Engages with explanation and caveats |
| **Pushback on wrong info** | Often agrees to avoid conflict (sycophancy) | Designed to disagree when user is wrong |
| **Ethics approach** | Rule-following (what humans approved) | Principle-reasoning (why something is right) |

> ⚠️ **Neither approach is perfect.** RLHF models can be over-cautious; Constitutional AI models can sometimes be over-confident in their reasoning. The difference is in *how* they fail — rules vs reasoning.

---

**Extended Thinking (Claude 3.7+):**
Before answering complex problems, Claude can spend tokens "thinking" — running internal chain-of-thought — before producing the final answer. This trades cost for accuracy on hard problems.

[Learn More About LLM Training approach](https://magazine.sebastianraschka.com/p/llm-training-rlhf-and-its-alternatives)
`
      }
    ]
  },
  {
    id: 8,
    emoji: "✍️",
    title: "Prompt Engineering — Do's & Don'ts",
    color: "#7c3aed",
    sections: [
      {
        title: "🤔 Why Good Prompts Matter",
        content: `## 💡 What is Prompt Engineering?

Prompt Engineering is the skill of **crafting your input to an LLM to get the best possible output**. The model's intelligence is fixed — but how much of that intelligence you unlock depends entirely on how you ask.

> 🎯 **Same model. Same question. Completely different results** — just by changing the wording.

Think of it like this:
- 🔦 A bad prompt is a dim torch — you get a vague, murky answer
- 💡 A good prompt is a floodlight — the model sees exactly what you need and delivers precisely

---

## 🚀 What Can a Good Prompt Actually Do?

| Benefit | What It Means In Practice |
|---|---|
| 🎯 **Precision** | Get exactly the format, tone, and depth you need |
| ⚡ **Speed** | Fewer back-and-forth follow-ups — right answer first time |
| 💰 **Cost savings** | Shorter, focused prompts use fewer tokens |
| 🔒 **Safety** | Clear constraints prevent hallucinations and off-topic replies |
| 🔁 **Reproducibility** | Well-structured prompts give consistent results every time |
| 🧠 **Unlocks reasoning** | Structured prompts activate the model's deeper thinking |

---

## 📊 The Real Cost of a Bad Prompt

\`\`\`
title:💸 Bad Prompt = Wasted Tokens + Wasted Time
Bad prompt:   "explain kubernetes"
Response:     2,000 tokens of generic overview you didn't need

Good prompt:  "Explain Kubernetes in 5 bullet points for a
               senior backend dev who knows Docker but has
               never used K8s. Focus on: pods, services,
               and deployments only."
Response:     300 tokens, exactly what was needed

💡 Savings: ~85% fewer tokens = ~85% lower API cost per call
\`\`\``
      },
      {
        title: "✅ Do's — What Makes a Great Prompt",
        content: `## ✅ The 6 Golden Rules of Good Prompts
        {PromptEngineeringPractices}
---

### 1️⃣ Be Specific — Give Context, Role & Goal

\`\`\`
title:❌ Vague vs ✅ Specific
❌ Bad:
"Write me some code"

✅ Good:
"You are a senior Node.js developer.
Write an Express middleware function that:
- Validates a JWT token from the Authorization header
- Returns 401 if missing or expired
- Attaches decoded user object to req.user
Use the jsonwebtoken package. Add inline comments."
\`\`\`

---

### 2️⃣ Assign a Role — Persona Unlocks Expertise

\`\`\`
title:🎭 Role Prompting — Activate Domain Knowledge
"You are an experienced DevOps engineer
 specialising in AWS and Kubernetes..."

"You are a senior UX designer reviewing
 this landing page for conversion issues..."

"You are a financial analyst explaining
 this balance sheet to a non-finance CEO..."

💡 The model shifts its vocabulary, depth, and assumptions
   based on the role you assign — like putting on blinkers.
\`\`\`

---

### 3️⃣ Specify the Output Format

\`\`\`
title:📋 Format Control — Get Exactly What You Need
"Return your answer as:
 1. A one-line summary
 2. A bullet list of 3-5 key points
 3. A code example in JavaScript
 4. One sentence on what to avoid"

💡 Without format instructions, the model decides the
   structure for you — and it may not match what you need.
\`\`\`

---

### 4️⃣ Show an Example — Few-Shot Prompting

\`\`\`
title:🧪 Few-Shot Prompting — Teach By Example
"Classify customer feedback as Positive / Negative / Neutral.

Examples:
Input:  'Delivery was super fast!'     → Positive
Input:  'Packaging was damaged'        → Negative
Input:  'Item arrived as described'    → Neutral

Now classify:
Input:  'Took 3 weeks but works fine'  → ?"

💡 One or two examples cut ambiguity dramatically.
   The model pattern-matches your intent, not just your words.
\`\`\`

---

### 5️⃣ Set Constraints — Tell It What NOT To Do

\`\`\`
title:🚧 Constraints — Guard Rails In the Prompt
"Summarise this article in under 100 words.
 - Do NOT include the author's name
 - Do NOT use bullet points
 - Do NOT mention statistics
 - Write in plain English, no jargon"

💡 Constraints prevent the model from filling gaps
   with assumptions you didn't want.
\`\`\`

---

### 6️⃣ Ask It To Think Step By Step — Chain of Thought

\`\`\`
title:🧠 Chain of Thought — Force Reasoning Before Answering
❌ Without CoT:
"What is 20% of 3,750?"  →  Model may guess

✅ With CoT:
"What is 20% of 3,750?
 Think step by step before giving the final answer."
 →  "20% = 20/100 = 0.2. 0.2 × 3,750 = 750. Answer: 750"

💡 For complex reasoning, debugging, or multi-step tasks —
   always ask the model to show its thinking first.
\`\`\``
      },
      {
        title: "❌ Don'ts — Common Prompt Mistakes",
        content: `## ❌ 7 Prompt Mistakes That Kill Response Quality
      
---

### 🚫 1. Being Too Vague

\`\`\`
title:🚫 Too Vague — The Model Has to Guess Everything
❌ "Make this better"
   (Better how? Shorter? Faster? More polite? Funnier?)

❌ "Write about AI"
   (What angle? What audience? What length? What format?)

✅ Always answer: Who is this for? What's the goal?
   What format? What constraints?
\`\`\`

---

### 🚫 2. Asking Multiple Unrelated Questions at Once

\`\`\`
title:🚫 Overloading — Split Into Separate Prompts
❌ "Explain transformers, write me a RAG pipeline,
    and also review my resume"

✅ One focused task per prompt.
   Complex tasks = chain of prompts, not one giant blob.
\`\`\`

---

### 🚫 3. No Examples for Formatting Tasks

\`\`\`
title:🚫 Missing Examples — Model Guesses Your Style
❌ "Write commit messages for these changes"
   (What style? Conventional commits? Emoji? One-liner?)

✅ "Write commit messages using Conventional Commits format.
    Example: feat(auth): add JWT refresh token support
    Now write one for: added dark mode toggle to settings page"
\`\`\`

---

### 🚫 4. Accepting the First Response Blindly

\`\`\`
title:🚫 No Iteration — First Draft Is Rarely the Best
❌ User gets response → copies it → ships it

✅ Better workflow:
   → Get first response
   → Ask: "Make this more concise"
   → Ask: "Add error handling for edge case X"
   → Ask: "Rewrite in a more formal tone"

💡 Treat the LLM like a junior dev —
   review, refine, and iterate.
\`\`\`

---

### 🚫 5. Trusting Facts Without Verification

\`\`\`
title:🚫 Hallucination Risk — Always Verify Critical Facts
❌ "What is the latest version of React?" → Trust blindly

⚠️  LLMs have a training cutoff — they don't know
    what happened last week.

✅ Use LLMs for reasoning, drafting, and structure.
   Use official docs / search for facts, versions, and URLs.
\`\`\`

---

### 🚫 6. Ignoring the System Prompt for Apps

\`\`\`
title:🚫 No System Prompt in Production Apps
❌ Just passing user message directly to the API
   → Model has no persona, no guardrails, no context

✅ Always define a system prompt in your app:
   - Who the assistant is
   - What it can and cannot do
   - Tone and format expectations
\`\`\`

---

### 🚫 7. Writing Prompts Like Search Queries

\`\`\`
title:🚫 Search-Style Prompts — Don't Work With LLMs
❌ "node js jwt auth best practice 2024" 
   (This is a Google search, not a prompt)

✅ "I'm building a Node.js REST API with Express.
    What are the current best practices for implementing
    JWT authentication? Include: token storage, refresh
    token strategy, and expiry handling. Use code examples."
\`\`\``
      },
      {
        title: "🏆 Prompt Templates — Copy & Use",
        content: `## 🏆 Ready-To-Use Prompt Templates for Senior Devs

---

\`\`\`
title:🐛 Debug Template — Paste When Stuck on a Bug
You are an expert [language/framework] developer.

I have the following bug:
[DESCRIBE THE BUG — what you expected vs what happened]

Here is the relevant code:
[PASTE CODE]

Here is the error message:
[PASTE ERROR]

Please:
1. Identify the root cause
2. Explain why it happens
3. Provide a fix with code
4. Suggest how to prevent it in future
\`\`\`

\`\`\`
title:📝 Code Review Template — Get Senior-Level Feedback
You are a senior software engineer doing a code review.

Review the following code for:
- Correctness and edge cases
- Performance issues
- Security vulnerabilities
- Readability and naming
- Any missing error handling

Code:
[PASTE CODE]

Format your response as:
✅ What's good
⚠️  What needs improvement (with line references)
🔧 Suggested fixes with code snippets
\`\`\`

\`\`\`
title:📚 Explain Like I'm 5 Template — Learn Anything Fast
Explain [CONCEPT] to me.

My background: [your background — e.g., "I'm a backend dev, strong in Java, new to ML"]
Goal: [what you want to understand — e.g., "I want to understand this well enough to build a RAG pipeline"]
Format: Use an analogy first, then the technical explanation, then a real-world example.
\`\`\`

\`\`\`
title:🏗️ Architecture Template — Design a System With AI
You are a senior solutions architect.

I need to design a system that:
[DESCRIBE REQUIREMENTS]

Constraints:
- [e.g., must use AWS]
- [e.g., expected load: 10K requests/min]
- [e.g., team size: 3 devs]

Please provide:
1. High-level architecture diagram (ASCII)
2. Technology choices with justification
3. Key trade-offs
4. What to build first (MVP vs full)
\`\`\`

---

## 🎯 One-Line Prompt Engineering Cheatsheet

| Technique | When To Use | Magic Words |
|---|---|---|
| 🎭 Role prompting | Domain expertise needed | "You are a senior..." |
| 🧪 Few-shot | Custom format or style | "Here are examples..." |
| 🧠 Chain of thought | Complex reasoning | "Think step by step..." |
| 📋 Format control | Structured output | "Return as a table / JSON / bullets..." |
| 🚧 Constraints | Prevent unwanted output | "Do NOT include..." |
| 🔁 Iteration | Refine a response | "Make this more concise / formal / technical..." |
| 🎯 Grounding | Reduce hallucination | "Base your answer only on the text below..." |`
      }
    ]
  },
  {
    id: 9,
    emoji: "🚀",
    title: "Practical AI for Senior Devs",
    color: "#b45309",
    sections: [
      {
        title: "AI Stack for Building Products",
        content: `**The Modern AI Engineering Stack:**

\`\`\`
title:Modern AI Engineering Stack
┌─────────────────────────────────┐
│         Your Application        │
├─────────────────────────────────┤
│    Orchestration Layer          │
│  (LangChain / LlamaIndex /      │
│   custom Python/JS)             │
├─────────────────────────────────┤
│    LLM APIs                     │
│  (Anthropic / OpenAI / Gemini)  │
├─────────────────────────────────┤
│    Data Layer                   │
│  Vector DB + Traditional DB     │
│  (Pinecone + Postgres)          │
├─────────────────────────────────┤
│    Infrastructure               │
│  (AWS/GCP/Azure + GPU compute)  │
└─────────────────────────────────┘
\`\`\`

**Key Libraries/Tools:**
- **LangChain / LlamaIndex**: Orchestrate LLM pipelines (chains, agents, RAG)
- **Hugging Face**: Open-source model hub, Transformers library. [More About Hugging Face](https://commoncrawl.org/mission)
- **Ollama**: Run LLMs locally (Llama 3, Mistral, etc.)
- **Vercel AI SDK**: Best-in-class streaming for Next.js apps
- **LiteLLM**: One API to call all LLM providers
- **Weights & Biases**: Experiment tracking for ML

---

## 🛠️ Simple Use Cases — What Each Tool Actually Does For You

\`\`\`
title:🦜 LangChain / LlamaIndex — Support Bot With Memory
User asks: "What is my order status?"
    ↓
LangChain fetches last 5 messages (memory)
    ↓
Queries your Orders DB via a Tool
    ↓
Sends [memory + DB result + question] to Claude
    ↓
Streams the answer back to the user

💡 Without LangChain: you write all this plumbing yourself.
\`\`\`

\`\`\`
title:🤗 Hugging Face — Sentiment Analysis Without an API Key
from transformers import pipeline : 

classifier = pipeline("sentiment-analysis")
result = classifier("The product quality is outstanding!")
# Output: [{ label: POSITIVE, score: 0.9998 }]

💡 Use case: Analyse 10,000 customer reviews for sentiment
   — no API cost, runs entirely on your own machine.
\`\`\`

[Read More about Hugging Face 🤗 Project](https://huggingface.co/blog/sentiment-analysis-python)

\`\`\`
title:🦙 Ollama — Chat With Llama 3 Completely Offline
$ ollama run llama3

> Explain JWT tokens in simple terms
  "A JWT is like a signed ID badge — the server
   issues it, and you carry it on every request..."

💡 Use case: Internal tools, air-gapped environments,
   or avoiding API costs during prototyping.
   Zero data ever leaves your machine.
\`\`\`

\`\`\`
title:⚡ Vercel AI SDK — Stream Claude in Next.js (10 lines)
// app/api/chat/route.js
import { streamText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"

export async function POST(req) {
  const { messages } = await req.json()
  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    messages,
  })
  return result.toDataStreamResponse()
}

💡 Use case: Typing-effect chat UI out of the box.
   Handles streaming, loading states, and errors for you.
\`\`\`

\`\`\`
title:🔀 LiteLLM — Switch Between Claude and GPT With One Line
import litellm

# Today: Claude
response = litellm.completion(model="claude-sonnet-4-6", messages=[...])

# Tomorrow: Switch to GPT-4o — change ONE word
response = litellm.completion(model="gpt-4o", messages=[...])

💡 Use case: A/B test models, fall back to GPT if Claude
   is rate-limited, or cut costs by routing cheap queries
   to a smaller model automatically.
\`\`\`

\`\`\`
title:📊 Weights & Biases — Find Which Prompt Version Performs Best
import wandb
wandb.init(project="chatbot-v2")

for prompt_version in ["v1", "v2", "v3"]:
    response = call_llm(prompt_version, test_questions)
    score = evaluate(response)
    wandb.log({ "prompt": prompt_version, "accuracy": score })

# W&B dashboard: v2 scores 12% better than v1 ✅

💡 Use case: Stop guessing which prompt is better —
   measure it like a proper engineering experiment.
\`\`\``
      },
      {
        title: "Prompt Engineering — The Senior Dev Toolkit",
        content: `**You already know software engineering — apply those principles:**

**1. System Prompts = Configuration**
\`\`\`
title:System Prompt — Example Configuration
You are a senior backend engineer specializing in Node.js.
Always provide production-ready code with error handling.
Format code with comments. Ask clarifying questions if requirements are ambiguous.
\`\`\`

**2. Few-shot Prompting = Providing Examples**
Show the model 2-3 input/output examples before your actual request.

**3. Chain-of-Thought = Ask for step-by-step reasoning**
"Think through this step by step before giving your final answer."

**4. Structured Output = Define your schema**
"Respond ONLY in JSON with this schema: {title: string, steps: string[], complexity: low|medium|high}"

**5. RAG = Dynamic context injection**
Inject relevant docs/code into the prompt at runtime.



**6. Agents = LLM + Tools + Loop**
\`\`\`
title:Agent Loop — LLM + Tools + Memory
while (task_not_complete):
    thought = llm.think(task, history)
    if thought.needs_tool:
        result = execute_tool(thought.tool, thought.args)
        history.append(result)
    else:
        return thought.final_answer
\`\`\``
      },
      {
        title: "Your 30-Day Learning Roadmap",
        content: `**Week 1: Foundations**
- [ ] Read "Attention Is All You Need" (original Transformer paper)
- [ ] Complete fast.ai Practical Deep Learning (free, code-first)
- [ ] Tokenize text using tiktoken, understand BPE
- [ ] Build a simple text classifier with scikit-learn

**Week 2: LLM APIs**
- [ ] Get API keys: Anthropic + OpenAI
- [ ] Build a simple chatbot with conversation history
- [ ] Implement streaming responses
- [ ] Experiment with temperature, top-p, system prompts

**Week 3: RAG System**
- [ ] Set up pgvector in Postgres or use Pinecone free tier
- [ ] Generate embeddings with OpenAI text-embedding-3-small
- [ ] Build a document Q&A system (RAG pipeline)
- [ ] Add citation/source attribution to answers

**Week 4: Agents & Production**
- [ ] Build an agent with tool use (web search + code execution)
- [ ] Add evaluation/testing for LLM outputs
- [ ] Deploy a FastAPI + LLM app with proper streaming
- [ ] Monitor costs and set budget alerts

**Resources:**
- [Andrej Karpathy's YouTube - build GPT from scratch](https://youtu.be/kCc8FmEb1nY?si=fD3uz8NV7_qi_yWQ)
- [Anthropic Docs](https://docs.anthropic.com)
- [deeplearning.ai Short Courses (free)](https://www.deeplearning.ai/courses)
- [Simon Willison's Blog — practical LLM engineering](https://simonwillison.net)`
      }
    ]
  }
];

export default modules;