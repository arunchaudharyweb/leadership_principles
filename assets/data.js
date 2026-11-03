window.PREP_DATA = {
  "updated": "3 November 2026",
  "sources": [
    {
      "id": "google",
      "title": "Google: How to prepare for an interview",
      "date": "Published 11 December 2025; checked 3 November 2026",
      "kind": "Official guidance",
      "url": "https://grow.google/grow-your-career/articles/interview-tips/",
      "summary": "Google’s general career guide distinguishes behavioral, situational, introductory, and personal questions. It recommends concise answers, relevant examples, and practice. It is not an L4 scoring rubric or a promise about your interview format."
    },
    {
      "id": "sep26",
      "title": "L4 candidate report: August interview, September post",
      "date": "Posted 16 September 2026; interview described as August 2026",
      "kind": "Candidate report • unverified",
      "url": "https://interviewexperiences.in/experience/google/google-l4-interview-experience-aug-2026",
      "summary": "The author reports prompts about a colleague taking credit and managing competing priorities. The practice questions here paraphrase those themes. One report does not establish frequency or predict your questions."
    },
    {
      "id": "aug26",
      "title": "L4 candidate report: hypothetical situations",
      "date": "Posted 24 August 2026; exact interview day not stated",
      "kind": "Candidate report • unverified",
      "url": "https://www.reddit.com/r/leetcode/comments/1vwzbg9/google_l4_interview_experience/",
      "summary": "The author describes a Googliness round built around hypothetical situations. This supports practicing “what would you do” reasoning alongside past examples; it provides no exact hypothetical prompts."
    },
    {
      "id": "community",
      "title": "L4 report and discussion: questions beyond STAR",
      "date": "Thread posted 13 August 2026; comment dates vary",
      "kind": "Candidate comments • unverified",
      "url": "https://www.reddit.com/r/leetcode/comments/1vnjult/google_l4_round_1_interview_experience/",
      "summary": "The original author reports behavioral follow-ups. Separate commenters describe hypothetical-heavy rounds and a question about a company’s responsibilities to its community. These are different commenters’ experiences, not a single reported interview."
    },
    {
      "id": "aced",
      "title": "L4 candidate account: ambiguity, users, conflict, learning",
      "date": "Page labels the interview relatively (“7 months ago” when checked); exact date unverified",
      "kind": "Candidate report • platform labels verified",
      "url": "https://www.aced.io/experiences/google-software-engineer-interview-597223",
      "summary": "The final-round account lists ambiguity, user-first product work, coworker disagreement, and a learning mindset. These themes are paraphrased in the question bank. The platform’s verification is not independent verification by this site."
    },
    {
      "id": "mcp",
      "title": "MCP specification: tools",
      "date": "Specification version 2025-06-18; checked 3 November 2026",
      "kind": "Primary technical reference",
      "url": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
      "summary": "Defines model-invoked tools, schemas, and tool responses, and discusses human oversight. Use for technical vocabulary and design considerations; it does not establish which safeguards Arun implemented."
    },
    {
      "id": "whisper",
      "title": "Introducing Whisper",
      "date": "Published 21 September 2022; checked 3 November 2026",
      "kind": "Primary technical reference",
      "url": "https://openai.com/index/whisper/",
      "summary": "Describes Whisper as automatic speech recognition. In this project, transcription is evidence about audio, not proof that the soundbar executed the requested action."
    }
  ],
  "stories": [
    {
      "id": "alexa",
      "title": "Alexa test automation with an LLM, MCP, and Whisper",
      "themes": [
        "Ambiguity",
        "Judgment",
        "AI",
        "Ownership"
      ],
      "basis": "Confirmed in this chat",
      "pitch": "I worked on an AI-assisted runner for Alexa integration tests on soundbars. It interpreted Amazon Alexa test cases, checked and attempted to establish preconditions through soundbar-side MCP tools, ran utterances, and evaluated Whisper transcripts alongside soundbar state changes. The important judgment was to use observable evidence rather than accept the model’s answer on its own.",
      "situation": "We had test cases supplied by the Amazon Alexa team for soundbar integrations. Execution involved setup conditions, voice commands, spoken responses, and device behavior.",
      "task": "Automate that workflow while preserving a way to judge whether the device actually behaved as expected. State your exact component ownership before saying you led the whole project.",
      "action": "I parsed the test cases and passed them to an LLM to assess preconditions. If conditions were unmet, the runner attempted to establish them through MCP tools on the soundbar side. It then ran utterances such as “Alexa, play music,” transcribed the response using Whisper, and checked soundbar state changes before judging the result. Ambiguous results required manual review, and AI assessments were checked against known cases.",
      "result": "The resulting workflow linked test interpretation, setup, utterance execution, transcription, and device-state evidence. No measured time savings, accuracy, rollout size, or production impact has been supplied; add only figures you can explain and substantiate.",
      "reflection": "Suggested takeaway: language understanding was useful for interpreting tests, but execution and verdicts needed evidence from the device. Distinguish an AI judgment problem from an automation or recognition failure.",
      "probes": [
        "What did you personally implement, and what did teammates own?",
        "Why did the problem need an LLM rather than structured test scripts?",
        "Give one actual precondition, MCP action, observed response, and verdict.",
        "What happened when setup could not be established?",
        "What did you measure against a human-reviewed baseline?",
        "What did a reviewer disagree with, and what did you change?"
      ],
      "verify": [
        "Exact personal ownership and collaboration",
        "Test-case input format, LLM/provider/version, and tool names",
        "How utterances were produced and audio was captured",
        "Actual timeout/retry/reset policy",
        "One actual failure and one real result"
      ]
    },
    {
      "id": "device",
      "title": "Multi-device soundbar control",
      "themes": [
        "Ownership",
        "Users",
        "Judgment"
      ],
      "basis": "Resume + existing story bank",
      "pitch": "I implemented Android control and state synchronization for 12+ Samsung audio devices using Kotlin Coroutines, StateFlow, and a repository-based architecture. My focus was keeping the UI responsive while device states changed independently.",
      "situation": "The Samsung Sound App controls multiple soundbars and speakers, with synchronized playback and configuration screens.",
      "task": "Maintain consistent application state and responsive device control.",
      "action": "Explain the repository responsibilities, the StateFlow pipeline, and why response processing belongs off the main thread. The existing bank describes replacing polling with event-driven listeners; use that detail only if it accurately reflects your implementation.",
      "result": "The resume supports 12+ devices and under-100-ms equalizer response latency. The old page also claims an 800-ms baseline, 92% fewer messages, zero crashes for six months, and adoption by two teams; verify those separately before using them.",
      "reflection": "Suggested takeaway: first measure where latency comes from, then choose a state model that matches independent device updates.",
      "probes": [
        "What was your decision versus an existing team decision?",
        "How did you measure latency and define the start/end timestamps?",
        "How do you isolate one offline device?",
        "Who disagreed and what did you learn?"
      ],
      "verify": [
        "Measurement methodology",
        "Which historical metrics are real",
        "Exactly what changed in device firmware, if anything"
      ]
    },
    {
      "id": "spotify",
      "title": "Turning an ambiguous Spotify request into a scoped feature",
      "themes": [
        "Ambiguity",
        "Collaboration",
        "Influence"
      ],
      "basis": "Existing story bank; validate details",
      "pitch": "The request was “Spotify integration,” which could mean very different things. I investigated feasible options, compared scope and effort in a short document, and helped the team choose before coding.",
      "situation": "The old bank describes an underspecified integration request for the Samsung Sound App.",
      "task": "Clarify the user goal and agree on a deliverable rather than implement an assumption.",
      "action": "Describe the options you actually investigated: opening Spotify, linking to the current track, or broader control. Explain which stakeholders selected the scope, what input changed your view, and the fallback behavior you built.",
      "result": "Your resume confirms Spotify/Alexa deep-link integration. The old bank’s four-day delivery and reused document template need confirmation.",
      "reflection": "Suggested takeaway: show stakeholders feasible choices, clarify the user outcome, and write down the decision.",
      "probes": [
        "What did product or QA contribute?",
        "What did you intentionally leave out?",
        "What if stakeholders still could not agree?"
      ],
      "verify": [
        "Your exact involvement",
        "Delivery timeline",
        "Actual stakeholder disagreement"
      ]
    },
    {
      "id": "conflict",
      "title": "Equalizer command flooding and constructive disagreement",
      "themes": [
        "Conflict",
        "Influence",
        "Judgment"
      ],
      "basis": "Existing story bank; validate details",
      "pitch": "I disagreed with sending every slider movement directly to the soundbar. I demonstrated how command backlogs could separate the UI from device behavior and proposed separating visual feedback from command delivery.",
      "situation": "The existing bank describes a disagreement about equalizer responsiveness versus command volume.",
      "task": "Find a solution that met both UX and device constraints without turning the discussion into a personal argument.",
      "action": "Explain the other person’s reasoning fairly. Walk through the evidence and the command-coalescing/debounce alternative. Describe what feedback you accepted and how the team made the decision.",
      "result": "Confirm what shipped. If quoting 300 ms, distinguish the debounce wait from device execution latency; a sub-100-ms device response does not imply sub-100-ms end-to-end slider response.",
      "reflection": "Suggested takeaway: a reproducible example and shared success criteria are more persuasive than insisting on your preferred implementation.",
      "probes": [
        "When was your colleague right?",
        "What would you do if the team rejected your proposal?",
        "How would you preserve audible feedback during continuous dragging?"
      ],
      "verify": [
        "Exact disagreement and outcome",
        "Debounce versus throttle behavior",
        "Full latency definition"
      ]
    },
    {
      "id": "upload",
      "title": "Improving uploads during the Samsung internship",
      "themes": [
        "Learning",
        "Ownership",
        "Judgment"
      ],
      "basis": "Resume + existing story bank",
      "pitch": "I improved the attachment upload module using Kotlin Coroutines and image compression, reducing average upload time by 30% according to my resume.",
      "situation": "The internal tool’s attachment uploads were slow.",
      "task": "Improve performance while keeping image quality usable.",
      "action": "Explain how you identified the bottleneck, selected compression settings, moved work off the UI thread, and verified output quality. Describe your actual tests rather than assume every suggestion in the old bank was implemented.",
      "result": "Use the resume’s 30% improvement unless you can reconcile it with the old bank’s separate 62% figure and explain the different baseline or scope.",
      "reflection": "Suggested takeaway: measure preparation, transfer, and rendering separately before blaming the network.",
      "probes": [
        "How did you define average upload time?",
        "What did you learn from a failed experiment?",
        "Did compression affect users on low-end phones?"
      ],
      "verify": [
        "30% versus 62% discrepancy",
        "Whether chunked retry was implemented",
        "Dataset and devices used"
      ]
    },
    {
      "id": "watchface",
      "title": "Owning a consumer Android app with 100K+ downloads",
      "themes": [
        "Users",
        "Ownership",
        "Prioritization"
      ],
      "basis": "Resume + existing story bank",
      "pitch": "I launched and maintain Mi Band 5 Watch Faces, a native Android app with 100K+ downloads. I own choices across architecture, content delivery, localization, notifications, and monetization.",
      "situation": "A solo-maintained consumer app needs to remain useful and maintainable as its user base grows.",
      "task": "Choose improvements that help users without creating unsustainable complexity.",
      "action": "Use the real Kotlin/Compose/MVVM stack, Paging 3 and image caching, FCM, Billing, and seven-language support. For prioritization, explain the actual analytics or review evidence you used and the alternatives you considered.",
      "result": "The resume records 100K+ downloads, engagement +30%, ad revenue +25%, and retention +40%. Confirm definitions, windows, and whether these were correlated changes rather than controlled causal effects.",
      "reflection": "Suggested takeaway: success means useful user outcomes and reliable operation, not just shipping more features.",
      "probes": [
        "What user feedback changed your plan?",
        "How did you handle a dissatisfied user?",
        "What did you stop doing?",
        "What would you improve with another engineer?"
      ],
      "verify": [
        "Definitions of engagement and retention",
        "Time windows and analytics evidence",
        "Any specific anecdote before quoting it"
      ]
    },
    {
      "id": "failure",
      "title": "Underestimating a flash-sale feature",
      "themes": [
        "Failure",
        "Communication",
        "Learning"
      ],
      "basis": "Existing story bank; validate before using",
      "pitch": "In the existing example, I estimated a countdown feature but missed how sale expiry affected cart and checkout state. I communicated the slip and changed how I estimate feature boundaries.",
      "situation": "The legacy bank describes a freelance e-commerce prototype with a fixed stakeholder demo date.",
      "task": "Deliver the feature while keeping the client informed when the scope proved larger than estimated.",
      "action": "If this is your real experience, explain when you recognized the miss, the revised options you offered, and how you handled active checkout state. Focus on your mistake, not the client’s deadline.",
      "result": "The legacy account says three estimated days became nine. Confirm both the numbers and the client outcome.",
      "reflection": "Suggested takeaway: estimate starts, ends, failure paths, and dependent screens; prototype unknowns before committing.",
      "probes": [
        "What did you say in the difficult conversation?",
        "What did you offer to cut?",
        "What evidence shows your estimation process improved?"
      ],
      "verify": [
        "That this is a real personal example",
        "Dates and exact scope",
        "A later example of the changed process"
      ]
    },
    {
      "id": "mentor",
      "title": "Helping a junior improve a list screen",
      "themes": [
        "Mentoring",
        "Collaboration",
        "Inclusion"
      ],
      "basis": "Existing story bank; validate before using",
      "pitch": "The existing example describes helping an intern diagnose unnecessary list redraws by showing the behavior, explaining the cause, and letting them implement the fix.",
      "situation": "An intern’s QR-results list flickered when updates redrew more than necessary.",
      "task": "Help the person learn rather than take over their task.",
      "action": "Explain how you asked questions, used a visual debugging tool, and gave review feedback with reasons. Include how you adjusted your approach to their experience and checked that they understood.",
      "result": "Verify the actual improvement and their feedback. Do not invent a quote or claim it became the team standard without evidence.",
      "reflection": "Suggested takeaway: mentoring succeeds when the teammate can solve the next problem independently.",
      "probes": [
        "How did you balance coaching with your deadline?",
        "What if they rejected the feedback?",
        "What did you learn from them?"
      ],
      "verify": [
        "Your actual role and feedback",
        "What the intern implemented independently",
        "Performance measurements, if any"
      ]
    },
    {
      "id": "learning",
      "title": "Learning reliable Android background work",
      "themes": [
        "Learning",
        "Failure",
        "Judgment"
      ],
      "basis": "Existing story bank; validate details",
      "pitch": "The old bank describes learning why in-process work can be lost when Android terminates an app, then moving toward persisted work with WorkManager.",
      "situation": "Internal session analytics could be lost when the app process was killed.",
      "task": "Understand the failure and improve delivery reliability.",
      "action": "Explain the persist-first design, when a worker is actually enqueued, and how network constraints and retries work. Do not say Android guarantees a callback when the app is killed; design so the work is persisted/enqueued before termination can happen.",
      "result": "The legacy 98% delivery figure needs its denominator, observation window, and reconciliation method before use.",
      "reflection": "Suggested takeaway: learn the platform lifecycle, reproduce the failure, and validate the new approach under the same conditions.",
      "probes": [
        "How did you know the problem was on the client?",
        "What guarantees did WorkManager actually provide?",
        "What happens with duplicate events?"
      ],
      "verify": [
        "Actual scheduling point",
        "Delivery measurement",
        "How duplicates and privacy were handled"
      ]
    }
  ],
  "questions": [
    {
      "id": "intro",
      "category": "Motivation",
      "type": "Direct",
      "prompt": "Tell me about yourself and what you would bring to Google L4.",
      "answer": "I am an Android engineer at Samsung R&D in Delhi, working in a four-person team on core projects. My work includes multi-device soundbar control, reactive state management, and responsive Compose interfaces. I also maintain a consumer Android app with 100K+ downloads and worked on an AI-assisted Alexa test runner. I would bring hands-on delivery, attention to user-visible reliability, and a willingness to investigate ambiguous problems with the team.",
      "checks": [
        "Keep it to 45–60 seconds.",
        "Explain contribution rather than recite every library."
      ],
      "followups": [
        "Which project best shows your ownership?",
        "What would be new for you at Google?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "why-google",
      "category": "Motivation",
      "type": "Direct",
      "prompt": "Why Google, and why move from Samsung?",
      "answer": "I want to build on my Android and device-integration experience while taking on broader product and reliability challenges. Google interests me because of its work across Android and products that serve many different users. I would like to bring my experience translating device behavior into dependable user experiences, while learning from engineers working at that scale. Add a specific connection to the actual team or job description; do not pretend you know your eventual team.",
      "checks": [
        "Positive reason for moving.",
        "Specific role connection you genuinely care about."
      ],
      "followups": [
        "Why not grow in your current team?",
        "Which product problem would you want to understand first?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "success",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What does success mean to you?",
      "answer": "Success means users can accomplish the intended task reliably and the team can maintain what we shipped. For a soundbar feature, I would look beyond a finished screen to whether the command reaches the right device and state stays consistent. I also value leaving clear decisions and tests so the next engineer can work confidently.",
      "checks": [
        "Personal definition plus observable behavior."
      ],
      "followups": [
        "How do you balance user value and delivery time?",
        "When did your definition change?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "strength",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What is your strongest contribution to a team?",
      "answer": "A useful strength to discuss is tracing a user-visible problem across UI, application state, and device behavior instead of optimizing one layer in isolation. Anchor that in the real multi-device project: what you observed, what you personally changed, and how you verified it. Phrase it as your strength only if it matches how you work.",
      "checks": [
        "One strength, one concrete example."
      ],
      "followups": [
        "What would your teammate say?",
        "Where can this strength become a weakness?"
      ],
      "story": "device",
      "source": ""
    },
    {
      "id": "weakness",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What is a genuine weakness you are working on?",
      "answer": "Choose a real limitation with a recent example. If the estimation story is authentic: I have underestimated cross-feature dependencies when the visible feature looked familiar. I now map start/end/failure behavior and investigate unknowns before committing. Explain one subsequent estimate where this changed your behavior.",
      "checks": [
        "Real cost, concrete change, recent evidence.",
        "Avoid a disguised strength such as caring too much."
      ],
      "followups": [
        "When did it last happen?",
        "What feedback did you receive?"
      ],
      "story": "failure",
      "source": ""
    },
    {
      "id": "manager",
      "category": "Collaboration",
      "type": "Direct",
      "prompt": "What do you expect from a manager, and how do you handle disagreement with one?",
      "answer": "I value clear priorities, candid feedback, and room to own implementation decisions. I would bring evidence and options when I disagree, listen for constraints I may be missing, and align on who makes the decision. After a safe decision is made I would support it; a serious integrity, safety, or privacy concern needs the appropriate escalation path.",
      "checks": [
        "IC scope: influence without pretending to manage the team."
      ],
      "followups": [
        "What if the manager changes the goal again?",
        "How do you avoid escalating every disagreement?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "rejection",
      "category": "Self-awareness",
      "type": "Hypothetical",
      "prompt": "If Google rejects you this time, what would you do?",
      "answer": "I would be disappointed, but I would use the experience to identify specific gaps. I would ask for whatever feedback can be shared, reflect on examples where I was unclear, and keep improving through my current work and practice. I would reassess a future opportunity when the role and my readiness align.",
      "checks": [
        "Resilience without claiming guaranteed feedback."
      ],
      "followups": [
        "What did you change after your last interview?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "ambiguity",
      "category": "Ambiguity",
      "type": "Behavioral",
      "prompt": "Describe a time you had to deal with ambiguity.",
      "answer": "Use the Spotify scope story. State the ambiguous user goal, the options you investigated, whose input you sought, and how the final scope was agreed. Spend most of the answer on how you reduced uncertainty, not on implementation libraries.",
      "checks": [
        "What was unknown?",
        "What changed after talking to others?"
      ],
      "followups": [
        "What if no stakeholder would decide?",
        "What did you deliberately defer?"
      ],
      "story": "spotify",
      "source": "aced"
    },
    {
      "id": "user-first",
      "category": "Users",
      "type": "Behavioral",
      "prompt": "Tell me about a time you put users first when leading product work.",
      "answer": "Use the watch-face app or a soundbar reliability improvement. Explain the actual user pain, the evidence you had, the alternative you declined, and the user outcome. Distinguish observed improvements from proof that your change caused them.",
      "checks": [
        "A real user, decision, and outcome."
      ],
      "followups": [
        "What if revenue pointed in the other direction?",
        "Whose needs might your analytics miss?"
      ],
      "story": "watchface",
      "source": "aced"
    },
    {
      "id": "disagreement",
      "category": "Conflict",
      "type": "Behavioral",
      "prompt": "Tell me about a disagreement with a coworker.",
      "answer": "Use the equalizer example if authentic. Represent the other engineer’s goal fairly, explain your evidence and proposal, then describe the shared decision and relationship afterward. Include what you learned or changed rather than ending at “I convinced them.”",
      "checks": [
        "Fair description of the other view.",
        "Your actions and reflection."
      ],
      "followups": [
        "What if they were right?",
        "Did the relationship change?"
      ],
      "story": "conflict",
      "source": "aced"
    },
    {
      "id": "learning-mindset",
      "category": "Learning",
      "type": "Direct",
      "prompt": "How do you keep learning and growing as an engineer?",
      "answer": "I learn most effectively when I can connect a new concept to a real problem, build a small prototype, and test its failure cases. My recent work with AI coding assistants and Alexa test automation has made me think more carefully about the gap between a plausible response and verifiable behavior. Add a specific recent mistake or piece of feedback and what you changed.",
      "checks": [
        "Learning applied to behavior.",
        "An actual example rather than a list of blogs."
      ],
      "followups": [
        "What did you change your mind about recently?",
        "What did a junior teach you?"
      ],
      "story": "alexa",
      "source": "aced"
    },
    {
      "id": "credit",
      "category": "Conflict",
      "type": "Hypothetical",
      "prompt": "A teammate presents your work as their own. How would you respond?",
      "answer": "I would first check the facts and speak privately, describing the specific presentation and its impact without assuming intent. I would ask to clarify contributions in the next update and make shared ownership visible in design notes and demos. If it continued or affected evaluation, I would bring factual examples to my manager and ask for help resolving it fairly.",
      "checks": [
        "Private conversation first unless harm is urgent.",
        "Credit the teammate’s real contribution too."
      ],
      "followups": [
        "What if it was your manager?",
        "What if the teammate disagrees with your account?"
      ],
      "story": "",
      "source": "sep26"
    },
    {
      "id": "priorities",
      "category": "Prioritization",
      "type": "Hypothetical",
      "prompt": "You have more important work than time. How do you prioritize?",
      "answer": "I would list commitments, affected users, deadlines, dependencies, and the cost of delay. I would protect urgent reliability issues, compare options against the shared goal, and propose what to defer or reduce. I would align with owners early, make trade-offs visible, and revisit the plan if new evidence changes urgency.",
      "checks": [
        "Do not silently accept everything.",
        "Include communication and a revisit trigger."
      ],
      "followups": [
        "Two managers insist their work is first—then what?",
        "What if no one will de-scope?"
      ],
      "story": "",
      "source": "sep26"
    },
    {
      "id": "community",
      "category": "Ethics",
      "type": "Direct",
      "prompt": "What responsibilities does a technology company have toward its local community?",
      "answer": "I would consider the people affected by its decisions: employees, neighbors, local organizations, and users. At a minimum, it should operate responsibly, listen to concerns, and address harms it creates. Beyond that, it can partner on locally useful efforts such as education or accessibility, with community input and clear measures of benefit. I would avoid assuming the company knows what the community needs without asking.",
      "checks": [
        "State a reasoned view and consider competing needs.",
        "You do not need a STAR story for an opinion question."
      ],
      "followups": [
        "What if the best business choice harms the community?",
        "How would you measure whether a program helps?"
      ],
      "story": "",
      "source": "community"
    },
    {
      "id": "tension",
      "category": "Collaboration",
      "type": "Hypothetical",
      "prompt": "Two teammates disagree and progress has stopped. What do you do?",
      "answer": "I would hear both views and restate the common goal and disputed assumptions. Then I would separate facts from preferences, agree on decision criteria, and propose a small experiment when useful. If a deadline requires a decision, I would identify the decision owner, document the trade-off, and support the selected path.",
      "checks": [
        "No need to declare a winner immediately."
      ],
      "followups": [
        "What if you lack technical context?",
        "How do you include a quieter teammate?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "mistake",
      "category": "Failure",
      "type": "Behavioral",
      "prompt": "Tell me about a mistake that affected someone else.",
      "answer": "Use a genuine example such as the estimation story only after verifying it. Own the decision, explain when you informed affected people, what repair options you offered, and the process change that followed. A good answer includes the inconvenience you caused rather than editing it out.",
      "checks": [
        "Personal accountability and repair."
      ],
      "followups": [
        "What would the affected person say?",
        "Did you repeat it?"
      ],
      "story": "failure",
      "source": ""
    },
    {
      "id": "feedback",
      "category": "Self-awareness",
      "type": "Behavioral",
      "prompt": "What difficult feedback have you received?",
      "answer": "Supply one real piece of feedback, your initial reaction, the specific behavior you changed, and how you checked improvement. If you do not have the exact example ready, use your notes here to prepare it; do not substitute an invented manager quote.",
      "checks": [
        "Actual feedback, changed behavior, evidence."
      ],
      "followups": [
        "Which part was hardest to accept?",
        "What feedback do you still disagree with?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "wrong",
      "category": "Learning",
      "type": "Behavioral",
      "prompt": "Tell me about a time new evidence changed your mind.",
      "answer": "Choose a real decision where someone else’s evidence changed your approach. Explain your original assumption, the contrary evidence, and how you communicated the change. The best example is not a story where you were right all along.",
      "checks": [
        "Admit original error and credit the contribution."
      ],
      "followups": [
        "What made you trust the evidence?",
        "How did you prevent attachment to your first idea?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "mentor",
      "category": "Collaboration",
      "type": "Behavioral",
      "prompt": "How have you helped someone else grow?",
      "answer": "Use the intern list-screen example if real. Explain the person’s starting point, the questions and explanation you used, what you let them own, and how you knew they could apply the lesson independently.",
      "checks": [
        "Their growth, not your cleverness."
      ],
      "followups": [
        "What did you learn from them?",
        "What if they needed more time than you had?"
      ],
      "story": "mentor",
      "source": ""
    },
    {
      "id": "inclusion",
      "category": "Inclusion",
      "type": "Hypothetical",
      "prompt": "A quiet teammate is repeatedly talked over in design meetings. What would you do?",
      "answer": "I would make space in the meeting by inviting their view without putting them on the spot. I would check privately how they prefer to contribute, offer asynchronous review where useful, and suggest a more balanced discussion format. If the pattern continued, I would raise the impact with the facilitator or manager using specific observations.",
      "checks": [
        "Avoid speaking for the person or assuming why they are quiet."
      ],
      "followups": [
        "What if they prefer not to speak publicly?",
        "What if the interrupter is senior?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "different-style",
      "category": "Inclusion",
      "type": "Behavioral",
      "prompt": "Describe working with someone whose approach differed from yours.",
      "answer": "Pick an actual difference in communication or engineering approach, not an assumed trait based on someone’s identity. Explain how you understood their needs, adapted your approach, and reached a shared outcome. Include something you adopted from them.",
      "checks": [
        "Adaptation in both process and understanding."
      ],
      "followups": [
        "What did you still disagree about?",
        "How would you work together next time?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "deadline",
      "category": "Prioritization",
      "type": "Hypothetical",
      "prompt": "A deadline is fixed but you discover a serious bug. What do you do?",
      "answer": "I would assess severity, affected users, and whether the issue can be contained. I would communicate the risk promptly and offer options such as removing the affected feature, narrowing rollout, delaying release, or a well-tested fix. I would align with the accountable owner and avoid presenting an untested workaround as safe merely to meet the date.",
      "checks": [
        "Options, recommendation, decision owner."
      ],
      "followups": [
        "What if leadership insists on release?",
        "What evidence would allow you to proceed?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "burnout",
      "category": "Collaboration",
      "type": "Hypothetical",
      "prompt": "Your team is being asked to work late repeatedly to meet commitments. What would you do as an IC?",
      "answer": "I would understand whether there is a one-off incident or a recurring planning problem, then surface capacity and delivery risks with concrete examples. I would suggest scope cuts, ownership changes, or sequencing rather than assume overtime is the plan. During a genuine short incident I would help within my capacity and support a retrospective afterward.",
      "checks": [
        "Respect personal constraints; do not volunteer other people’s time."
      ],
      "followups": [
        "What if a teammate cannot stay late?",
        "What if management refuses to adjust scope?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "blocked",
      "category": "Ownership",
      "type": "Hypothetical",
      "prompt": "A dependent team has not delivered an API you need. How do you make progress?",
      "answer": "I would clarify the dependency, delivery risk, and their constraints directly. I would agree on the minimum contract, use a mock or adapter to make reversible progress, and communicate which milestones remain blocked. If the shared deadline is at risk, I would escalate the dependency and options rather than blame the other team.",
      "checks": [
        "Workable interim plan plus alignment."
      ],
      "followups": [
        "What if the contract keeps changing?",
        "When do you involve your manager?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "unpopular",
      "category": "Influence",
      "type": "Behavioral",
      "prompt": "Tell me about influencing a decision without authority.",
      "answer": "Use the Spotify or equalizer example. Explain why others had legitimate competing priorities, what evidence you brought, and how you invited input. State who made the final call and what you did after it.",
      "checks": [
        "Influence is not approval power."
      ],
      "followups": [
        "What if the decision went against you?",
        "How did you preserve trust?"
      ],
      "story": "conflict",
      "source": ""
    },
    {
      "id": "no-example",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What if you have never experienced the situation I am asking about?",
      "answer": "I have not faced that exact situation. The closest relevant experience is [real example], where [connection]. If it is useful, I can also explain how I would approach your scenario. Keep the distinction between past experience and proposed behavior explicit.",
      "checks": [
        "Ask whether a related example or hypothetical is preferred."
      ],
      "followups": [
        "Can you still give a concrete first step?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "ai-overview",
      "category": "AI",
      "type": "Behavioral",
      "prompt": "Explain the Alexa AI test project in plain English.",
      "answer": "We took test cases from the Amazon Alexa team and used an LLM to interpret their setup conditions. The runner checked the soundbar and tried to establish missing conditions through MCP tools, then ran voice commands such as “Alexa, play music.” We transcribed the spoken response with Whisper and checked device state changes before judging the result. Ambiguous results were reviewed manually. My exact personal scope was [complete this from your actual work].",
      "checks": [
        "Start with test workflow and user problem.",
        "Make personal ownership explicit."
      ],
      "followups": [
        "What did you own?",
        "What was the hardest judgment call?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-why",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "Why use an LLM instead of writing a deterministic test runner?",
      "answer": "The LLM was useful where test instructions or voice-command variants required language interpretation. Device actions and observable state checks should be as constrained and explicit as possible. I would compare that flexibility with structured test definitions, and use a deterministic path for cases that do not need language interpretation. Say which parts were actually deterministic in your implementation.",
      "checks": [
        "Acknowledge cost and complexity.",
        "Do not claim an LLM is necessary for every step."
      ],
      "followups": [
        "Could a parser and state machine do this?",
        "How would you decide whether to remove the LLM?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-precondition",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "The LLM says the preconditions are satisfied. Is that enough?",
      "answer": "No. A model statement and observed device state are different evidence. In the project we checked preconditions and used soundbar-side MCP tools to attempt setup. For a robust extension I would require observed postconditions after setup and mark the case blocked or inconclusive if they cannot be established. Confirm whether those explicit statuses existed before presenting them as implemented.",
      "checks": [
        "Check current state, not just tool-call success."
      ],
      "followups": [
        "What if the device state is stale?",
        "How do you avoid an endless repair loop?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-evidence",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "Alexa says it is playing music, but the soundbar state has not changed. Pass or fail?",
      "answer": "I would not pass based on speech alone. I would inspect the expected behavior, the baseline state, the timing of observations, and the relevant state transition. It may be an actual integration failure or insufficient evidence—for example a stale observation. I would use manual review for ambiguous outcomes rather than let the LLM convert conflicting evidence into a confident pass.",
      "checks": [
        "Separate product failure, setup failure, and observation failure."
      ],
      "followups": [
        "What if state changes but Whisper hears an error?",
        "What evidence would settle it?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-whisper",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "How can transcription make your test verdict unreliable?",
      "answer": "The transcript is an interpretation of audio and can be wrong or incomplete. I would compare it with the audio when uncertain and with device-state evidence for the expected action. To evaluate the transcription stage separately, I would use human-labeled audio, measure word error rate, and inspect whether errors change the test’s semantic meaning. Those evaluation metrics are proposed unless you actually collected them.",
      "checks": [
        "Whisper is ASR, not a device-success detector."
      ],
      "followups": [
        "How do you handle silence or background music?",
        "Why might a low WER still produce the wrong verdict?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-evaluation",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "What would you measure to trust an LLM-based test judge?",
      "answer": "I would build a held-out set labeled by reviewers, including passes, known failures, setup errors, and ambiguous cases. I would measure false passes, false failures, review rate, and repeatability across comparable runs. False passes deserve particular attention because defects could escape. Report your actual measurements if available; do not invent an accuracy or time-saving number.",
      "checks": [
        "Define denominator, labels, and review policy."
      ],
      "followups": [
        "How do you avoid evaluating on examples in the prompt?",
        "Who resolves reviewer disagreement?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-safety",
      "category": "AI",
      "type": "Hypothetical",
      "prompt": "How would you stop the agent from taking unsafe or irrelevant MCP actions?",
      "answer": "I would expose only approved test-device operations, validate tool arguments outside the LLM, bound setup attempts, and require explicit permission for destructive actions. I would keep test instructions separate from system rules and preserve logs for review. These are design recommendations, not claims about safeguards already implemented.",
      "checks": [
        "MCP alone does not provide application-level authorization."
      ],
      "followups": [
        "What if a test case asks the agent to ignore its rules?",
        "What if the tool reports success but does something else?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-privacy",
      "category": "Ethics",
      "type": "Hypothetical",
      "prompt": "Can you send internal Alexa test cases and recordings to any hosted LLM?",
      "answer": "I would check the approved environment and data policy before sharing test specifications, device identifiers, recordings, or credentials. I would minimize and redact inputs where possible and use approved models and retention settings. I would pause and ask the responsible security or data owner if the permitted use was unclear. Do not claim an approval process or local deployment you did not have.",
      "checks": [
        "Internal data approval and least necessary disclosure."
      ],
      "followups": [
        "What if a deadline makes approval slow?",
        "What would you log without exposing sensitive data?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-model-change",
      "category": "AI",
      "type": "Hypothetical",
      "prompt": "A model update changes your test results. How do you investigate?",
      "answer": "I would compare runs with the same test inputs, device state, firmware, and recorded evidence where possible. I would isolate transcription, planning, tool execution, and judging changes rather than blame the model immediately. I would propose versioned prompts/models and a regression set, then gate the update on the error types that matter.",
      "checks": [
        "Control confounders; versioned evidence."
      ],
      "followups": [
        "What if the provider cannot pin the model?",
        "When would you roll back?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-result",
      "category": "AI",
      "type": "Behavioral",
      "prompt": "What was the project’s impact?",
      "answer": "The concrete result I can describe is an end-to-end workflow that interpreted tests, attempted setup through MCP, executed utterances, and combined transcripts with state evidence for judgments. I do not have a verified quantitative outcome prepared. Before the interview, identify the actual users, adoption, number of evaluated cases, and one measured comparison if you have it.",
      "checks": [
        "Operational result is better than invented percentages."
      ],
      "followups": [
        "Was it a prototype or production system?",
        "What did the team decide after the trial?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-team",
      "category": "Collaboration",
      "type": "Behavioral",
      "prompt": "Who did you collaborate with on the Alexa project, and what changed because of their feedback?",
      "answer": "Explain the actual people and ownership: test-spec provider, your team, firmware/device-tool owners, QA, or reviewers only if they were involved. Describe one real feedback loop and a change it caused. The current facts identify Amazon Alexa test cases but do not establish direct collaboration with the Amazon team.",
      "checks": [
        "Do not imply partnership or leadership you did not have."
      ],
      "followups": [
        "What exactly was yours?",
        "Where did you disagree?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-failure",
      "category": "Failure",
      "type": "Behavioral",
      "prompt": "Describe a real failure in the AI test system.",
      "answer": "Prepare one actual run: intended behavior, initial state, tool actions, transcript, device evidence, first verdict, and corrected diagnosis. Explain what you changed afterward. The “spoken success without state change” example on this site is a hypothetical drill unless you personally observed it.",
      "checks": [
        "A real incident, not a hypothetical retold as history."
      ],
      "followups": [
        "Who caught it?",
        "What prevented recurrence?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "ai-limits",
      "category": "Learning",
      "type": "Direct",
      "prompt": "What should AI not decide in this workflow?",
      "answer": "I would avoid letting an unsupported model opinion override observed device evidence or authorize arbitrary device changes. Language interpretation can help plan and assess a test, but ambiguous evidence should remain reviewable. The accountable engineer needs to understand why a case passed, failed, or could not be assessed.",
      "checks": [
        "State the boundary and why it matters."
      ],
      "followups": [
        "Can manual review become the bottleneck?",
        "When is deterministic evaluation enough?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "launch-quality",
      "category": "Ethics",
      "type": "Hypothetical",
      "prompt": "Your manager asks you to hide a flaky failure so a release looks healthy. What do you do?",
      "answer": "I would clarify whether they mean classifying a known test-infrastructure issue or suppressing a real product defect. I would preserve evidence, document the distinction, and propose a transparent release-risk decision. I would not relabel a real failure as a pass. If pressure continued, I would use the appropriate engineering or integrity escalation path.",
      "checks": [
        "Clarify intent without normalizing falsification."
      ],
      "followups": [
        "What if everyone says the test is unreliable?",
        "What would you put in the release report?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "mistake-production",
      "category": "Ownership",
      "type": "Hypothetical",
      "prompt": "You introduced a production issue. What are your first steps?",
      "answer": "I would surface the issue immediately, help assess user impact, and work with the incident owner on containment or rollback. I would preserve useful evidence, communicate progress without speculation, and prioritize recovery over defending my change. Afterward I would help identify contributing conditions and improve tests or rollout controls.",
      "checks": [
        "Containment, communication, learning."
      ],
      "followups": [
        "What if the rollback is risky?",
        "How do you avoid blame in the retrospective?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "unfamiliar",
      "category": "Ambiguity",
      "type": "Hypothetical",
      "prompt": "You are assigned a project in a codebase you do not understand. What would you do first?",
      "answer": "I would clarify the user goal, constraints, success criteria, and deadline. I would trace one representative flow, read relevant tests and design notes, and ask targeted questions of maintainers. I would propose a small end-to-end milestone and surface unknowns before making a broad estimate.",
      "checks": [
        "Investigate enough to act; do not wait for perfect knowledge."
      ],
      "followups": [
        "What if no maintainer is available?",
        "What do you promise in the first week?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "ask-help",
      "category": "Learning",
      "type": "Direct",
      "prompt": "When do you ask for help rather than keep trying?",
      "answer": "I time-box investigation based on urgency, write down what I tried, and ask when I am blocked on missing context or making little progress. For a production issue, I ask sooner because user impact matters more than solving it alone. I make the question specific so helping me is efficient.",
      "checks": [
        "Judgment about urgency and uncertainty."
      ],
      "followups": [
        "How do you avoid interrupting teammates constantly?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "compromise",
      "category": "Conflict",
      "type": "Hypothetical",
      "prompt": "The team chooses an approach you think is weaker. What now?",
      "answer": "I would ensure my concerns and evidence are understood, ask what constraints drove the choice, and check for unresolved serious risks. For a reasonable and reversible decision, I would support implementation and agree on signals for revisiting it. I would not undermine the decision or treat every preference as a principle.",
      "checks": [
        "Commitment with a clear revisit criterion."
      ],
      "followups": [
        "What if the outcome later proves you right?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "accessibility",
      "category": "Users",
      "type": "Hypothetical",
      "prompt": "An accessibility issue affects a small user group but the roadmap is full. How do you respond?",
      "answer": "I would understand the barrier and severity with affected users or accessibility specialists, then compare user harm and obligations rather than only count users. I would propose an immediate mitigation and a scoped fix, make the trade-off visible to owners, and validate with the people affected.",
      "checks": [
        "Avoid treating low volume as low importance."
      ],
      "followups": [
        "What if the fix delays a large launch?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "new-joiner",
      "category": "Inclusion",
      "type": "Hypothetical",
      "prompt": "A new teammate keeps asking basic questions during a deadline. What do you do?",
      "answer": "I would give enough context to unblock them, then agree on focused check-ins and point them to reliable examples or documentation. I would ask what onboarding context is missing and help divide tasks by readiness. I would not assume repeated questions mean they are incapable.",
      "checks": [
        "Empathy plus sustainable boundaries."
      ],
      "followups": [
        "How do you protect your own delivery?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "scope",
      "category": "Prioritization",
      "type": "Hypothetical",
      "prompt": "A stakeholder adds a feature halfway through delivery. What do you say?",
      "answer": "I would clarify the user need and urgency, estimate the impact on the current plan, and offer choices: replace existing scope, phase the feature, or revise the date. I would agree on the change with the decision owner and communicate it to affected dependencies.",
      "checks": [
        "No automatic yes or dismissive no."
      ],
      "followups": [
        "What if they say it is a tiny change?"
      ],
      "story": "spotify",
      "source": ""
    },
    {
      "id": "ownership-boundary",
      "category": "Ownership",
      "type": "Behavioral",
      "prompt": "Tell me about work you took on outside your responsibilities.",
      "answer": "Choose a real issue where you helped because users or the team were blocked. Explain how you aligned with the owner, avoided creating conflicting changes, delivered a fix, and handed back knowledge. The legacy Bluetooth-crash story needs technical and factual verification before use.",
      "checks": [
        "Ownership includes coordination, not just jumping in."
      ],
      "followups": [
        "What happened to your assigned work?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "team-success",
      "category": "Collaboration",
      "type": "Direct",
      "prompt": "How do you balance personal recognition with team success?",
      "answer": "I make my own contributions clear without claiming the team’s work as mine. In a review or demo I explain who provided the idea, who implemented each part, and what we achieved together. If recognition seems unfair, I address it factually rather than withhold help from the team.",
      "checks": [
        "Specific attribution and fair behavior."
      ],
      "followups": [
        "What if that hurts your promotion case?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "five-years",
      "category": "Motivation",
      "type": "Direct",
      "prompt": "Where do you want to grow over the next few years?",
      "answer": "I want to become stronger at owning Android features from unclear requirements through architecture, implementation, and reliable delivery. I also want to improve how I explain trade-offs, mentor others, and evaluate AI-assisted systems with evidence. I am interested in increasing technical scope rather than choosing a title before understanding the work.",
      "checks": [
        "Personalize; this is a draft, not your confirmed aspiration."
      ],
      "followups": [
        "What are you doing now to get there?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "plan-fails",
      "category": "Ambiguity",
      "type": "Hypothetical",
      "prompt": "You followed the agreed plan, but results are poor. What next?",
      "answer": "I would compare the outcome with the original success criteria, check our assumptions and measurements, and gather feedback from affected users or partners. I would propose the smallest useful adjustment, explain the trade-offs, and agree on when to reassess. I would separate a reasonable decision under uncertainty from a failure to respond to new evidence.",
      "checks": [
        "Learning, not defending sunk cost."
      ],
      "followups": [
        "When would you abandon the project?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "remote",
      "category": "Collaboration",
      "type": "Hypothetical",
      "prompt": "A teammate in another time zone is blocking a decision. What do you do?",
      "answer": "I would send a concise decision note with context, options, recommendation, and a clear response deadline. I would distinguish reversible steps I can take now from decisions needing their input and agree on a backup decision owner if urgent. Afterward I would improve the handoff so the same gap does not recur.",
      "checks": [
        "Respect time zones and make async input easy."
      ],
      "followups": [
        "What if silence continues?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "humility",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "How do you know when you are wrong?",
      "answer": "I look for evidence that contradicts my assumptions, ask others to critique the proposed approach, and define success criteria before seeing the result. When data or feedback changes the picture, I explain what changed and update the plan. Prepare one actual example where this happened.",
      "checks": [
        "Evidence and a real example."
      ],
      "followups": [
        "When did you last say “I was wrong”?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "unclear-question",
      "category": "Communication",
      "type": "Direct",
      "prompt": "What do you do when you do not understand an interview question?",
      "answer": "I would paraphrase the part I understand and ask one specific clarification. If there are several parts, I would name them and propose an order. I can state a reasonable assumption and proceed if the interviewer wants me to choose.",
      "checks": [
        "Clarify without stalling."
      ],
      "followups": [
        "How would you recover if you answered the wrong part?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "multi-conflict",
      "category": "Conflict",
      "type": "Multi-part",
      "prompt": "Tell me about a disagreement, how you handled it, what happened to the relationship, and what you would do differently.",
      "answer": "First name the four parts: disagreement, action, relationship, and reflection. Use the equalizer story if authentic. Give the other view fairly, describe your demonstration and discussion, state the actual relationship outcome, then one improvement to your approach. Do not spend the entire answer on the technical fix.",
      "checks": [
        "Address all four parts explicitly.",
        "Leave room for the interviewer to redirect."
      ],
      "followups": [
        "What would the other person say?",
        "How did you know the relationship was okay?"
      ],
      "story": "conflict",
      "source": ""
    },
    {
      "id": "multi-manager",
      "category": "Collaboration",
      "type": "Multi-part",
      "prompt": "What do you expect from a manager, what if you disagree, how would you manage a team yourself, and would you ask people to work late?",
      "answer": "I hear four parts. I value clear priorities and feedback; with disagreement I bring options and evidence; if managing hypothetically I would set context and help remove blockers; for overtime I would first adjust scope and capacity, treating exceptional incidents differently from recurring planning failures. I have not been a people manager, so that part is how I would approach it.",
      "checks": [
        "Do not turn a hypothetical manager answer into false experience."
      ],
      "followups": [
        "What if leadership still demands the same deadline?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "multi-priority",
      "category": "Prioritization",
      "type": "Multi-part",
      "prompt": "You have a release, an urgent bug, and a teammate asking for help. What comes first, whom do you tell, and what if your manager disagrees?",
      "answer": "I would first triage the bug’s user impact and urgency rather than assume every bug outranks the release. I would then propose a priority order, an owner for each task, and an explicit change to commitments. I would tell affected owners and my manager early, explain the evidence if challenged, and use the accountable decision owner for unresolved trade-offs.",
      "checks": [
        "Impact → plan → communication → disagreement."
      ],
      "followups": [
        "What is your first action in ten minutes?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "multi-ai",
      "category": "AI",
      "type": "Multi-part",
      "prompt": "Why did you use an LLM, what did you build yourself, how did you evaluate it, what went wrong, and what would you change?",
      "answer": "Map the five parts before answering. Explain language interpretation versus deterministic execution; state your actual component ownership; describe the known-case and manual-review checks; give one real failure; then distinguish a future improvement from what shipped. If you lack a measured outcome, say so rather than fill it with a guessed number.",
      "checks": [
        "All five clauses; no invented failure or metric."
      ],
      "followups": [
        "Could the same model be planner and judge?",
        "How would you isolate the stages?"
      ],
      "story": "alexa",
      "source": ""
    },
    {
      "id": "multi-failure",
      "category": "Failure",
      "type": "Multi-part",
      "prompt": "Describe a failure, how you told stakeholders, what you learned, and what you would do if it happened again.",
      "answer": "Use a real failure with a specific consequence. Give the mistake briefly, quote or paraphrase your actual communication accurately, explain a changed habit, and describe the first corrective action you would now take. Keep past behavior separate from the improved hypothetical.",
      "checks": [
        "Failure → communication → learning → future response."
      ],
      "followups": [
        "What did you do before the deadline?"
      ],
      "story": "failure",
      "source": ""
    },
    {
      "id": "multi-community",
      "category": "Ethics",
      "type": "Multi-part",
      "prompt": "Should a company prioritize profit, users, employees, or its community? Who decides, and what would you do if you disagree?",
      "answer": "I would reject a fixed ranking without understanding the decision and potential harms. Legal, safety, and integrity constraints are not just optional trade-offs. For other choices I would gather affected perspectives, compare long- and short-term outcomes, and make the reasoning visible to the responsible decision maker. As an IC I would surface evidence and use appropriate escalation for serious harm.",
      "checks": [
        "A nuanced view with an actionable process."
      ],
      "followups": [
        "Give a concrete example of a legitimate trade-off."
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "multi-new-team",
      "category": "Ambiguity",
      "type": "Multi-part",
      "prompt": "You join a team, inherit an unclear project, find an architectural problem, and have two weeks. What do you do first, what do you defer, and how do you get buy-in?",
      "answer": "First clarify the user outcome and the two-week commitment. Trace the critical flow and test whether the architectural issue prevents safe delivery or is future debt. Propose a narrow deliverable with explicit risks and deferred work, get feedback from maintainers, and agree on a revisit plan rather than announce a rewrite.",
      "checks": [
        "Sequence actions and explain deferrals."
      ],
      "followups": [
        "What if maintainers say the old design is fine?"
      ],
      "story": "",
      "source": ""
    },
    {
      "id": "multi-inclusion",
      "category": "Inclusion",
      "type": "Multi-part",
      "prompt": "A teammate is excluded, quality is falling, and the deadline is near. How do you help, protect delivery, and know your approach worked?",
      "answer": "Check privately what support the teammate needs and understand the work problem without linking it automatically to identity or capability. Make participation easier, agree on a manageable division of work and review points, and surface delivery risks with options. Check both the work outcome and whether the person feels able to contribute; do not declare inclusion successful just because the deadline was met.",
      "checks": [
        "Person, delivery, feedback loop."
      ],
      "followups": [
        "What if they do not want your intervention?"
      ],
      "story": "",
      "source": ""
    }
  ],
  "bundles": [
    {
      "title": "Conflict without a script",
      "ids": [
        "multi-conflict",
        "credit",
        "compromise"
      ]
    },
    {
      "title": "AI project under pressure",
      "ids": [
        "multi-ai",
        "ai-evidence",
        "ai-evaluation",
        "ai-safety"
      ]
    },
    {
      "title": "Priorities and uncertainty",
      "ids": [
        "multi-priority",
        "multi-new-team",
        "blocked"
      ]
    },
    {
      "title": "Leadership as an IC",
      "ids": [
        "multi-manager",
        "inclusion",
        "team-success"
      ]
    },
    {
      "title": "Beyond STAR",
      "ids": [
        "community",
        "success",
        "rejection",
        "humility"
      ]
    },
    {
      "title": "Accountability and learning",
      "ids": [
        "multi-failure",
        "feedback",
        "wrong"
      ]
    }
  ],
  "checklist": [
    [
      "facts",
      "Confirm your facts",
      "Confirm exact Alexa ownership, input format, tools/model, one real failure, and operational outcome. Reconcile old metrics before rehearsing them."
    ],
    [
      "intro",
      "Record your introduction",
      "Deliver a natural 45–60-second intro and a specific, positive reason for Google."
    ],
    [
      "stories",
      "Rehearse six varied stories",
      "Cover disagreement, ambiguity, failure, mentoring, user impact, and learning. Use more than the AI project."
    ],
    [
      "hypothetical",
      "Practice scenarios",
      "Answer credit-taking, deadline risk, inclusion, privacy, and conflicting priorities without forcing a past story."
    ],
    [
      "multipart",
      "Answer multi-part prompts",
      "Write 3–5 cue words, repeat the parts, answer in order, and check you covered each clause."
    ],
    [
      "ai",
      "Defend the Alexa design",
      "Explain the runner in 60 seconds, then handle transcription/state disagreement, false passes, setup failure, and MCP boundaries."
    ],
    [
      "mock",
      "Run two timed mocks",
      "Try one broad mock and one AI-heavy mock. Score clarity, ownership, judgment, collaboration, and reflection."
    ],
    [
      "questions",
      "Prepare questions for the interviewer",
      "Choose three questions about scope, decision making, feedback, and what success looks like on their team."
    ]
  ]
};
