import dedent from "dedent"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  content: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-fast-lean-teams",
    title: "Shipping Fast in Lean Startup Teams",
    description:
      "Field-tested tactics for delivering product and service features at startup speed—without melting down your team or your codebase.",
    date: "2024-04-11",
    author: "Parth Shah",
    tags: ["Startups", "Lean", "Engineering Culture"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
    readTime: "7 min read",
    category: "Culture",
    content: dedent(`
## Shipping Fast in Lean Startup Teams

In a five-person startup you **can't hide behind process**. Every line of code ships to users, and every bug report pings the same Slack channel you celebrate wins in. After working on both product features (AI-powered to-do apps, PWA dashboards) and behind-the-scenes services (payment gateways, encrypted storage), I've distilled a handful of principles that let lean teams move quickly *and* stay sane.

---

## Why Speed Matters

1. **Market fog**  
   Until users pay—or churn—you're guessing. Fast releases shorten that feedback loop.  
2. **Resource reality**  
   Startups run on burn-rate; every sprint of unvalidated work is cash on fire.  
3. **Team motivation**  
   Nothing boosts morale like seeing your code in prod before the caffeine wears off.

---

## Core Principles

### 1. Build • Measure • Learn on a *one-week* cadence  

Forget quarter-long roadmaps. Break features into *vertical slices* you can demo Friday afternoon, collect metrics over the weekend, and refine Monday.

### 2. Favour **"good defaults + feature flags"** over branching sprawl  

Trunk-based development means fewer merge hells. Toggle risky code paths at runtime so unfinished work stays dark but deployable.

### 3. **Own the whole lifecycle**  

In tiny teams, Dev, Sec, and Ops are just hats you swap. The same engineer who models a new Mongo schema also wires the alert in Grafana. Context switching hurts, but ownership kills the "someone else's problem" trap.

### 4. **Embrace intentional technical debt**  

Speed *requires* shortcuts—just record *why* you took them and set a sunset date. Holding debt reviews every second sprint keeps the snowball small.

---

## Toolkit That Keeps Us Honest

| Tool / Practice | Why it works in lean teams |
|-----------------|---------------------------|
| **CI/CD (GitHub Actions → Vercel / ECS)** | Green build = automatic deploy; red build = no deploy, no debates. |
| **Feature flags (GrowthBook / LaunchDarkly / DIY in DB)** | Ship dormant code, test in prod with 1 % traffic, roll back by toggling. |
| **Static typing + linting (TypeScript, ESLint)** | Fewer bugs slip into Friday-night deploys. |
| **Observability (OpenTelemetry + Grafana)** | When an error budget blows, you *see* which slice caused it. |
| **Infra-as-Code (Pulumi / Terraform)** | New environment in minutes—critical when a client demo appears tomorrow. |

---

## Balancing Product vs. Service Work

Startups often swing between **"new shiny feature"** mode and **"keep the servers alive"** mode. I've found a 70 / 30 split effective:

* **70 % Product:** user-visible value, revenue enablers.  
* **30 % Service:** reliability, performance, security chores.

> A spike in error rate? Swap the ratio for a sprint, then rebalance.

---

## Metrics That Matter (and Fit on One Dashboard)

| Metric | Target | Why |
|--------|--------|-----|
| **Deployment frequency** | ≥ daily | Confidence beats paralysis. |
| **Lead time to prod** | < 24 h | Idea → user feedback within a day. |
| **Change fail rate** | < 10 % | Speed is pointless if every ship sinks. |
| **MTTR** | < 30 min | Pager fatigue kills velocity; fast recovery restores it. |

---

## Common Pitfalls

1. **Mistaking velocity for value** – Shipping lots of code ≠ shipping the right code.  
2. **Hero culture** – A single guru can unblock today and block tomorrow's scalability.  
3. **Invisible tech debt** – If it's not tracked, it never gets paid.  
4. **No buffer for learning** – Lean ≠ rushed. Schedule hours for docs, small refactors, and up-skilling, or debt accrues as people, not just code.

---

## Takeaways

* **Speed is a habit, not a hack.** Small, continuous wins beat heroic launches.  
* **Process should fit team size.** Automate what scales badly (tests, deploys), keep human rituals lightweight (15 min stand-up, 30 min retro).  
* **Measure outcomes, not effort.** A/B test, watch metrics, iterate.

Lean teams thrive when **learning loops outpace market shifts**. If that means one more Friday deploy before pizza, so be it.

---

> **TL;DR**: Ship in vertical slices, guard quality with automation, measure impact fast, and treat debt like a sprint-planning citizen. That's how tiny crews punch above their weight—and have fun doing it.
`)
  },
  {
    slug: "ai-boosts-dev-productivity",
    title: "Will AI Take Our Jobs? How I Use It to Code Faster Instead",
    description:
      "A practical guide to turning AI from a career threat into your personal pair-programmer, test writer, and knowledge concierge.",
    date: "2025-02-18",
    author: "Parth Shah",
    tags: ["AI", "Productivity", "Career"],
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1200&h=800&fit=crop",
    readTime: "8 min read",
    category: "AI & Productivity",
    content: dedent(`
## Will AI Take Our Jobs? How I Use It to Code Faster Instead

Every tech cycle births a prophecy about developers becoming obsolete. Yet here we are—still shipping code—while tools like GPT-4o, Copilot, and Cody sit next to our IDEs. The question isn’t *“Will AI replace me?”* It’s *“How do I replace the parts of my job I **don’t** love with AI so I can focus on the parts I do?”*

---

## Where AI Actually Helps

### 1. Scaffolding & Boilerplate  
Tired of wiring CRUD controllers or Redux slices? A well-crafted prompt spits out 80 % of the skeleton, letting you refine architecture instead of typing setters.

### 2. Test Generation  
Point AI at a function and ask for edge-case tests. I still review every assertion, but coverage jumps from 50 % to 85 % in minutes.

### 3. Code Review Buddy  
Before pinging teammates, I paste diffs into ChatGPT for a first-pass lint. It flags n-log n pitfalls or unclear naming, so human reviewers spend energy on design, not typos.

### 4. Instant Context Recall  
Remind me how "ArrayBuffer" works in JS?” beats tab-surfing MDN. Less context-switching → deeper focus blocks.

---

## Guardrails: Staying in Control

| Risk | Guardrail |
|------|-----------|
| Leaking private code | Use encrypted local models (LM Studio) or mask secrets in prompts. |
| Shallow answers | Pair AI output with docs + unit tests; never merge unchecked code. |
| Prompt fatigue | Save prompt snippets (VS Code *“CodeGPT”* favorites) and iterate. |
| Over-trusting style fixes | Run ESLint & Prettier after AI edits to maintain team conventions. |

---

## Results From My Own Workflow

| Metric (last 3 months) | Before AI | After AI | Delta |
|------------------------|-----------|----------|-------|
| Avg. PR lead time      | 18 h      | 11 h     | ↓ 39 % |
| Lines of test code / LOC | 0.35   | 0.55     | ↑ 57 % |
| Bug reopen rate        | 9 %       | 6 %      | ↓ 33 % |

---

## Tools & Prompts I Rely On

* **GitHub Copilot** – inline suggestions; prompt: \`// add streaming pagination logic\`.  
* **ChatGPT (GPT-4o)** – design debates; prompt: *“Compare WebSocket vs. SSE for 2 000 CCU in Node.”*  
* **Cody (Sourcegraph)** – repo-aware Q&A; prompt: *“Where is the RBAC middleware configured?”*  
* **local-GPT via LM Studio** – air-gapped reviews for closed-source work.

---

## Future-Proofing Your Career

1. **Master prompting** – it’s the new regex: cryptic but career-saving.  
2. **Double down on problem framing** – AI excels at *answering*, not *asking the right question*.  
3. **Share AI wins internally** – teaching teammates elevates you beyond a “keyboard owner” to a force-multiplier.

---

## Takeaways

* AI isn’t a pink slip; it’s a productivity exoskeleton.  
* Automate the grind (boilerplate, tests), guard the craft (architecture, empathy).  
* Track metrics—if throughput or quality doesn’t improve, tweak prompts or pull back.  
* The best defence against job disruption is being the person who *drives* the new toolset, not the one who avoids it.

> **TL;DR:** Let AI write the parts you dread, audit everything, and reinvest saved hours into design, user empathy, and the hairy problems that still need a human brain.
`)
  },
  {
    slug: "offline-first-pwa-service-workers",
    title: "Offline-First PWAs: Field Notes from the Middle of Nowhere",
    description:
      "Lessons learned turning a farm-management dashboard into a zero-bar survivalist—thanks to Service Workers, smart caching, and background sync.",
    date: "2024-06-02",
    author: "Parth Shah",
    tags: ["PWA", "Service Workers", "Performance"],
    image:'/images/blog/service-worker.png',
    readTime: "9 min read",
    category: "Web Performance",
    content: dedent(`
  ### The Day the Bars Disappeared
  
  Nothing humbles a web dev like opening Chrome DevTools in the middle of a soybean field and watching the *No Internet* dino pop up. Our farm-management PWA looked slick on office Wi-Fi, but growers needed it thirty kilometres past the last cell tower. Here's how we moved from "works on my laptop" to **reliably offline-first**.
  
  ---
  
  ## Why "Offline-First" Beats "Offline-Capable"
  
  * **Trust** – Users treat cached apps like native; you get one chance to prove their data is safe.  
  * **Speed** – Local reads are always faster than network hops, signal or not.  
  * **Battery** – Fewer retries mean less radio time and longer device life in the field.
  
  ---
  
  ## 1 | Register the Service Worker (the Right Way)
  
  \`\`\`js
  // public/sw.js — bare minimum
  self.addEventListener("install", (evt) =>
    evt.waitUntil(
      caches.open("static-v1").then((c) => c.addAll(["/", "/index.html", "/styles.css"]))
    )
  );
  
  self.addEventListener("fetch", (evt) => {
    evt.respondWith(
      caches.match(evt.request).then(
        (hit) => hit || fetch(evt.request)
      )
    );
  });
  \`\`\`
  
  **Pro tip:** register the worker *after* \`window.load\` so first-paint isn't blocked.
  
  ---
  
  ## 2 | Choose a Caching Recipe
  
  | Scenario | Strategy | My pick for the farm app |
  |----------|----------|--------------------------|
  | *Static assets* | **Cache-first** | Yes |
  | *API GETs* | **Stale-while-revalidate** | Yes (inventory lists) |
  | *Mutations* | **Network-first + queue fallback** | Yes (field-visit logs) |
  
  > The golden rule: **never** risk staleness for anything that affects money or safety.
  
  ---
  
  ## 3 | Syncing Mutations After You’re Back Online
  
  1. Write actions to **IndexedDB** with a UUID and timestamp.  
  2. Show them in the UI immediately (optimistic).  
  3. When \`navigator.onLine\` flips or a Background Sync event fires, replay the queue.  
  4. Make endpoints **idempotent** so duplicate retries can’t corrupt state.
  
  ---
  
  ## 4 | Debugging the Invisible
  
  * DevTools → Application → Service Workers → "Offline" checkbox.  
  * \`navigator.onLine\` lies; pull Wi-Fi to test real radio drop.  
  * Use Chrome \`––disable-cache\` flag to confirm fresh installs.
  
  ---
  
  ## 5 | Field-Test Checklist
  
  - [x] App loads in airplane mode after first visit  
  - [x] Cached version warns if backend schema changed ("x-app-version" header)  
  - [x] Mutation queue survives page reload & device reboot  
  - [x] Light-house PWA score ≥ 90 on 3G throttle  
  - [x] Clear “sync pending” badge when queue drains successfully
  
  ---
  
  ## What Changed for Our Growers?
  
  | Metric | Before | After |
  |--------|--------|-------|
  | Failed form submissions | 42 % | 2 % |
  | Avg. time to sync field visits | N/A (manual) | 15 s |
  | Support tickets about “data lost” | Weekly | Zero in 3 months |
  
  ---
  
  ### Parting Seeds
  
  Service Workers aren’t magic—but with a disciplined caching plan, background sync, and a good *debug story*, they turn flaky networks into a non-issue. If your users venture off the grid (literally or figuratively), building **offline-first** isn’t a luxury; it’s table stakes.
  
  > Next stop: integrating push notifications so the app can whisper, “Sync complete!” while farmers are already on the next tractor row.
  `)
  },
  {
    slug: "saas-payment-gateway-multi-tenant",
    title: "Plugging a Payment Gateway into a Multi-Tenant SaaS (Without Losing Sleep)",
    description:
      "Architecture choices, security traps, and a decision matrix for picking the right gateway when your platform must serve many merchants—at home and abroad.",
    date: "2024-08-15",
    author: "Parth Shah",
    tags: ["SaaS", "Payments", "Architecture"],
    image: "/images/blog/payment-gateway.png",
    readTime: "10 min read",
    category: "Architecture",
    content: dedent(`
  ## Why Payments Get Hairy in Multi-Tenant SaaS

  In a single-tenant app, you wire Stripe keys, ship, and call it a day. In a **multi-tenant** world—think platforms like Shopify or Ghost—each merchant needs isolated ledgers, local compliance, and custom payout schedules. One mis-routed webhook can credit the wrong store and trigger a chargeback circus.

  I recently integrated **CC Avenue** for a SaaS serving dozens of merchants. This post captures the practical lessons—and how to decide if CC Avenue, Stripe, Razorpay, Adyen, or Braintree fits *your* roadmap.

  ---

  ## 1 | Model Choices: Aggregator vs. Platform

  | Model | How it works | Pros | Cons |
  |-------|--------------|------|------|
  | **Aggregator** | Your SaaS owns the master merchant account; end-users pay you, you settle to sub-wallets. | Simplest onboarding; one KYC. | You hold liability, PCI scope widens; payouts become ops burden. |
  | **Platform/Connect** | Each tenant has its own gateway account (or sub-merchant). Gateway handles KYC, payouts. | Liability & chargebacks isolated; easier compliance. | More onboarding friction; some gateways lack good Connect APIs. |

  > **Rule of thumb:** If tenants must handle refunds, taxes, or chargebacks themselves, go **platform** model. Otherwise start aggregator and migrate later.

  ---

  ## 2 | Gateway Showdown (2025 Edition)

  | Gateway | Coverage | Currencies | Sub-Merchant API? | Best for… |
  |---------|----------|------------|-------------------|-----------|
  | **Stripe Connect** | 46 countries | 135+ | Yes (accounts, payouts) | Global SaaS, subscription heavy |
  | **CC Avenue** | India, GCC | INR + 27 | Partial (split settlement) | Domestic India focus, UPI, net-banking |
  | **Razorpay Route** | India | INR | Yes | India first, instant payouts |
  | **Adyen for Platforms** | 70+ | 150+ | Yes | Enterprise global, in-app POS |
  | **Braintree Marketplace** | US, CA, EU | 130+ | Limited | Simple PayPal/Venmo tie-ins |

  Key questions to rank:

  1. **Market expansion:** Where will you onboard merchants next 18 mo?  
  2. **Payout cadence & fees:** Weekly vs. T+2, percentage + fixed fees.  
  3. **Payment rails:** Cards only, or UPI/ACH/mobile wallets?  
  4. **Subscription & metered billing:** Native or roll-your-own?  
  5. **Compliance:** PCI-DSS SAQ A vs. SAQ D, PSD2 SCA, RBI e-mandate.

  ---

  ## 3 | High-Level Architecture

  ![Payment Gateway Architecture](/images/blog/payment.svg)

  * **TenantPaymentCfg** table stores gateway keys, payout prefs.  
  * Webhooks land at **/gateway/\${tenantId}/callback** → queue for idempotent processing.  
  * Retry with exponential back-off; poison queue alerts PagerDuty.

  ---

  ## 4 | Security & Compliance Checkpoints

  | Area | Must-do |
  |------|---------|
  | **PCI scope** | Use gateway-hosted fields or drop-in UI → SAQ-A. |
  | **Idempotency** | Pass \`Idempotency-Key\` (UUID v4) on create-charge, log in DB. |
  | **Webhook auth** | HMAC SHA-256 with shared secret; verify timestamp ±5 min. |
  | **Tenant isolation** | Row-level RLS or \`tenant_id\` PK/FK in every payment table. |
  | **Payout fraud** | Dual-control on payout preference changes; notify merchant email. |

  ---

  ## 5 | Rollout Plan

  1. **Sandbox first** – spin test tenants, simulate success/fail webhooks.  
  2. **Feature flag by tenant** – new merchants go live gateway-X; existing stay gateway-Y.  
  3. **Audit logs** – every webhook → hash → append-only store (S3 + Object Lock).  
  4. **Progressive batching** – start with 5 % production traffic, monitor refund flow, then ramp.

  ---

  ## 6 | Post-Integration Metrics

  | Metric (90 days) | Before (manual invoices) | After gateway |
  |------------------|--------------------------|---------------|
  | Avg. payment settlement | 4.7 days | 1.2 days |
  | Support tickets (payment) | 31 / month | 6 / month |
  | Churn tied to payment failures | 4.5 % | 2.1 % |

  ---

  ### Takeaways

  * **Pick your gateway like you pick a co-founder**—coverage, roadmap, and support culture matter as much as API docs.  
  * In multi-tenant SaaS, **isolation > convenience**. Platform models scale better than aggregators once chargebacks appear.  
  * Secure webhooks, use idempotency keys, and store every event—payments are write-once, audit-forever.  
  * Roll out behind flags, watch metrics, and remember: the best payment flow is the one users forget ever happened.

  > Next on my radar: adding real-time FX quotes so merchants can price in buyers' local currency without shrinking their margins.
  `)
  },
  {
    slug: "secure-file-storage-java-aes-rsa",
    title: "Designing Secure File Storage with AES-256 & RSA in Spring Boot",
    description:
      "Step-by-step blueprint of the dual-layer encryption, key-management, and API patterns that power EnLock’s distributed locker.",
    date: "2025-02-01",
    author: "Parth Shah",
    tags: ["Security", "Java", "Spring Boot"],
    image: "/images/blog/secure-storage.png",
    readTime: "9 min read",
    category: "Security",
    content: dedent(`
  # Why Two Keys Are Better Than One

  Encrypting user files is easy—until you need **zero-trust sharing**, seamless node fail-over, and 99.9 % uptime. EnLock solves this with a *dual-layer* pipeline:

  * **AES-256 (GCM)** — fast, symmetric encryption for the file bytes  
  * **RSA-2048** — wraps the AES key so only the owner (or a delegated reader) can decrypt it

  > TL;DR: Data moves fast under AES, keys stay safe under RSA.

  ---

  ## 1 | System at 10,000 ft

  ![System Architecture at 10,000 ft](/images/blog/system-architecture.svg)

  *The AES session key never leaves Crypto Service unencrypted; RSA-wrapped blobs live in **KeyVault** under versioned mounts.*

  ---

  ## 2 | Spring Boot Crypto Service — Core Snippet

  \`\`\`java
  // CryptoService.java
  public EncryptedBlob encrypt(MultipartFile file, UUID ownerId) throws Exception {
    byte[] aesKey = SecureRandom.getInstanceStrong().generateSeed(32);      // 256-bit
    Cipher aes = Cipher.getInstance("AES/GCM/NoPadding");
    aes.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(aesKey, "AES"));

    byte[] cipherBytes = aes.doFinal(file.getBytes());
    byte[] iv          = aes.getIV();

    byte[] wrappedKey  = rsaWrap(aesKey, ownerPublicKey(ownerId));

    return new EncryptedBlob(cipherBytes, wrappedKey, iv);
  }
  \`\`\`

  **Performance tip:** Use a per-thread \`CipherPool\` to avoid JVM re-init overhead under high upload concurrency.

  ---

  ## 3 | Node Failure ≠ Data Loss

  Distributed nodes register with **Apache ZooKeeper**:

  1. **Ephemeral znode** per worker \`/workers/{nodeId}\`  
  2. Upload API picks the *least-loaded* node via watcher callbacks  
  3. On node death, ZooKeeper triggers a *replication rebalance* job

  The encrypted file is sharded \`n=3\` across peers, each storing only AES-ciphertext—**never the key**.

  ---

  ## 4 | Threat Model & Counter-Measures

  | Threat | Mitigation |
  |--------|------------|
  | **S3 bucket leak** | Data still AES-GCM; attacker lacks key. |
  | **KeyVault compromise** | Keys RSA-wrapped per user; attacker also needs user’s private key. |
  | **Replay or tamper** | GCM tag validation → \`AEADBadTagException\` aborts read. |
  | **Privilege escalation** | JWT carries \`scope=files:{UUID}\`; Spring Security enforces row-level ACL. |
  | **Brute-force** | PBKDF2-HMAC-SHA512 on user passphrases; 310 000 iterations (OWASP 2025). |

  ---

  ## 5 | Performance vs. Security Trade-offs

  | Config | Upload 10 MB | Download 10 MB | Notes |
  |--------|--------------|----------------|-------|
  | AES-GCM 256 bit | 140 ms | 120 ms | HW AES-NI on Xeon |
  | AES-CBC + HMAC | 210 ms | 185 ms | Two-pass I/O |
  | RSA only | ❌ | ❌ | Too slow, block-size limited |

  **Bottom line:** AES-GCM with AES-NI gives near-disk throughput while preserving integrity via GCM tag.

  ---

  ## 6 | Rotating Keys Without Downtime

  1. Mark *key-rotation* flag per user  
  2. Background job decrypts with **old RSA key**, re-wraps AES key with **new RSA key**  
  3. Update \`key_version\` column; readers fetch latest automatically  
  4. Once 100 %, revoke old RSA key in KeyVault (soft-delete -> purge after TTL)

  This hot rotation completes ~1 TB/hour on a 4-core node with negligible user impact (< 5 ms extra latency).

  ---

  ## 7 | Compliance Checklist

  | Standard | Control Implemented |
  |----------|--------------------|
  | **ISO 27001 A.10.1** | AES-256 encryption at rest & in transit |
  | **GDPR Art. 32** | Pseudonymisation via per-file UUID, strong crypto |
  | **PCI-DSS v4.0** | AES-256 for cardholder scans, RSA key storage in HSM |
  | **SOC 2 CC6** | Logical access via RBAC, audit logs immutable (S3 Object Lock) |

  ---

  ## 8 | Observability

  * **Prometheus** – custom \`crypto_op_latency_ms\`, \`keyvault_calls_total\`  
  * **Grafana** – heat-map shows if encrypt | decrypt outliers exceed SLA 150 ms  
  * **AlertManager** – triggers if GCM tag failures > 0.01 % of ops

  ---

  ## Field Results

  | Metric | Pre-crypto prototype | EnLock prod |
  |--------|---------------------|-------------|
  | SLA breaches (>150 ms) | 2.8 % | 0.4 % |
  | Pen-test critical findings | 5 | 0 |
  | Data-recovery drills | N/A | 100 % success across 3 node wipeouts |

  ---

  ### Key Takeaways

  * **Layered crypto beats single-key setups**—compromise one layer, data stays safe.  
  * **ZooKeeper + sharding** keeps uploads available even when a node disappears.  
  * **Hot key rotation** is possible if you separate data & key stores and version aggressively.  
  * Invest in **observability** early; crypto bugs hide in latency tails.

  > Security isn’t a feature toggle—it’s architecture. Build it in from day one, and your future self (and auditors) will thank you.
  `)
  },
  {
    slug: "zero-downtime-deploys-blue-green",
    title: "Zero-Downtime Deploys: A Blue–Green Playbook for Lean Teams",
    description:
      "From traffic shifting on AWS + Kubernetes to schema-safe migrations, here’s the end-to-end recipe I use to release multiple times a day without a single user noticing.",
    date: "2024-08-05",
    author: "Parth Shah",
    tags: ["CI/CD", "DevOps", "Kubernetes"],
    image: "/images/blog/blue-green-deployment.png",
    readTime: "10 min read",
    category: "DevOps",
    content: dedent(`
  ## Why Zero-Downtime Still Feels Like Black Magic

  Nothing kills demo day like a 502. Yet many startups still “ship” by SSH’ing into a lone EC2 box. Blue–green deployments remove that single point of failure: run **two** identical environments, flip traffic when green is healthy, and your customers never see a blip.

  > TL;DR: **Blue = current prod**, **Green = new version**. Cut over when the health checks sing.

  ---

  ## Architecture at a Glance

  ![Blue-Green Deployment Architecture](/images/blog/architecture.svg)

  *Works the same on Cloud Run, Fly.io, or bare-metal K8s—just replace ALB with your load balancer.*

  ---

  ## 1 | GitHub Actions Workflow

  \`\`\`yaml
  name: blue-green-deploy
  on:
    push:
      branches: [main]

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: docker/setup-qemu-action@v3
        - uses: docker/build-push-action@v5
          with:
            context: .
            push: true
            tags: \${{ env.ECR_REGISTRY }}/todo:\${{ github.sha }}

    deploy:
      needs: build
      runs-on: ubuntu-latest
      steps:
        - uses: aws-actions/configure-aws-credentials@v4
        - name: "Helm upgrade to green"
          run: |
            helm upgrade todo chart/ \\
              --set image.tag=\${{ github.sha }} \\
              --set color=green
        - name: "Smoke test green"
          run: ./scripts/smoke.sh
        - name: "Shift traffic"
          run: |
            kubectl patch ingress todo \\
              -p '{"metadata":{"annotations":{"alb.ingress.kubernetes.io/target-group-attributes":"blue:0,green:100"}}}'
  \`\`\`

  **Key bits**

  * \`color\` value triggers Helm’s \`Deployment.todo-green\`.  
  * Smoke test hits */health* on the green ingress hostname.  
  * Traffic shift happens only if smoke passes + Prometheus SLOs are green.

  ---

  ## 2 | Database Schema Without Downtime

  | Step | Pattern | Reason |
  |------|---------|--------|
  | 1 | **Add new column nullable** | Old code ignores it. |
  | 2 | Deploy green reading + writing both columns | Green stays backward-compatible. |
  | 3 | Migrate data in background | Cran-job → 10 k rows/s. |
  | 4 | Drop column from blue & flip | All traffic on green; old column cold. |
  | 5 | Delete legacy column | After 1–2 weeks, post-logs confirm zero reads. |

  Pro tip: wrap each migration in a [transactionally idempotent] step; failures roll back gracefully.

  ---

  ## 3 | Feature Flags Keep You Honest

  Blue–green solves infra rollbacks; feature flags solve **product** rollbacks.

  * Use **GrowthBook** or **LaunchDarkly**; DIY with a \`flags\` table if broke.  
  * Default flag OFF in both blue & green → ramp once green is live.  
  * Combine with \`userId % 100 < 1\` to expose new features to 1 % traffic first.

  ---

  ## 4 | Observability: The Three Lights

  | Layer | Tool | SLO |
  |-------|------|-----|
  | **Infra** | Prometheus ➝ Grafana | Pod restart rate < 2 / h |
  | **App** | OpenTelemetry traces | p95 latency < 250 ms |
  | **User** | Sentry + Rum | JS error rate < 0.5 % |

  Automation: GitHub Action checks **Alertmanager silence** before traffic shift; any open \`severity=page\` alert aborts deploy.

  ---

  ## 5 | Cost Check (Side Projects Scale)

  | Resource | Blue | Green | Total / month |
  |----------|------|-------|---------------|
  | EKS t3.small (2 nodes each) | \$24 | \$24 | \$48 |
  | ALB | — | — | \$18 |
  | ECR storage | — | — | \$4 |
  | **Grand total** | | | **\$70** |

  Tight budget? Use **Kubernetes horizontalPodAutoscaler** to scale BLUE to zero replicas ~5 min after cutover.

  ---

  ## 6 | When Things Go Sideways

  1. **Smoke test fails** → Action cancels, green pods scale → 0, incident Slack ping.  
  2. **Post-cutover error rate spikes** → \`kubectl patch ingress … blue:100,green:0\` (one-liner rollback).  
  3. **DB migration stuck** → Pause traffic shift; blue keeps running.

  Mean time to recovery in prod: **< 3 min** over nine incidents last year.

  ---

  ## Highlight Reel

  | KPI | Before (classic in-place) | After blue-green |
  |-----|--------------------------|------------------|
  | Deploys / week | 2 | 14 |
  | User-visible errors during deploy | 7–12 504s | 0 |
  | Avg. rollback time | 38 min | 1.2 min |

  ---

  ### Final Checklist

  * [ ] Health probes on */ready* & */live* endpoints  
  * [ ] Idempotent schema migrations with feature flags  
  * [ ] Automated rollback cut-over script  
  * [ ] Alert block gate in the CI workflow  
  * [ ] Post-deploy smoke + synthetic user tests

  > **Zero downtime is less about magic and more about boring, repeatable scripts.** Bake them once, and shipping becomes as routine as "git push".
  `)
  },
  {
    slug: "observability-for-lean-teams",
    title: "Logs, Metrics, Traces—Oh My! Observability That Matters!!",
    description:
      "You don’t need an SRE army to see inside your stack. Here’s a pragmatic roadmap—from zero to ‘why is this query slow?’—that fits startups like yours.",
    date: "2024-08-19",
    author: "Parth Shah",
    tags: ["Observability", "Monitoring", "Startups"],
    image: "/images/blog/observability.png",
    readTime: "9 min read",
    category: "DevOps",
    content: dedent(`
  ## Why “It Works on Prod” Isn’t Funny Anymore

  When your entire company fits on a Zoom grid, the pager often routes straight to the developer who wrote the code. Good observability means you fix bugs at 2 AM *without* a crystal ball—or better yet, you spot them before users do.

  ---

  ## Three Pillars, One Budget

  | Pillar   | Tooling (lean stack)         | When to invest first |
  |----------|-----------------------------|----------------------|
  | **Metrics** | Prometheus → Grafana        | Immediate: uptime & latency |
  | **Logs**    | Loki (Grafana Cloud)        | Sprint 2: debug traces |
  | **Traces**  | OpenTelemetry → Tempo       | After you hit micro-service count ≥ 3 |

  > If money is tight, start with **Prometheus + Grafana Cloud free tier**—you get 10 k series and alerts out of the box.

  ---

  ## 1 | Instrument the *Golden* Signals

  “Everything” is unmaintainable; track **RED** + **USE**:

  * **R**ate – requests per second  
  * **E**rrors – 4xx / 5xx per second  
  * **D**uration – latency percentiles  
  * **U**tilization – CPU, memory  
  * **S**aturation – queue length  
  * **E**rror – hardware or disk faults

  Below is a minimal Spring Boot actuator scrape:

  \`\`\`yaml
  management:
    endpoints:
      web:
        exposure:
          include: health,metrics,prometheus
  server:
    servlet:
      context-path: /api
  \`\`\`

  Prometheus job:

  \`\`\`yaml
  - job_name: "todo-api"
    metrics_path: "/api/actuator/prometheus"
    static_configs:
      - targets: ["todo-blue:8080","todo-green:8080"]
  \`\`\`

  ---

  ## 2 | Alert *Only* on What Hurts Users

  Bad:

  High CPU usage on node-12


  Good:


  SLO violation: p95 latency > 250 ms for route /tasks


  GrafanaAlert YAML:

  \`\`\`yaml
  expr: histogram_quantile(0.95, sum(rate(http_server_requests_seconds_bucket[5m])) by (le, route)) > 0.25
  for: 3m
  labels:
    severity: page
  annotations:
    runbook: https://runbooks.todo.com/p95-latency
  \`\`\`

  ---

  ## 3 | Add Traces When Logs Aren’t Enough

  OpenTelemetry Java agent—no code change:

  \`\`\`bash
  java -javaagent:opentelemetry-javaagent.jar \
      -Dotel.resource.attributes=service.name=todo-api \
      -Dotel.exporter.otlp.endpoint=http://tempo:4317 \
      -jar todo-api.jar
  \`\`\`

  Now you can click a slow request in Grafana and jump straight into its trace waterfall. The first time you catch an N+1 SQL query in 15 s, you’ll wonder how you lived without it.

  ---

  ## 4 | Dashboards That Fit on One Screen

  | Panel | Why it earns real estate |
  |-------|--------------------------|
  | p95 Latency (per route) | Performance health |
  | Error Rate (4xx, 5xx)   | Immediate alarms |
  | DB Connection Pool Usage | Early deadlock signal |
  | Queue Lag (Kafka/SQS)   | Back-pressure insights |
  | Release Marker Annotations | Correlate deploys with spikes |

  Rule of thumb: **< 6 graphs**; if you need to squint, you need another dashboard.

  ---

  ## 5 | Cost Hacks

  * **Sample traces** at 10 % except when \`X-Debug: true\`.  
  * **Loki log labels** sparingly: \`{level="error", app="todo-api"}\`. Unbounded label cardinality → $$$.  
  * Ship **metrics to Cloud** but **store logs locally** on a 7-day retention EBS; archive to S3 Glacier after.

  ---

  ## 6 | Post-Incident Review Template

  1. **Timeline** – UTC timestamps, who did what.  
  2. **User impact** – errors served, revenue lost.  
  3. **Root cause** – single sentence, no blame.  
  4. **Detection gap** – why alerts fired late / never.  
  5. **Next steps** – patch + monitoring upgrade PR numbers.

  Keep it in your repo under \`/postmortems/YYYY-MM-DD-incident.md\` so newcomers learn fast.

  ---

  ### Key Takeaways

  * Start with **metrics + alerts** today; add logs and traces as your service map grows.  
  * Alert only on **user-facing SLIs**; silence the noisy CPU charts.  
  * Keep dashboards minimal—engineers remember pictures, not 42 graphs.  
  * Observability is *insurance* for lean teams: small investment now, big payout when prod burns.

  > Your future self at 2 AM will thank you for every histogram bucket you add today.
  `)
  }
];
