import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: "Vinita Patricia",
  title: "3rd-Year Computer Science Student",
  subTitle: "Aspiring Software Engineer focused on Distributed Systems, Cloud Architecture & Scalable Web Applications",
  status: "Seeking Summer 2027 SWE Internships",
  email: "vinitapatricia@gmail.com",
  github: "https://github.com/vinitapatricia",
  linkedin: "https://linkedin.com/in/vinitapatricia",
  location: "San Francisco Bay Area, CA / Hybrid / Relocation",
  bio: "I'm a 3rd-year Computer Science undergraduate with a passion for building reliable, high-performance distributed backends and thoughtful user experiences. I've completed two software engineering internships where I designed microservices in Go, reduced API latency with distributed caching, and developed real-time telemetry dashboards. When I'm not writing code, I serve as a Teaching Assistant for Data Structures & Algorithms, mentor underrepresented freshmen in engineering, and build open-source tools.",
  
  education: {
    degree: "Bachelor of Science",
    major: "Computer Science",
    university: "University of California, Berkeley",
    expectedGraduation: "May 2027 (Junior Year)",
    gpa: "3.92 / 4.00",
    honors: [
      "Dean's Honor List (All Semesters)",
      "Upsilon Pi Epsilon (CS Honor Society)",
      "Grace Hopper Celebration Scholar Nominee"
    ],
    coursework: [
      {
        code: "CS 162",
        name: "Operating Systems & System Programming",
        description: "Threads, concurrency, virtual memory paging, file systems, IPC, and distributed storage."
      },
      {
        code: "CS 170",
        name: "Efficient Algorithms & Intractable Problems",
        description: "Divide-and-conquer, dynamic programming, graph algorithms (max flow, min cut), NP-completeness, randomized algorithms."
      },
      {
        code: "CS 168",
        name: "Computer Networks & The Internet",
        description: "TCP/IP architecture, socket programming, BGP/OSPF routing protocols, congestion control, and transport layer security."
      },
      {
        code: "CS 186",
        name: "Introduction to Database Systems",
        description: "B+ trees, query optimization, buffer management, relational algebra, ACID transactions, and two-phase locking."
      },
      {
        code: "CS 61B",
        name: "Data Structures & Advanced Programming",
        description: "Asymptotic complexity analysis, balanced search trees (Red-Black, AVL), hash maps, graphs, and software engineering design principles."
      },
      {
        code: "CS 161",
        name: "Computer Security",
        description: "Memory safety exploits (buffer overflows, ROP), cryptography (AES, RSA, ECC), web security, and network defenses."
      }
    ]
  },

  experiences: [
    {
      id: "exp-1",
      role: "Software Engineering Intern",
      company: "CloudScale Systems",
      companyUrl: "https://example.com/cloudscale",
      location: "San Jose, CA (Hybrid)",
      period: "May 2025 – Aug 2025",
      type: "Internship",
      summary: "Engineered distributed caching solutions and gRPC microservices handling 45,000+ RPS across Kubernetes clusters.",
      bullets: [
        "Architected an in-memory Redis cluster caching layer with automated TTL invalidation, decreasing p99 API response latencies by 38% for customer analytics queries.",
        "Refactored 4 monolithic REST services into high-performance Go microservices utilizing gRPC and Protobuf, decreasing serialization overhead and payload size by 42%.",
        "Configured Prometheus metric scrapers and Grafana dashboards for cluster-wide observability, enabling proactive alerting on worker node memory saturation.",
        "Implemented end-to-end integration test runners in Docker containers within GitHub Actions CI/CD pipelines, accelerating pull request validation times by 25%."
      ],
      technologies: ["Go", "gRPC", "Protobuf", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "GitHub Actions"],
      learnings: "Mastered distributed systems concurrency in Go (goroutines, channels, sync primitives) and learned to design fault-tolerant network protocols that gracefully handle packet loss and network partitions."
    },
    {
      id: "exp-2",
      role: "Full-Stack Developer Intern",
      company: "Apex Labs / FinMetrics",
      companyUrl: "https://example.com/apexlabs",
      location: "San Francisco, CA",
      period: "Jan 2025 – May 2025",
      type: "Internship",
      summary: "Built real-time telemetry streaming and trading ledger visualizations for portfolio managers.",
      bullets: [
        "Developed a responsive multi-pane portfolio tracking dashboard in React, TypeScript, and Tailwind CSS, rendering 10,000+ streaming market events per minute smoothly via WebSockets.",
        "Created RESTful endpoints in Node.js/Express with schema-validated PostgreSQL queries utilizing Knex.js and Redis read-through caching.",
        "Implemented secure JWT session management with refresh token rotation and Role-Based Access Control (RBAC) protecting financial reporting endpoints.",
        "Achieved 94% test coverage across critical transaction reconciliation services using Jest, React Testing Library, and Supertest."
      ],
      technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "WebSockets", "Redis", "Jest", "Tailwind CSS"],
      learnings: "Deepened practical knowledge of React state synchronization, debounced websocket data buffering to prevent browser re-render thrashing, and database indexing strategies."
    },
    {
      id: "exp-3",
      role: "Undergraduate Teaching Assistant (CS 61B)",
      company: "UC Berkeley EECS Department",
      location: "Berkeley, CA",
      period: "Aug 2024 – Present",
      type: "Academic",
      summary: "Mentoring 80+ undergraduate students in Data Structures, Algorithms, and Object-Oriented Software Engineering.",
      bullets: [
        "Lead two weekly 2-hour discussion and lab sections covering graph algorithms (Dijkstra, A*, BFS/DFS), balanced binary trees, heaps, and asymptotic runtime analysis.",
        "Hold 4 hours of weekly 1-on-1 office hours assisting students with memory debugging, algorithmic optimization, and test-driven development.",
        "Contributed to building automated autograder test suites in Python and JUnit, evaluating student submissions against corner cases and memory leaks."
      ],
      technologies: ["Java", "C++", "Python", "JUnit", "Git", "Bash", "Data Structures", "Algorithms"],
      learnings: "Greatly strengthened algorithmic fundamentals and developed clear technical communication skills by breaking down complex theoretical concepts for beginner and intermediate students."
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "DistriCache",
      category: "Systems & Backend",
      tagline: "High-throughput distributed in-memory key-value store with Raft consensus and WAL persistence",
      featured: true,
      description: "A production-grade distributed key-value store built in Go from scratch. Implements the Raft consensus algorithm for leader election, log replication, and safe state machine commits, combined with consistent hashing across node clusters.",
      architectureDetails: [
        "Consensus Core: Custom implementation of Raft (Leader Election, Heartbeats, Log Replication, RPC handler).",
        "Storage Engine: Write-Ahead Logging (WAL) with periodic background snapshotting to disk for crash recovery.",
        "Cluster Routing: Consistent hashing ring with virtual nodes (256 vnodes per physical node) minimizing key migration during node joins/leaves.",
        "Client Interface: gRPC streaming client with automatic failover to the active Raft leader node."
      ],
      challengesSolved: [
        "Eliminated split-brain scenarios during simulated network partitions by enforcing strict majority quorum validation before appending log entries.",
        "Reduced disk I/O bottleneck by batching WAL disk flushes with sync.Pool and atomic memory buffers."
      ],
      metrics: [
        "18,500+ requests/sec sustained write throughput on a 5-node cluster",
        "< 3.2ms p99 write latency under Raft quorum replication",
        "Zero data loss during ungraceful node crash simulations"
      ],
      technologies: ["Go", "Raft", "gRPC", "Protobuf", "Concurrency", "Consistent Hashing", "WAL"],
      githubUrl: "https://github.com/vinitapatricia/districache",
      demoUrl: "https://github.com/vinitapatricia/districache#benchmarks",
      codeSnippet: {
        filename: "raft_consensus.go",
        language: "go",
        code: `// AppendEntries handles log replication RPC from the cluster leader
func (rf *Raft) AppendEntries(args *AppendEntriesArgs, reply *AppendEntriesReply) {
    rf.mu.Lock()
    defer rf.mu.Unlock()

    reply.Success = false
    reply.Term = rf.currentTerm

    // Reject entries if leader's term is older than ours
    if args.Term < rf.currentTerm {
        return
    }

    if args.Term > rf.currentTerm {
        rf.currentTerm = args.Term
        rf.state = Follower
        rf.votedFor = -1
    }

    rf.lastHeartbeat = time.Now()

    // Validate log matching invariant at prevLogIndex
    if args.PrevLogIndex >= len(rf.log) || rf.log[args.PrevLogIndex].Term != args.PrevLogTerm {
        return
    }

    // Append novel entries and commit up to leaderCommit
    rf.log = append(rf.log[:args.PrevLogIndex+1], args.Entries...)
    if args.LeaderCommit > rf.commitIndex {
        rf.commitIndex = min(args.LeaderCommit, len(rf.log)-1)
        rf.applyCond.Broadcast()
    }
    reply.Success = true
}`
      }
    },
    {
      id: "proj-2",
      title: "NexusMetrics",
      category: "Full-Stack",
      tagline: "Real-time distributed systems telemetry and anomaly detection dashboard",
      featured: true,
      description: "A full-stack infrastructure telemetry monitoring platform that ingests streaming metrics from distributed microservices, detects anomalies with sliding-window Z-score algorithms, and visualizes live health states.",
      architectureDetails: [
        "Data Ingestion: High-throughput Node.js microservice consuming metric streams via WebSocket and HTTP chunked uploads.",
        "Buffer & Aggregation: Redis streams acting as a memory buffer with TimescaleDB for continuous downsampled time-series storage.",
        "Frontend Engine: React 19 + TypeScript with HTML5 Canvas/SVG renderers to plot 60 FPS charts without DOM thrashing.",
        "Alerting Engine: Automated threshold alerts sent via webhook integrations with debounced notification queues."
      ],
      challengesSolved: [
        "Prevented browser UI stuttering when consuming 500+ metrics/sec by batching state dispatches with requestAnimationFrame and micro-buffering.",
        "Designed time-series query indexes in PostgreSQL with hypertables, cutting range query times from 1.8s to 45ms."
      ],
      metrics: [
        "60 FPS smooth rendering with 5,000 simultaneous live data points",
        "Sub-100ms latency from telemetry emission to dashboard display",
        "Processed over 1.2M simulated metrics during stress testing"
      ],
      technologies: ["TypeScript", "React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com/vinitapatricia/nexus-metrics",
      demoUrl: "https://nexusmetrics-demo.vinitapatricia.dev",
      codeSnippet: {
        filename: "useMetricStream.ts",
        language: "typescript",
        code: `// Batched WebSocket hook with requestAnimationFrame dispatch
export function useMetricStream(serviceId: string) {
  const [dataPoints, setDataPoints] = useState<MetricPoint[]>([]);
  const bufferRef = useRef<MetricPoint[]>([]);

  useEffect(() => {
    const ws = new WebSocket(\`\${WS_URL}/stream/\${serviceId}\`);
    let frameId: number;

    ws.onmessage = (event) => {
      const metric: MetricPoint = JSON.parse(event.data);
      bufferRef.current.push(metric);
    };

    const flushBuffer = () => {
      if (bufferRef.current.length > 0) {
        setDataPoints((prev) => [...prev.slice(-300), ...bufferRef.current]);
        bufferRef.current = [];
      }
      frameId = requestAnimationFrame(flushBuffer);
    };

    frameId = requestAnimationFrame(flushBuffer);
    return () => {
      ws.close();
      cancelAnimationFrame(frameId);
    };
  }, [serviceId]);

  return dataPoints;
}`
      }
    },
    {
      id: "proj-3",
      title: "MiniOS Kernel",
      category: "Core CS / Low-Level",
      tagline: "Preemptive multitasking 32-bit x86 kernel with virtual memory paging and custom syscalls",
      featured: true,
      description: "An educational monolithic operating system kernel developed for x86 architecture. Boots from GRUB, initializes GDT/IDT, configures page directories, and supports preemptive round-robin process scheduling with user-space isolation.",
      architectureDetails: [
        "Boot & Initialization: Bootstrapped via Multiboot header; sets up Protected Mode (32-bit) and Global Descriptor Table (GDT).",
        "Interrupts & Syscalls: Configured Interrupt Descriptor Table (IDT) and Programmable Interrupt Controller (PIC); handles software interrupt 0x80 for syscalls.",
        "Virtual Memory: Two-level paging mechanism with 4KB pages, kernel identity mapping, and user-space virtual address translation.",
        "Process Scheduling: Preemptive round-robin context switching triggered by the Programmable Interval Timer (PIT) at 100Hz."
      ],
      challengesSolved: [
        "Debugged kernel stack corruption during ring 3 (user space) to ring 0 (kernel space) context switches by inspecting TSS privilege level transitions in GDB/QEMU.",
        "Implemented copy-on-write (COW) page fault handler to optimize process spawning."
      ],
      metrics: [
        "10+ POSIX-style system calls implemented (fork, exec, read, write, exit, wait)",
        "Round-robin context switch time < 1.4 microseconds",
        "Bootable ISO tested in QEMU and real legacy hardware"
      ],
      technologies: ["C", "x86 Assembly", "QEMU", "GDB", "Make", "Linker Scripts", "Memory Paging"],
      githubUrl: "https://github.com/vinitapatricia/minios-kernel",
      codeSnippet: {
        filename: "scheduler.c",
        language: "c",
        code: `// Preemptive context switch triggered by PIT timer IRQ0
void schedule(struct interrupt_frame *frame) {
    if (current_process == NULL || process_queue_empty()) {
        return;
    }

    // Save hardware context of currently running task
    current_process->esp = frame->esp;
    current_process->state = TASK_READY;

    // Pick next ready task from round-robin runqueue
    struct task *next_process = dequeue_ready_task();
    next_process->state = TASK_RUNNING;
    current_process = next_process;

    // Switch page directory if address space changed
    switch_page_directory(next_process->page_directory);

    // Context switch to next process stack
    switch_task_context(next_process->esp);
}`
      }
    },
    {
      id: "proj-4",
      title: "CodeReviewer AI",
      category: "AI & Tooling",
      tagline: "AST-driven pull-request analyzer with AST parsing and automated security vulnerability checks",
      featured: true,
      description: "A developer productivity CLI and GitHub Action that parses modified Abstract Syntax Trees (ASTs) via Tree-sitter to detect anti-patterns, memory leak hazards, and SQL injection vulnerabilities prior to merge.",
      architectureDetails: [
        "AST Parsing: Utilizes Tree-sitter bindings to construct precise syntax trees across Python, Go, and TypeScript files.",
        "Static Analysis Engine: Rule-based heuristics evaluating cyclomatic complexity, unclosed file descriptors, and unsanitized queries.",
        "AI Enrichment: Integrates structured prompt pipelines for nuanced architectural refactoring suggestions.",
        "GitHub Action Runner: Auto-posts actionable inline comments directly on GitHub Pull Requests."
      ],
      challengesSolved: [
        "Handled massive repository diffs by computing AST deltas rather than reparsing entire source trees, lowering analysis execution by 70%.",
        "Formulated deterministic linting rules to reduce false-positive rates below 4%."
      ],
      metrics: [
        "Analyzes a 500-line diff in under 1.2 seconds",
        "Detects 18 distinct security and code hygiene anti-patterns",
        "Used by 4 student engineering clubs with 300+ PRs analyzed"
      ],
      technologies: ["Python", "Tree-sitter", "FastAPI", "Docker", "GitHub Actions API", "PyTest"],
      githubUrl: "https://github.com/vinitapatricia/codereviewer-ai",
      demoUrl: "https://github.com/vinitapatricia/codereviewer-ai#action-preview"
    },
    {
      id: "proj-5",
      title: "PeerLink",
      category: "Systems & Backend",
      tagline: "Decentralized P2P file sharing protocol implementation with Kademlia DHT",
      featured: false,
      description: "A decentralized peer-to-peer file sharing and routing client. Implements the Kademlia Distributed Hash Table (DHT) for node lookup via XOR metric distance, content addressing with SHA-256 chunking, and concurrent UDP piece transfer.",
      architectureDetails: [
        "Kademlia Routing: 160-bit node IDs with k-bucket routing tables (k=20) and recursive FIND_NODE / FIND_VALUE RPCs.",
        "Chunk Verification: Files sliced into 256KB chunks; verified against a cryptographic Merkle root hash before reassembly.",
        "Transport: Custom sliding-window reliable UDP protocol with selective acknowledgment (SACK) to bypass NAT constraints."
      ],
      challengesSolved: [
        "Resolved routing churn under intermittent peer disconnects by implementing periodic bucket refreshes and exponential backoff pinging."
      ],
      metrics: [
        "Logarithmic O(log N) lookup hops across network nodes",
        "Concurrent swarm downloads tested across 20+ virtual container nodes"
      ],
      technologies: ["Go", "Distributed Hash Tables", "Kademlia", "UDP", "Cryptography", "Concurrency"],
      githubUrl: "https://github.com/vinitapatricia/peerlink"
    },
    {
      id: "proj-6",
      title: "AlgoVerse",
      category: "Core CS / Low-Level",
      tagline: "Interactive algorithmic memory visualizer for complex graph traversals and tree balancing",
      featured: false,
      description: "An educational web application designed for computer science students to visualize how algorithms manipulate pointers, stack frames, and heap allocations in real-time. Features step-by-step playback, breakpoint stepping, and runtime complexity metrics.",
      architectureDetails: [
        "Interactive Canvas: Custom rendered SVG tree structures supporting automatic layout re-balancing (AVL, Red-Black Trees).",
        "Algorithm Engine: Implements generators in TypeScript that pause execution per instruction, enabling forward and backward time-travel stepping.",
        "Supported Algorithms: Dijkstra, A* Pathfinding, Bellman-Ford, Tarjan's SCC, AVL Tree Rotations, and QuickSort Partitioning."
      ],
      challengesSolved: [
        "Engineered a bidirectional state snapshot system allowing students to step backward through algorithm execution history smoothly."
      ],
      metrics: [
        "5,000+ monthly visits from CS students across universities",
        "Smooth 60 FPS transitions during complex tree rotations"
      ],
      technologies: ["TypeScript", "React", "Tailwind CSS", "Canvas API", "Algorithms", "Vite"],
      githubUrl: "https://github.com/vinitapatricia/algoverse",
      demoUrl: "https://algoverse-visualizer.vinitapatricia.dev"
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Go", level: "Proficient", highlight: true },
        { name: "Python", level: "Proficient", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "C / C++", level: "Proficient", highlight: true },
        { name: "Java", level: "Advanced" },
        { name: "SQL (PostgreSQL)", level: "Proficient", highlight: true },
        { name: "Bash / Shell", level: "Advanced" },
        { name: "x86 Assembly", level: "Familiar" }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "gRPC & Protobuf", level: "Proficient", highlight: true },
        { name: "Redis (Caching / Streams)", level: "Proficient", highlight: true },
        { name: "PostgreSQL", level: "Proficient", highlight: true },
        { name: "Docker", level: "Proficient", highlight: true },
        { name: "Kubernetes (K8s)", level: "Advanced" },
        { name: "WebSockets", level: "Proficient" },
        { name: "Node.js / Express", level: "Proficient" },
        { name: "FastAPI", level: "Advanced" }
      ]
    },
    {
      category: "Frontend & Full-Stack",
      skills: [
        { name: "React 19", level: "Proficient", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "Tailwind CSS", level: "Proficient", highlight: true },
        { name: "HTML5 Canvas", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "REST APIs", level: "Proficient" }
      ]
    },
    {
      category: "Developer Tools & Practices",
      skills: [
        { name: "Git & GitHub Actions", level: "Proficient", highlight: true },
        { name: "Linux / Unix Systems", level: "Proficient", highlight: true },
        { name: "GDB & Valgrind", level: "Advanced" },
        { name: "Prometheus & Grafana", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Proficient" },
        { name: "Jest & PyTest", level: "Proficient" }
      ]
    },
    {
      category: "Core CS Theoretical Foundations",
      skills: [
        { name: "Data Structures & Algorithms", level: "Proficient", highlight: true },
        { name: "Distributed Systems & Raft", level: "Proficient", highlight: true },
        { name: "Operating Systems & Concurrency", level: "Proficient", highlight: true },
        { name: "Computer Networks & TCP/IP", level: "Advanced" },
        { name: "Database Internals & Indexing", level: "Advanced" },
        { name: "Computer Security Basics", level: "Advanced" }
      ]
    }
  ]
};
