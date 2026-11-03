window.PREP_DATA = {
  "updated": "4 November 2026",
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
      "basis": "Complete rehearsal draft · shared Alexa project",
      "pitch": "I worked on an AI-assisted runner for Alexa integration tests on Samsung soundbars. I parsed test cases supplied by the Amazon Alexa team and passed them to an LLM to interpret and check the required preconditions. If those conditions were not met, the runner attempted to establish them through MCP tools on the soundbar side. It then executed utterances such as 'Alexa, play music,' transcribed the response with Whisper, and checked soundbar state changes before judging the result. Ambiguous outcomes required manual review, and the AI assessments were checked against known test cases. My contribution was connecting the written test instructions with the device-control and evidence-checking workflow; the core engineering judgment was to verify behavior rather than trust the model's wording alone.",
      "situation": "I worked on Alexa integration testing for Samsung soundbars using test cases supplied by the Amazon Alexa team. A valid test depended on setup conditions, the utterance, the spoken response, and what the soundbar actually did.",
      "task": "My task was to connect those written cases to an AI-assisted workflow that could check conditions, attempt setup, run the voice interaction, and collect evidence for the result.",
      "action": "I parsed the supplied test cases and passed them to an LLM to interpret and check preconditions. When conditions were unmet, the runner attempted to establish them through soundbar-side MCP tools. It then ran utterances such as “Alexa, play music,” used Whisper to transcribe the spoken response, and checked soundbar state changes before judging the case. We checked AI assessments against known cases and sent ambiguous outcomes for manual review.",
      "result": "The resulting workflow connected specification interpretation, setup, utterance execution, transcription, and device-state assessment. Its useful capability was that the judgment could be tied to device evidence and reviewed when uncertain, rather than be based only on a model-generated explanation.",
      "reflection": "I learned to separate a plausible interpretation from a verified action. Language understanding helps turn written instructions into a plan, but observed state and reviewable evidence are essential when judging whether that plan worked.",
      "probes": [
        "What did you personally implement, and what did teammates own?",
        "Why did the problem need an LLM rather than structured test scripts?",
        "Give one actual precondition, MCP action, observed response, and verdict.",
        "What happened when setup could not be established?",
        "What did you measure against a human-reviewed baseline?",
        "What did a reviewer disagree with, and what did you change?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "What did you personally implement, and what did teammates own?",
          "answer": "I worked on parsing the test cases and connecting the precondition, MCP, utterance, transcript, and state-assessment workflow. I distinguish my integration contribution from the underlying model and device capabilities."
        },
        {
          "question": "Why did the problem need an LLM rather than structured test scripts?",
          "answer": "The model helped interpret written cases and language variations. For already structured conditions and actions, I would keep deterministic execution rather than add model uncertainty unnecessarily."
        },
        {
          "question": "Give one actual precondition, MCP action, observed response, and verdict.",
          "answer": "An illustrative case starts with a playback precondition, uses an approved soundbar-side operation to attempt setup if needed, runs “Alexa, play music,” and compares the response and state transition with the expected behavior. It is a worked example of the workflow, not an asserted historical run."
        },
        {
          "question": "What happened when setup could not be established?",
          "answer": "I would stop treating the case as a valid product test when its setup cannot be established and send it for diagnosis or review. A setup failure should not quietly become a product failure or a pass."
        },
        {
          "question": "What did you measure against a human-reviewed baseline?",
          "answer": "The confirmed evaluation was checking AI assessments against known test cases and manually reviewing ambiguous results. A fuller evaluation would add held-out labels and track false passes, false failures, review rate, and repeatability."
        },
        {
          "question": "What did a reviewer disagree with, and what did you change?",
          "answer": "A useful review question is whether a spoken acknowledgment is sufficient evidence. My reasoning is to check it alongside the soundbar state and investigate conflicting signals, rather than assume the model can explain away a mismatch."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "My strongest contribution is connecting a user-visible problem to what is happening across the whole system, then turning that understanding into a practical solution. On the Samsung Sound App, a screen could look correct while individual soundbars were in different states. I worked on multi-device control for 12+ devices using Kotlin Coroutines, StateFlow, and a repository-based architecture so the application could represent independent device updates consistently. I also worked on the equalizer experience, where moving processing off the main thread and controlling UI updates mattered to responsiveness. What I bring to a team is that I do not stop at making my screen compile: I investigate the path from the user action to the actual device response, explain the trade-offs, and work with others to make the result dependable. My Alexa testing work uses the same approach—checking soundbar state alongside the spoken response instead of accepting a plausible answer as proof of success.",
      "situation": "In the Samsung Sound App, users needed to control multiple soundbars and speakers while the devices could change state independently. A responsive UI was useful only if it stayed consistent with the real devices.",
      "task": "I needed to support multi-device control and real-time state synchronization without making the UI unresponsive or scattering device logic across screens.",
      "action": "I worked in Kotlin with Coroutines and StateFlow to represent device updates reactively, using repositories and Clean Architecture to organize device state and application behavior. I implemented grouping and synchronized playback controls and worked on the Compose equalizer and voice-guide screens. I optimized coroutine dispatching so response processing did not unnecessarily block user interaction.",
      "result": "The implementation supported control of 12+ soundbars and speakers, and the resume records device response latency under 100 ms for the equalizer work. The practical outcome was a maintainable structure for updating the UI from changing device state.",
      "reflection": "I learned that multi-device features need a deliberate state model, not just more screens or parallel calls. I also distinguish device execution latency from any application-side wait before sending a command.",
      "probes": [
        "What was your decision versus an existing team decision?",
        "How did you measure latency and define the start/end timestamps?",
        "How do you isolate one offline device?",
        "Who disagreed and what did you learn?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "What was your decision versus an existing team decision?",
          "answer": "My contributions included Kotlin control logic, reactive state management, grouping and playback behavior, and Compose configuration screens. I would separate those implementation decisions from the broader product direction and existing device protocols."
        },
        {
          "question": "How did you measure latency and define the start/end timestamps?",
          "answer": "I distinguish application waiting, command dispatch, and the measured device response interval. The resume’s under-100-ms figure refers to the equalizer device-response work; I would not present it as the total time including any debounce wait."
        },
        {
          "question": "How do you isolate one offline device?",
          "answer": "I would keep each device’s connectivity and state handling independent, represent an offline device explicitly, and avoid letting one failure cancel useful work for all devices. Retry behavior should have bounds and remain visible to the UI."
        },
        {
          "question": "Who disagreed and what did you learn?",
          "answer": "The equalizer discussion illustrates the competing concern: immediate feedback versus command flooding. It taught me to show the behavior and agree on a shared definition of responsiveness rather than assume the performance argument alone settles the decision."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "At Samsung, I received a request for Spotify integration without a clear definition of what integration meant. It could mean simply opening Spotify, opening the song currently playing on the soundbar, or building broader two-way control. Instead of selecting the most elaborate interpretation, I investigated the available device metadata and Android deep-linking options. I wrote down three options with their user value, effort, and dependencies, then discussed them with my tech lead and team. We chose a scoped deep-link experience that could open the relevant track when metadata was available and fall back sensibly when it was not. I then implemented the agreed behavior. The useful part of my contribution was reducing uncertainty early and making the trade-off understandable, rather than waiting for a perfect specification or building a large feature on assumptions.",
      "situation": "At Samsung, the request for Spotify integration did not initially make clear whether the goal was app launching, current-track deep linking, or broader playback control.",
      "task": "I needed to clarify the user value and scope before turning an ambiguous request into a delivery commitment.",
      "action": "I investigated what device metadata and Android integration mechanisms made possible. I compared the options in terms of user experience, effort, and dependencies and discussed them with my tech lead and team. We selected a scoped deep-link flow, including fallback behavior when the current track could not be identified, and I implemented the agreed path.",
      "result": "We turned an open-ended integration request into a defined Android feature that could be implemented and tested. The resume confirms Spotify and Alexa deep-link integration using Android Intents and OAuth2.",
      "reflection": "I learned to reduce ambiguity by presenting concrete options with trade-offs, rather than ask stakeholders to write a perfect specification or quietly choose the largest interpretation myself.",
      "probes": [
        "What did product or QA contribute?",
        "What did you intentionally leave out?",
        "What if stakeholders still could not agree?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "What did product or QA contribute?",
          "answer": "The key stakeholder contribution was agreeing what user interaction the integration should support. I brought feasible options; the team and tech lead aligned on scope rather than leave that product decision implicit in my code."
        },
        {
          "question": "What did you intentionally leave out?",
          "answer": "We left broader two-way control out of the selected scope because it introduced additional dependencies beyond a focused deep-link experience. Defining that boundary made delivery and testing more manageable."
        },
        {
          "question": "What if stakeholders still could not agree?",
          "answer": "I would recommend the smallest useful reversible path, record its assumptions, and ask the accountable owner for a decision by a clear time. I could prototype uncertainty without silently commit the team to a larger feature."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "On the Samsung Sound App's equalizer screen, we discussed sending a command on every slider movement so users could hear changes immediately. I understood the motivation, but I was concerned that rapid movements would create a backlog and leave the device behind the displayed value. I demonstrated the behavior on a test device rather than argue only from theory, and proposed separating immediate visual feedback from command delivery so the final intended setting would reach the soundbar reliably. I walked through the trade-off with my tech lead, listened to the responsiveness concern, and we agreed on a coalesced command approach. The discussion stayed focused on the shared goal of a responsive, correct experience. My takeaway was that a concrete demonstration and a common success criterion are more effective than framing a disagreement as one engineer winning.",
      "situation": "The equalizer needed to feel immediate while sending settings to a physical soundbar. Sending every slider movement directly was attractive for feedback, but rapid changes could create command backlogs.",
      "task": "I wanted a design that kept the displayed value and final device setting aligned while respecting the concern about responsive feedback.",
      "action": "I demonstrated the device behavior and explained why a command backlog could make the UI and soundbar disagree. I proposed separating visual updates from command delivery and discussed the trade-off with my tech lead. The existing design example used a debounce/coalescing approach so intermediate movements did not all become queued device commands.",
      "result": "We agreed on an approach focused on responsive UI feedback and reliable final device settings. The distinction mattered: a command-dispatch debounce wait and the device response time are separate parts of the user-visible latency.",
      "reflection": "I learned to explain the other view fairly, bring a reproducible example, and define success together. I would agree on those success criteria earlier in a similar discussion.",
      "probes": [
        "When was your colleague right?",
        "What would you do if the team rejected your proposal?",
        "How would you preserve audible feedback during continuous dragging?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "When was your colleague right?",
          "answer": "The concern about immediate feedback was legitimate. Even if I favored controlling command volume, the solution still had to preserve a responsive interaction rather than simply send fewer commands."
        },
        {
          "question": "What would you do if the team rejected your proposal?",
          "answer": "I would support a reasonable team decision after making the risk visible, and agree on evidence that would justify revisiting it. I would not undermine the decision or implement a different design secretly."
        },
        {
          "question": "How would you preserve audible feedback during continuous dragging?",
          "answer": "I would compare a throttle/coalescing approach with a pure debounce, because continuous dragging can postpone a debounced command indefinitely. The right choice depends on the desired audible feedback and device capacity."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "During my Samsung internship, I improved attachment upload performance using Kotlin Coroutines and image compression. The average upload time improvement recorded in my resume is 30%. I approached the problem across preparation and transfer rather than assume every delay was caused by the network.",
      "situation": "The attachment upload module in an internal Android tool was slow, and image preparation was part of the user’s wait.",
      "task": "I needed to make uploads faster while retaining usable image quality and avoiding heavy work on the UI thread.",
      "action": "I optimized the image-compression pipeline and used Coroutines to organize asynchronous processing. I considered the work needed before a request was sent as well as the transfer itself, and checked that the resulting images were still suitable for the tool’s purpose.",
      "result": "My resume records a 30% reduction in average upload time. I use that consistent figure rather than combine it with the different baseline and larger improvement quoted in the archived page.",
      "reflection": "The lesson was to break a slow workflow into measurable stages. Optimizing a visible network operation can require fixing how data is prepared and how the work is scheduled.",
      "probes": [
        "How did you define average upload time?",
        "What did you learn from a failed experiment?",
        "Did compression affect users on low-end phones?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "How did you define average upload time?",
          "answer": "I would define the interval consistently, use comparable inputs and network conditions, and measure enough runs to avoid explaining a single fast upload as a general improvement. The resume’s reported result is a 30% average reduction."
        },
        {
          "question": "What did you learn from a failed experiment?",
          "answer": "The useful learning was that network-facing slowness can originate in preparation and main-thread work. I would inspect both stages before choosing a more complex transfer mechanism."
        },
        {
          "question": "Did compression affect users on low-end phones?",
          "answer": "Compression and decoding can create CPU and memory pressure, so I would check image sizes and representative devices. Making the output smaller should not introduce a worse preparation delay or visible quality problem."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "For my Mi Band 5 Watch Faces app, I had to make product decisions as well as write Android code. I wanted users to browse and find watch faces without loading the entire catalog or repeatedly downloading the same images. I used Paging 3 for incremental loading and image caching for repeat visits, and expanded the app into seven languages to make it usable to more people. These choices addressed the core experience before adding complexity for its own sake. The app reached 100K+ downloads, and my resume records improvements in engagement and retention alongside these changes. I treat those as observed product improvements rather than claiming a controlled experiment proved that one feature caused every change. The lesson for me is to start with what users are trying to accomplish and make the common path reliable and accessible.",
      "situation": "I launched and maintain Mi Band 5 Watch Faces as a consumer Android app. I had to make architecture and product choices that I could sustain as the person maintaining the application.",
      "task": "I wanted users to find useful watch faces, browse efficiently, and use the app in more languages, while keeping the system maintainable.",
      "action": "I used Kotlin, Jetpack Compose, MVVM, Retrofit, Room, and Dagger Hilt. I integrated Paging 3 for paginated content, image caching, Firebase Cloud Messaging, AdMob, and Google Play Billing, and localized the app into seven languages. I treated content discovery and reliable common flows as core product concerns rather than only implementation tasks.",
      "result": "The app reached 100K+ downloads. My resume records engagement growth of 30%, ad revenue growth of 25%, and retention improvement of 40% alongside the product changes. I distinguish those observations from claiming that a controlled experiment established the exact contribution of each feature.",
      "reflection": "I learned that product ownership includes choosing what not to add, maintaining the experience after release, and considering users whose needs do not appear clearly in a single analytics metric.",
      "probes": [
        "What user feedback changed your plan?",
        "How did you handle a dissatisfied user?",
        "What did you stop doing?",
        "What would you improve with another engineer?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "What user feedback changed your plan?",
          "answer": "The app’s purpose is helping people find and use watch faces, so content discovery and repeated browsing are central to my prioritization. I would combine usage data with reviews rather than assume a requested feature represents every user."
        },
        {
          "question": "How did you handle a dissatisfied user?",
          "answer": "I would understand the specific failed flow, reproduce it where possible, explain the next step clearly, and close the loop when fixed. I would avoid arguing with a user because the behavior worked on my own device."
        },
        {
          "question": "What did you stop doing?",
          "answer": "I would defer features that add maintenance cost without improving the core browsing, download, or purchase experience. A smaller reliable product is preferable to a larger set of unfinished paths."
        },
        {
          "question": "What would you improve with another engineer?",
          "answer": "I would first divide ownership around a clear user flow and agree on interfaces, testing, and release review. I would use the additional capacity for a known bottleneck rather than immediately expand the roadmap."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "In a freelance Android prototype, I underestimated a flash-sale feature because I focused on the timer rather than the state changes when the timer ended. That meant the client had planned a demo around an estimate that was too optimistic. Once I understood the dependency on cart and checkout behavior, I explained the mistake early, gave a revised plan, and worked through the expiry behavior across the affected screens. I took responsibility for the estimate instead of presenting the additional work as the client's fault. The main change afterward was to include lifecycle boundaries and dependent flows in my estimates. It taught me that an estimate is a communication commitment, not just a guess about how long the obvious code will take.",
      "situation": "In the freelance flash-sale prototype from my original story bank, I initially estimated the timer and discounted display without fully accounting for what happened when the sale expired.",
      "task": "I needed to deliver coherent behavior across browsing, cart, and checkout, while communicating honestly about the gap in my estimate.",
      "action": "Once I understood the cross-screen dependency, I told the client what I had missed and revised the plan. I worked through the expiry behavior so affected flows would refresh their state, and took responsibility for estimating the visible feature instead of its lifecycle boundaries.",
      "result": "The work took longer than originally estimated and affected the planned demo. The useful outcome was not that the slip disappeared; it was that I surfaced it early enough to discuss the plan and changed my estimation approach.",
      "reflection": "I now map how a feature starts, ends, fails, and affects other flows before committing. When a date is fixed, I would also offer a smaller clearly defined scope instead of assume extra complexity can be absorbed.",
      "probes": [
        "What did you say in the difficult conversation?",
        "What did you offer to cut?",
        "What evidence shows your estimation process improved?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "What did you say in the difficult conversation?",
          "answer": "I explained that I had underestimated the expiry behavior, identified the affected cart and checkout flows, and gave a revised plan. I would avoid quoting an exact conversation as if I had a recording of it."
        },
        {
          "question": "What did you offer to cut?",
          "answer": "With a fixed demo date, I would offer a reduced feature that has explicit boundaries, or keep the risky flow out of the demonstration. The client should be able to choose with the limitation visible."
        },
        {
          "question": "What evidence shows your estimation process improved?",
          "answer": "The changed behavior is to map lifecycle boundaries and dependencies before a firm estimate and investigate uncertain parts early. I would show that process in the next scoped design rather than claim that I never miss an estimate now."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "A junior intern was working on a QR-result list that updated more of the screen than necessary. Rather than rewrite the feature myself, I helped them observe the redraw behavior and connect it to how list updates were being applied. I explained the principle of comparing changes and updating only affected items, then let them work through the implementation. In review, I explained why the comments mattered instead of only naming the API I preferred. The improvement was a smoother list and, more importantly, a teammate who understood the cause and could apply the idea again. It reminded me that mentoring is successful when the other person becomes more independent, not when I solve the task fastest.",
      "situation": "The original story bank describes helping a junior intern improve a QR-results list that redrew too much of the screen when data changed.",
      "task": "I wanted to help the intern understand and fix the issue while preserving their ownership of the work.",
      "action": "I helped make the redraw behavior visible, explained why only changed items should need an update, and let them work through the implementation. In review I focused on the reason behind the recommendation rather than give a list of unexplained changes.",
      "result": "The list behavior improved, and the mentoring approach gave the intern a way to diagnose similar update problems independently. I focus on that learning outcome rather than invent a feedback quote or unsupported performance percentage.",
      "reflection": "I learned that asking questions and showing behavior can transfer understanding more effectively than taking over the implementation. I also became more aware of the context I need to explain in reviews.",
      "probes": [
        "How did you balance coaching with your deadline?",
        "What if they rejected the feedback?",
        "What did you learn from them?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "How did you balance coaching with your deadline?",
          "answer": "I would time-box focused coaching, choose the concept that unblocks the task, and make any delivery trade-off visible. Helping a junior should not mean silently abandon my own commitments."
        },
        {
          "question": "What if they rejected the feedback?",
          "answer": "I would ask them to explain their reasoning and use observable behavior or a small experiment to compare approaches. If their implementation meets the shared criteria, I should not reject it merely because it differs from mine."
        },
        {
          "question": "What did you learn from them?",
          "answer": "It reminded me how much context can be hidden behind an API recommendation. Explaining the reason for a review comment improves my own clarity as well as the other person’s understanding."
        }
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
      "basis": "Complete rehearsal draft · resume and existing story bank",
      "pitch": "I learned to treat reliable Android background work as a persistence and scheduling problem rather than assume an app will get one final opportunity to run code when it closes. That changed how I thought about session analytics and process termination.",
      "situation": "The original story bank describes session analytics that could be lost when the Android process was terminated before a network operation completed.",
      "task": "I needed a design that did not depend on an app-close callback or an in-memory request surviving process termination.",
      "action": "I investigated Android process behavior and used a persist-first approach with WorkManager for deferred delivery. The important design requirement is to store events and enqueue the needed work while the process can still act, then let persisted scheduling and network constraints govern delivery.",
      "result": "The revised approach addressed the lifecycle weakness by making delivery work persistent rather than leave it only in memory. I do not rely on an unverified delivery percentage to explain why the design is stronger.",
      "reflection": "I learned to reproduce platform-level failure conditions and design around the actual lifecycle guarantees. I also think about duplicate delivery and server-side event handling when retries are possible.",
      "probes": [
        "How did you know the problem was on the client?",
        "What guarantees did WorkManager actually provide?",
        "What happens with duplicate events?"
      ],
      "verify": [
        "The answer is a complete rehearsal draft built from the resume, shared project details, and the existing story bank.",
        "Any inferred conversation, motivation, or design extension is practice material rather than a newly verified event."
      ],
      "probeAnswers": [
        {
          "question": "How did you know the problem was on the client?",
          "answer": "I would compare client-created events with received events and reproduce process termination during in-flight work. That separates a client delivery gap from an assumption that the server lost the data."
        },
        {
          "question": "What guarantees did WorkManager actually provide?",
          "answer": "Persisted deferred work is stronger than an in-memory request, but it is not an immediate-execution guarantee and should not be described as a callback after process death. The work needs to be persisted and scheduled before termination can prevent it."
        },
        {
          "question": "What happens with duplicate events?",
          "answer": "I would use stable event identifiers and idempotent handling so a retried send does not become a duplicate business event. I would also minimize session data and keep it within the appropriate retention and access rules."
        }
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Which project best shows your ownership?",
          "answer": "My watch-face app shows end-to-end ownership most clearly: I launched and maintain the Android application, including architecture, content delivery, localization, notifications, and monetization. The Samsung work adds the experience of delivering within a team and integrating with real devices."
        },
        {
          "question": "What would be new for you at Google?",
          "answer": "I would need to learn the team’s product context, codebase, and decision processes. I would bring useful Android experience while treating that context as something to understand, rather than assume my previous architecture should transfer unchanged."
        }
      ]
    },
    {
      "id": "why-google",
      "category": "Motivation",
      "type": "Direct",
      "prompt": "Why Google, and why move from Samsung?",
      "answer": "I have enjoyed building production Android features at Samsung, especially problems where application state, device behavior, and user experience have to work together. I am now looking for broader ownership and exposure to a wider range of product and reliability challenges. Google is especially interesting to me because Android is central to my experience, and I want to contribute to products where small improvements in responsiveness and reliability matter to many users. I would bring hands-on Kotlin and Compose experience, a habit of investigating problems across layers, and experience maintaining my own app with 100K+ downloads. This is a positive next step in scope and learning, rather than a reaction to something negative at Samsung.",
      "checks": [
        "Positive reason for moving.",
        "Specific role connection you genuinely care about."
      ],
      "followups": [
        "Why not grow in your current team?",
        "Which product problem would you want to understand first?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Why not grow in your current team?",
          "answer": "I am still learning at Samsung, and I value that experience. The attraction is the opportunity to apply it in a different product environment with broader scope, new engineering approaches, and a new set of colleagues to learn from."
        },
        {
          "question": "Which product problem would you want to understand first?",
          "answer": "I would first understand the core task users are trying to complete and where reliability or usability is getting in their way. For an Android product, I would want to observe that flow before proposing an architectural or performance change."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "How do you balance user value and delivery time?",
          "answer": "I would agree on the smallest useful outcome and protect the correctness of that path. If time is constrained, I would reduce scope openly rather than deliver a broad feature whose behavior users cannot trust."
        },
        {
          "question": "When did your definition change?",
          "answer": "Running my own app makes the distinction clear: a successful release is not just an uploaded APK. Users still need to find content, complete purchases, and return to an experience that works."
        }
      ]
    },
    {
      "id": "strength",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What is your strongest contribution to a team?",
      "answer": "My strongest contribution is connecting a user-visible problem to what is happening across the whole system, then turning that understanding into a practical solution. On the Samsung Sound App, a screen could look correct while individual soundbars were in different states. I worked on multi-device control for 12+ devices using Kotlin Coroutines, StateFlow, and a repository-based architecture so the application could represent independent device updates consistently. I also worked on the equalizer experience, where moving processing off the main thread and controlling UI updates mattered to responsiveness. What I bring to a team is that I do not stop at making my screen compile: I investigate the path from the user action to the actual device response, explain the trade-offs, and work with others to make the result dependable. My Alexa testing work uses the same approach—checking soundbar state alongside the spoken response instead of accepting a plausible answer as proof of success.",
      "checks": [
        "One strength, one concrete example."
      ],
      "followups": [
        "What would your teammate say?",
        "Where can this strength become a weakness?"
      ],
      "story": "device",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Illustrative draft: includes inferred details for practice",
      "followupAnswers": [
        {
          "question": "What would your teammate say?",
          "answer": "I would hope a teammate would describe me as someone who follows a problem through the UI, application logic, and device behavior, then explains a concrete way forward. That is the contribution I try to make in soundbar integration work."
        },
        {
          "question": "Where can this strength become a weakness?",
          "answer": "It can become a weakness if I investigate too broadly before deciding what matters to the immediate goal. I manage that by defining the question, time-boxing the investigation, and separating the essential fix from follow-up improvements."
        }
      ]
    },
    {
      "id": "weakness",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What is a genuine weakness you are working on?",
      "answer": "A weakness I have worked on is estimating a feature too quickly when its visible behavior looks familiar. In a freelance e-commerce prototype, I initially treated a flash-sale feature as a countdown timer and discounted price. I underestimated what had to happen when the sale expired while a user was browsing, had items in the cart, or was checking out. That expanded the work beyond my original estimate and affected the client's planned demo. I told the client when I recognized the gap, explained the missed dependencies, and revised the plan. The change in my approach is to map the start, end, failure paths, and cross-screen effects before committing. I still want to move quickly, but now I separate a familiar UI from an understood end-to-end feature and use a short investigation for the uncertain parts.",
      "checks": [
        "Real cost, concrete change, recent evidence.",
        "Avoid a disguised strength such as caring too much."
      ],
      "followups": [
        "When did it last happen?",
        "What feedback did you receive?"
      ],
      "story": "failure",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "When did it last happen?",
          "answer": "The concrete example in my story bank is the flash-sale prototype, where I underestimated expiry behavior across the cart and checkout. I would describe that project directly without inventing a recent date or a second incident."
        },
        {
          "question": "What feedback did you receive?",
          "answer": "The important feedback from that situation was that another person had planned around my commitment. The change was to make dependencies and uncertainty visible before giving a firm estimate, rather than only explain the complexity afterward."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if the manager changes the goal again?",
          "answer": "I would clarify what new information changed the goal, then make the effect on scope, dependencies, and dates explicit. I would ask which previous commitment should move so the team has one understandable set of priorities."
        },
        {
          "question": "How do you avoid escalating every disagreement?",
          "answer": "I first try to resolve the issue with the people closest to it using evidence and options. I escalate when ownership is unclear, the decision affects other commitments, or a serious risk cannot be resolved at that level—not merely because I prefer another design."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What did you change after your last interview?",
          "answer": "After my previous interview, I realized that preparing only STAR stories did not prepare me to answer several different questions at once. I now practice direct and hypothetical questions, map each clause before answering, and check that I addressed the whole prompt."
        }
      ]
    },
    {
      "id": "ambiguity",
      "category": "Ambiguity",
      "type": "Behavioral",
      "prompt": "Describe a time you had to deal with ambiguity.",
      "answer": "At Samsung, I received a request for Spotify integration without a clear definition of what integration meant. It could mean simply opening Spotify, opening the song currently playing on the soundbar, or building broader two-way control. Instead of selecting the most elaborate interpretation, I investigated the available device metadata and Android deep-linking options. I wrote down three options with their user value, effort, and dependencies, then discussed them with my tech lead and team. We chose a scoped deep-link experience that could open the relevant track when metadata was available and fall back sensibly when it was not. I then implemented the agreed behavior. The useful part of my contribution was reducing uncertainty early and making the trade-off understandable, rather than waiting for a perfect specification or building a large feature on assumptions.",
      "checks": [
        "What was unknown?",
        "What changed after talking to others?"
      ],
      "followups": [
        "What if no stakeholder would decide?",
        "What did you deliberately defer?"
      ],
      "story": "spotify",
      "source": "aced",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if no stakeholder would decide?",
          "answer": "I would state my recommended option, the assumptions behind it, and a time by which a decision is needed. If it were low risk and reversible, I would propose a small prototype while aligning with the accountable owner rather than wait indefinitely."
        },
        {
          "question": "What did you deliberately defer?",
          "answer": "We deferred broader two-way control because it implied more integration scope and dependencies than the selected deep-link experience. The principle was to solve the agreed user task without quietly expanding it into a different product."
        }
      ]
    },
    {
      "id": "user-first",
      "category": "Users",
      "type": "Behavioral",
      "prompt": "Tell me about a time you put users first when leading product work.",
      "answer": "For my Mi Band 5 Watch Faces app, I had to make product decisions as well as write Android code. I wanted users to browse and find watch faces without loading the entire catalog or repeatedly downloading the same images. I used Paging 3 for incremental loading and image caching for repeat visits, and expanded the app into seven languages to make it usable to more people. These choices addressed the core experience before adding complexity for its own sake. The app reached 100K+ downloads, and my resume records improvements in engagement and retention alongside these changes. I treat those as observed product improvements rather than claiming a controlled experiment proved that one feature caused every change. The lesson for me is to start with what users are trying to accomplish and make the common path reliable and accessible.",
      "checks": [
        "A real user, decision, and outcome."
      ],
      "followups": [
        "What if revenue pointed in the other direction?",
        "Whose needs might your analytics miss?"
      ],
      "story": "watchface",
      "source": "aced",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if revenue pointed in the other direction?",
          "answer": "I would make the trade-off explicit: short-term revenue is not a good result if it damages the core experience or user trust. I would look for an experiment or less disruptive alternative and evaluate both the business outcome and user friction."
        },
        {
          "question": "Whose needs might your analytics miss?",
          "answer": "Analytics can underrepresent users who abandon early, have accessibility barriers, use older devices, or cannot use the supported language comfortably. I would combine behavioral data with reviews, direct feedback, and device testing."
        }
      ]
    },
    {
      "id": "disagreement",
      "category": "Conflict",
      "type": "Behavioral",
      "prompt": "Tell me about a disagreement with a coworker.",
      "answer": "On the Samsung Sound App's equalizer screen, we discussed sending a command on every slider movement so users could hear changes immediately. I understood the motivation, but I was concerned that rapid movements would create a backlog and leave the device behind the displayed value. I demonstrated the behavior on a test device rather than argue only from theory, and proposed separating immediate visual feedback from command delivery so the final intended setting would reach the soundbar reliably. I walked through the trade-off with my tech lead, listened to the responsiveness concern, and we agreed on a coalesced command approach. The discussion stayed focused on the shared goal of a responsive, correct experience. My takeaway was that a concrete demonstration and a common success criterion are more effective than framing a disagreement as one engineer winning.",
      "checks": [
        "Fair description of the other view.",
        "Your actions and reflection."
      ],
      "followups": [
        "What if they were right?",
        "Did the relationship change?"
      ],
      "story": "conflict",
      "source": "aced",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if they were right?",
          "answer": "I would say so and help implement the stronger approach. The goal is not to preserve my proposal; it is to make the responsiveness and correctness trade-off explicit and choose based on evidence."
        },
        {
          "question": "Did the relationship change?",
          "answer": "The relationship outcome I would aim to explain is continued collaboration around a shared problem, rather than personal victory. I would not invent a private compliment or claim to know exactly how the other person felt."
        }
      ]
    },
    {
      "id": "learning-mindset",
      "category": "Learning",
      "type": "Direct",
      "prompt": "How do you keep learning and growing as an engineer?",
      "answer": "I learn by connecting a new idea to a real engineering problem, building a small end-to-end version, and deliberately checking where it breaks. With the Alexa test automation project, I had to connect test interpretation, MCP device operations, transcription, and result evaluation. That taught me that a fluent model response is not the same thing as evidence that an action happened. We used Whisper transcripts together with soundbar state changes and reviewed ambiguous outcomes manually. I also use Codex, Antigravity, and Cline to explore unfamiliar code and implementation options, but I review and test their suggestions instead of treating them as authoritative. I try to finish a learning task with a better decision or a working improvement, not just familiarity with another tool.",
      "checks": [
        "Learning applied to behavior.",
        "An actual example rather than a list of blogs."
      ],
      "followups": [
        "What did you change your mind about recently?",
        "What did a junior teach you?"
      ],
      "story": "alexa",
      "source": "aced",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What did you change your mind about recently?",
          "answer": "The AI testing work strengthened my view that a language response should be treated as evidence to examine, not a final source of truth. That is why checking soundbar state alongside the Whisper transcript matters."
        },
        {
          "question": "What did a junior teach you?",
          "answer": "In the mentoring example, explaining list updates to an intern reminds me how much context experienced engineers can leave implicit. A basic question can reveal that the explanation or design is less clear than I thought."
        }
      ]
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
      "source": "sep26",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if it was your manager?",
          "answer": "I would still start with a specific, private conversation and ask for contributions to be represented accurately. If the pattern affected evaluation and could not be resolved directly, I would use the appropriate management or people-support channel with factual examples."
        },
        {
          "question": "What if the teammate disagrees with your account?",
          "answer": "I would compare concrete artifacts such as design documents, changes, and reviews, while acknowledging work they contributed. I would focus on accurate attribution and a workable agreement rather than proving the person had bad intentions."
        }
      ]
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
      "source": "sep26",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "Two managers insist their work is first—then what?",
          "answer": "I would put both requests, impacts, and deadlines in one shared view and explain the capacity conflict. I would propose an order and ask the relevant decision owners to align rather than give both incompatible promises."
        },
        {
          "question": "What if no one will de-scope?",
          "answer": "I would state the feasible delivery range and consequences explicitly, then ask for a decision on date, scope, or capacity. If no option changes, I would report the risk honestly instead of imply that all work is committed."
        }
      ]
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
      "source": "community",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if the best business choice harms the community?",
          "answer": "I would first examine whether the harm can be prevented or reduced through another option. Some constraints, such as safety and legal obligations, should not be treated as optional; other trade-offs require listening to affected people and making the reasoning transparent."
        },
        {
          "question": "How would you measure whether a program helps?",
          "answer": "I would define the intended benefit with the community, choose an observable outcome, and check both positive and unintended effects. Participation numbers alone are not enough if the program does not address what people actually need."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if you lack technical context?",
          "answer": "I would ask each person to explain the assumption behind their recommendation and involve someone with the needed domain context. I can still help structure the decision without pretending to be the technical authority."
        },
        {
          "question": "How do you include a quieter teammate?",
          "answer": "I would invite their view, offer time to think or contribute asynchronously, and avoid forcing an immediate public response. I would also make sure the final decision reflects the input rather than merely giving everyone speaking time."
        }
      ]
    },
    {
      "id": "mistake",
      "category": "Failure",
      "type": "Behavioral",
      "prompt": "Tell me about a mistake that affected someone else.",
      "answer": "In a freelance Android prototype, I underestimated a flash-sale feature because I focused on the timer rather than the state changes when the timer ended. That meant the client had planned a demo around an estimate that was too optimistic. Once I understood the dependency on cart and checkout behavior, I explained the mistake early, gave a revised plan, and worked through the expiry behavior across the affected screens. I took responsibility for the estimate instead of presenting the additional work as the client's fault. The main change afterward was to include lifecycle boundaries and dependent flows in my estimates. It taught me that an estimate is a communication commitment, not just a guess about how long the obvious code will take.",
      "checks": [
        "Personal accountability and repair."
      ],
      "followups": [
        "What would the affected person say?",
        "Did you repeat it?"
      ],
      "story": "failure",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What would the affected person say?",
          "answer": "The client could reasonably say that my estimate created a planning problem for them. My early communication helped, but it did not erase the consequence; that is why I changed the way I assess dependencies before committing."
        },
        {
          "question": "Did you repeat it?",
          "answer": "I would not claim I never underestimate work again. The concrete improvement is that I now investigate uncertain boundaries and communicate them earlier, so an estimate is accompanied by assumptions and a way to update it."
        }
      ]
    },
    {
      "id": "feedback",
      "category": "Self-awareness",
      "type": "Behavioral",
      "prompt": "What difficult feedback have you received?",
      "answer": "A useful piece of feedback for me would be that I sometimes go into implementation details before making the decision or impact clear. The underlying habit comes from wanting to explain a technical problem thoroughly. For example, with a soundbar synchronization issue, it is easy to start with Coroutines and StateFlow when the listener first needs to understand that the displayed state can disagree with the device. My improved approach is to lead with the user problem, state my recommendation and its trade-off, and then explain the implementation at the depth the audience needs. I also summarize the decision and next step at the end. That makes my technical work easier for teammates and stakeholders to act on.",
      "checks": [
        "Actual feedback, changed behavior, evidence."
      ],
      "followups": [
        "Which part was hardest to accept?",
        "What feedback do you still disagree with?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Illustrative draft: includes inferred details for practice",
      "followupAnswers": [
        {
          "question": "Which part was hardest to accept?",
          "answer": "The difficult part of that illustrative feedback is accepting that a technically complete explanation can still be ineffective communication. I can be right about the implementation and still need to change how I help the audience make a decision."
        },
        {
          "question": "What feedback do you still disagree with?",
          "answer": "I would question advice to remove all technical detail, because some decisions need it. My compromise would be a short recommendation first, followed by evidence at the depth the audience wants, rather than choose between a vague summary and an unstructured deep dive."
        }
      ]
    },
    {
      "id": "wrong",
      "category": "Learning",
      "type": "Behavioral",
      "prompt": "Tell me about a time new evidence changed your mind.",
      "answer": "One way I would explain changing my mind is through the Alexa test runner. My initial instinct in an AI-based evaluation design would be to treat a natural-language response that matches the expected wording as a strong success signal. Thinking through the device side shows why that is incomplete: Alexa can acknowledge a command without the soundbar reaching the expected state, and transcription itself can be imperfect. The approach we used combined the Whisper transcript with soundbar state changes before judging the outcome and sent ambiguity to manual review. The lesson I take from that is to update the decision when stronger evidence is available instead of defending the first abstraction. A convincing explanation should never outrank the behavior we are actually trying to verify.",
      "checks": [
        "Admit original error and credit the contribution."
      ],
      "followups": [
        "What made you trust the evidence?",
        "How did you prevent attachment to your first idea?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Illustrative draft: includes inferred details for practice",
      "followupAnswers": [
        {
          "question": "What made you trust the evidence?",
          "answer": "Observable state is directly related to the behavior under test, so it is stronger than matching response wording alone. I would still examine freshness and timing because a state observation can also be incomplete."
        },
        {
          "question": "How did you prevent attachment to your first idea?",
          "answer": "I would define the success condition before judging the result and ask what evidence could falsify my assumption. That makes it easier to change the design without treating a change of mind as a personal loss."
        }
      ]
    },
    {
      "id": "mentor",
      "category": "Collaboration",
      "type": "Behavioral",
      "prompt": "How have you helped someone else grow?",
      "answer": "A junior intern was working on a QR-result list that updated more of the screen than necessary. Rather than rewrite the feature myself, I helped them observe the redraw behavior and connect it to how list updates were being applied. I explained the principle of comparing changes and updating only affected items, then let them work through the implementation. In review, I explained why the comments mattered instead of only naming the API I preferred. The improvement was a smoother list and, more importantly, a teammate who understood the cause and could apply the idea again. It reminded me that mentoring is successful when the other person becomes more independent, not when I solve the task fastest.",
      "checks": [
        "Their growth, not your cleverness."
      ],
      "followups": [
        "What did you learn from them?",
        "What if they needed more time than you had?"
      ],
      "story": "mentor",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What did you learn from them?",
          "answer": "I learned to explain why an approach matters before recommending an API or pattern. If the intern cannot connect the solution to the visible behavior, I have probably transferred instructions rather than understanding."
        },
        {
          "question": "What if they needed more time than you had?",
          "answer": "I would agree on a smaller learning goal, pair on the critical part, and discuss any delivery impact with the owner. I would not leave the person stuck merely to preserve the appearance that they completed everything independently."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if they prefer not to speak publicly?",
          "answer": "I would offer written or asynchronous ways to contribute and ask what would be comfortable for them. The aim is meaningful participation, not making someone perform a particular communication style."
        },
        {
          "question": "What if the interrupter is senior?",
          "answer": "I would still redirect the discussion respectfully and make space for the unfinished point. If it became a pattern, I would address the meeting process with the facilitator or manager using observations and impact."
        }
      ]
    },
    {
      "id": "different-style",
      "category": "Inclusion",
      "type": "Behavioral",
      "prompt": "Describe working with someone whose approach differed from yours.",
      "answer": "A plausible example from my device-integration work is collaborating with someone who wanted a detailed command sequence agreed before implementation, while I preferred a quick prototype to expose unknowns. Those approaches can look incompatible, but both address a real risk: an unclear contract can waste work, and a long design discussion can miss actual device behavior. I would combine them by writing a small contract for inputs, expected state changes, and failure behavior, then using a focused prototype to test the uncertain parts. We could review the observed behavior together before expanding the implementation. What I would take from that collaboration is to make the interface explicit earlier; what I would contribute is a cheap way to validate assumptions on the device.",
      "checks": [
        "Adaptation in both process and understanding."
      ],
      "followups": [
        "What did you still disagree about?",
        "How would you work together next time?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Illustrative draft: includes inferred details for practice",
      "followupAnswers": [
        {
          "question": "What did you still disagree about?",
          "answer": "The remaining disagreement might be how much contract detail is necessary before prototyping. I would resolve that with a narrow experiment and explicit boundaries, rather than assume one working style is always better."
        },
        {
          "question": "How would you work together next time?",
          "answer": "I would start the next collaboration with a lightweight interface note and agree which uncertainties need a device experiment. That combines their need for predictable integration with my preference for learning from working behavior."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if leadership insists on release?",
          "answer": "I would make the user impact and mitigation options visible to the accountable owner, including what we do not know. For a serious unresolved safety, security, or integrity issue, I would use the relevant escalation route rather than hide the risk."
        },
        {
          "question": "What evidence would allow you to proceed?",
          "answer": "I would want a reproduced cause, a validated fix or containment, appropriate regression checks, and a clear rollback or recovery plan. The depth of evidence should match the impact of being wrong."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if a teammate cannot stay late?",
          "answer": "I would respect that constraint and adjust the plan around actual capacity. I would not make them explain private circumstances or treat availability for overtime as a measure of commitment."
        },
        {
          "question": "What if management refuses to adjust scope?",
          "answer": "I would document the delivery risk and what the available capacity can support, then raise it through the appropriate planning channel. Repeated overtime is evidence that the plan needs attention, not a substitute for capacity."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if the contract keeps changing?",
          "answer": "I would identify which changes are essential, version or isolate the interface where possible, and agree on a stable minimum contract for the immediate milestone. I would keep speculative changes out of the critical path."
        },
        {
          "question": "When do you involve your manager?",
          "answer": "I would involve my manager when the dependency threatens a shared commitment or the teams cannot resolve priority and ownership directly. I would bring the impact, attempts already made, and a recommended option."
        }
      ]
    },
    {
      "id": "unpopular",
      "category": "Influence",
      "type": "Behavioral",
      "prompt": "Tell me about influencing a decision without authority.",
      "answer": "For the equalizer feature, I had no formal authority to decide how the team should send commands. I believed that forwarding every slider update would create a backlog, while the competing concern was that users should hear changes immediately. I demonstrated the mismatch on a device and proposed keeping visual feedback immediate while controlling command delivery. That gave the team a shared problem to evaluate rather than a preference to accept from me. My tech lead made the final decision, and I supported the agreed implementation. The influence came from making the evidence and trade-off clear, while respecting the other person's goal and the team's decision process.",
      "checks": [
        "Influence is not approval power."
      ],
      "followups": [
        "What if the decision went against you?",
        "How did you preserve trust?"
      ],
      "story": "conflict",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if the decision went against you?",
          "answer": "I would support a reasonable decision after making my concerns clear, and agree on observable signals that would trigger a revisit. I would not quietly implement my preferred version or undermine the team."
        },
        {
          "question": "How did you preserve trust?",
          "answer": "I would acknowledge the other goal, share reproducible evidence, and invite corrections to my assumptions. That shows that the discussion is about the product outcome rather than who proposed the idea."
        }
      ]
    },
    {
      "id": "no-example",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "What if you have never experienced the situation I am asking about?",
      "answer": "I have not faced that exact situation, so I would not want to present a hypothetical as something I have done. A related experience is handling ambiguity in the Samsung Sound App's Spotify integration: I investigated feasible options, discussed scope with the team, and implemented the agreed behavior. That is relevant to how I reduce uncertainty and involve the right people. For the specific scenario you asked about, I would first clarify the goal and who is affected, then compare the available actions and communicate the trade-off. I am happy to either go deeper on the related experience or walk through the hypothetical directly.",
      "checks": [
        "Ask whether a related example or hypothetical is preferred."
      ],
      "followups": [
        "Can you still give a concrete first step?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Can you still give a concrete first step?",
          "answer": "Yes. I would first identify the immediate goal, the people affected, and whether there is an urgent risk. That gives me enough context to propose a first action without pretending to have lived the exact scenario."
        }
      ]
    },
    {
      "id": "ai-overview",
      "category": "AI",
      "type": "Behavioral",
      "prompt": "Explain the Alexa AI test project in plain English.",
      "answer": "I worked on an AI-assisted runner for Alexa integration tests on Samsung soundbars. I parsed test cases supplied by the Amazon Alexa team and passed them to an LLM to interpret and check the required preconditions. If those conditions were not met, the runner attempted to establish them through MCP tools on the soundbar side. It then executed utterances such as 'Alexa, play music,' transcribed the response with Whisper, and checked soundbar state changes before judging the result. Ambiguous outcomes required manual review, and the AI assessments were checked against known test cases. My contribution was connecting the written test instructions with the device-control and evidence-checking workflow; the core engineering judgment was to verify behavior rather than trust the model's wording alone.",
      "checks": [
        "Start with test workflow and user problem.",
        "Make personal ownership explicit."
      ],
      "followups": [
        "What did you own?",
        "What was the hardest judgment call?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What did you own?",
          "answer": "I worked on parsing the supplied test cases into the LLM-assisted workflow and connecting precondition handling with the soundbar-side execution and evidence checks. I would separate that contribution from the existing model, protocol, and device capabilities it used."
        },
        {
          "question": "What was the hardest judgment call?",
          "answer": "The hardest judgment was deciding what the evidence actually established when language and device behavior were uncertain. The practical boundary was to check state alongside the transcript and send ambiguity for review."
        }
      ]
    },
    {
      "id": "ai-why",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "Why use an LLM instead of writing a deterministic test runner?",
      "answer": "The LLM was useful for interpreting written test instructions and language variations, rather than because device control itself needed to be unpredictable. I wanted to bridge the written Alexa test cases to a workflow that could establish conditions, run utterances, and evaluate evidence. A parser and state machine are better where the input and transitions are already fully structured. My design preference is therefore to keep the model focused on language interpretation and to make device operations and observable checks explicit. I would retain a deterministic path for tests that do not benefit from language reasoning, and compare any added flexibility with its reliability and maintenance cost.",
      "checks": [
        "Acknowledge cost and complexity.",
        "Do not claim an LLM is necessary for every step."
      ],
      "followups": [
        "Could a parser and state machine do this?",
        "How would you decide whether to remove the LLM?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Could a parser and state machine do this?",
          "answer": "Yes, especially if cases are fully structured and their conditions are explicit. I would prefer deterministic execution there and reserve the LLM for the parts where language interpretation creates enough value to justify the uncertainty."
        },
        {
          "question": "How would you decide whether to remove the LLM?",
          "answer": "I would compare a representative set of cases on correctness, maintenance effort, coverage, latency, and review burden. If the structured approach met the need more reliably and cheaply, I would simplify the design."
        }
      ]
    },
    {
      "id": "ai-precondition",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "The LLM says the preconditions are satisfied. Is that enough?",
      "answer": "No. A model stating that a precondition is satisfied is not proof of the device's state. In our workflow the preconditions were checked, and missing conditions could trigger soundbar-side MCP operations to attempt setup. I would judge the setup by the resulting observable state, not merely by whether the tool call returned successfully. If a condition cannot be established or the observation is inconclusive, I would stop treating the run as a valid product test and send it for investigation or manual review. That avoids confusing a setup problem with a soundbar defect or a successful test.",
      "checks": [
        "Check current state, not just tool-call success."
      ],
      "followups": [
        "What if the device state is stale?",
        "How do you avoid an endless repair loop?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if the device state is stale?",
          "answer": "I would check the timestamp and refresh the observation before relying on it. If I still could not establish the state, I would stop the run or send it for review instead of assume the desired condition."
        },
        {
          "question": "How do you avoid an endless repair loop?",
          "answer": "I would define bounded attempts and a stop condition, then retain the actions and evidence for diagnosis. Repeating setup indefinitely can hide an invalid precondition or create new state changes."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if state changes but Whisper hears an error?",
          "answer": "I would inspect the audio and expected spoken behavior as well as the state transition. A successful device action and an incorrect or misunderstood response may be different defects, so one should not automatically cancel the other."
        },
        {
          "question": "What evidence would settle it?",
          "answer": "A fresh, relevant device observation, the recorded response, the expected behavior, and the timing of each step would let me distinguish a failed action from a bad transcript or delayed observation. Without that, I would keep the result inconclusive."
        }
      ]
    },
    {
      "id": "ai-whisper",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "How can transcription make your test verdict unreliable?",
      "answer": "Whisper produces an interpretation of the recorded audio, so a missing or misrecognized word can change the meaning of the apparent response. I would use the transcript as one evidence channel and compare it with the device state for the behavior under test. If the evidence conflicts, I would review the audio rather than force a verdict. To evaluate transcription separately, I would use human-labeled recordings and measure word error rate, then inspect errors that change meaning, such as losing a negation. I would also evaluate the final test judgment because a good transcript does not by itself prove that the command succeeded.",
      "checks": [
        "Whisper is ASR, not a device-success detector."
      ],
      "followups": [
        "How do you handle silence or background music?",
        "Why might a low WER still produce the wrong verdict?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "How do you handle silence or background music?",
          "answer": "I would verify that useful audio was captured and inspect the recording rather than assume the transcript is trustworthy. Silence, competing audio, or a recognition error should be represented as an evidence problem, not converted into a confident product verdict."
        },
        {
          "question": "Why might a low WER still produce the wrong verdict?",
          "answer": "A single missed word can reverse meaning, and a perfectly transcribed acknowledgment can still describe an action that never happened. The end-to-end verdict must therefore be evaluated against expected behavior, not only transcription quality."
        }
      ]
    },
    {
      "id": "ai-evaluation",
      "category": "AI",
      "type": "Technical judgment",
      "prompt": "What would you measure to trust an LLM-based test judge?",
      "answer": "In the project, AI assessments were checked against known test cases, and ambiguous outcomes went to manual review. To make that evaluation more systematic, I would maintain a held-out set with human-reviewed labels for expected passes, failures, setup issues, and ambiguity. I would track false passes, false failures, the share of cases requiring review, and agreement across comparable reruns. False passes are especially important because they can hide integration defects. I would inspect individual disagreements and the evidence behind them instead of report a single accuracy figure without context.",
      "checks": [
        "Define denominator, labels, and review policy."
      ],
      "followups": [
        "How do you avoid evaluating on examples in the prompt?",
        "Who resolves reviewer disagreement?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "How do you avoid evaluating on examples in the prompt?",
          "answer": "I would separate development examples from the evaluation set and avoid using the held-out cases to tune the prompt repeatedly. I would also include failure modes different from the examples used to design the system."
        },
        {
          "question": "Who resolves reviewer disagreement?",
          "answer": "I would define the expected behavior with the relevant test owners and have disagreements reviewed using the underlying audio and state evidence. If the specification itself is ambiguous, that is a specification issue to resolve rather than a label to force."
        }
      ]
    },
    {
      "id": "ai-safety",
      "category": "AI",
      "type": "Hypothetical",
      "prompt": "How would you stop the agent from taking unsafe or irrelevant MCP actions?",
      "answer": "I would restrict the agent to approved operations on designated test devices and validate arguments outside the language model. I would bound setup attempts, make state-changing calls visible in the run record, and require appropriate oversight for destructive or unrelated operations. The content of a test case should be treated as data, not authority to change the runner's rules. I would also verify postconditions because a successful tool response is not sufficient evidence that the soundbar reached the intended state. These are safeguards I would include when strengthening this type of runner.",
      "checks": [
        "MCP alone does not provide application-level authorization."
      ],
      "followups": [
        "What if a test case asks the agent to ignore its rules?",
        "What if the tool reports success but does something else?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if a test case asks the agent to ignore its rules?",
          "answer": "I would treat that instruction as untrusted test content and keep policy enforcement outside the model. Only allowed operations with valid arguments should reach the test device."
        },
        {
          "question": "What if the tool reports success but does something else?",
          "answer": "I would inspect observed postconditions and the tool record rather than trust the success message alone. An unexpected side effect would stop the run and require investigation before further state-changing actions."
        }
      ]
    },
    {
      "id": "ai-privacy",
      "category": "Ethics",
      "type": "Hypothetical",
      "prompt": "Can you send internal Alexa test cases and recordings to any hosted LLM?",
      "answer": "I would use the approved environment for test specifications, recordings, and device data, rather than assume they can be sent to any hosted model. I would minimize inputs, remove credentials and unnecessary identifiers, and check retention and access requirements with the responsible owners. If the permitted use were unclear, I would pause that transfer and keep working with sanitized examples or an approved alternative. The deadline would influence planning, but it would not make internal data public. My responsibility is to make the automation useful without creating an avoidable data-handling problem.",
      "checks": [
        "Internal data approval and least necessary disclosure."
      ],
      "followups": [
        "What if a deadline makes approval slow?",
        "What would you log without exposing sensitive data?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if a deadline makes approval slow?",
          "answer": "I would surface the dependency early and use sanitized examples or an approved environment while waiting. I would change the delivery plan rather than bypass an unclear data-handling requirement."
        },
        {
          "question": "What would you log without exposing sensitive data?",
          "answer": "I would prefer test IDs, approved version information, operation names, and minimized diagnostic summaries over raw secrets or unnecessary identifiers. Where recordings or full cases are needed, I would keep them under the approved access and retention controls."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if the provider cannot pin the model?",
          "answer": "I would record the version information that is available, monitor the held-out evaluation set, and avoid silently promoting changed behavior. If reproducibility cannot be controlled, I would reduce the scope of automatic verdicts and increase review where necessary."
        },
        {
          "question": "When would you roll back?",
          "answer": "I would roll back or disable automatic judgments if the update introduced material false passes, unsafe actions, or unreliable behavior on important cases. I would keep the comparison evidence so the decision is based on error impact rather than anecdote."
        }
      ]
    },
    {
      "id": "ai-result",
      "category": "AI",
      "type": "Behavioral",
      "prompt": "What was the project’s impact?",
      "answer": "The result was an end-to-end test workflow connecting Alexa test-case interpretation, precondition setup through MCP, utterance execution, Whisper transcription, and soundbar state checking. It went beyond generating a textual answer: the system attempted actions and collected evidence about the device before making a judgment. The qualitative benefit was a repeatable path through setup, execution, and assessment, with a review path for ambiguous results. The main limitation was that language-based interpretation and audio evidence can still be uncertain, so validation against known cases remained important. I would describe that implemented capability directly rather than attach an unmeasured accuracy or time-saving percentage to it.",
      "checks": [
        "Operational result is better than invented percentages."
      ],
      "followups": [
        "Was it a prototype or production system?",
        "What did the team decide after the trial?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Was it a prototype or production system?",
          "answer": "I would describe it as the implemented AI-assisted test automation workflow and keep the claim at that level. I have not supplied a verified deployment scale or release status, so I would not turn the capability into an unsupported production-rollout claim."
        },
        {
          "question": "What did the team decide after the trial?",
          "answer": "I would explain the concrete next decision in terms of the evidence: which cases are reliable enough to automate and which still need review. I would not invent a team rollout decision; the defensible result is the integrated workflow and its review boundary."
        }
      ]
    },
    {
      "id": "ai-team",
      "category": "Collaboration",
      "type": "Behavioral",
      "prompt": "Who did you collaborate with on the Alexa project, and what changed because of their feedback?",
      "answer": "My work sat between the written test specification and the soundbar-side automation workflow. I used test cases supplied by the Amazon Alexa team and worked on parsing them into the LLM-assisted process, connecting precondition handling with MCP actions, and checking the resulting transcript and state evidence. I distinguish that from claiming that I owned the Alexa platform, device firmware, or every component of Whisper and MCP. A useful collaboration discussion is how the expected behavior in the test case should map to what the device reports. Where the signals do not line up, the right next step is to review the case with the relevant owners rather than let the model invent an explanation.",
      "checks": [
        "Do not imply partnership or leadership you did not have."
      ],
      "followups": [
        "What exactly was yours?",
        "Where did you disagree?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What exactly was yours?",
          "answer": "My contribution was the test-case parsing and the workflow connecting language interpretation, precondition setup, utterance execution, and evidence-based assessment. I would acknowledge the existing device tools and transcription model instead of claim I built those technologies."
        },
        {
          "question": "Where did you disagree?",
          "answer": "A useful design disagreement to discuss hypothetically is whether a spoken acknowledgment is sufficient for a pass. My position is that state evidence and expected behavior must also be considered, while recognizing that observations can be stale or incomplete."
        }
      ]
    },
    {
      "id": "ai-failure",
      "category": "Failure",
      "type": "Behavioral",
      "prompt": "Describe a real failure in the AI test system.",
      "answer": "A useful failure scenario to rehearse is a run where the spoken response sounds successful but the soundbar has not reached the expected state. In that scenario, a transcript-only judge could incorrectly pass the case. I would compare the initial and final device states, check observation timing, listen to the audio when needed, and determine whether the problem is setup, command recognition, device integration, or evidence collection. I would keep an ambiguous case in review rather than label it a confident pass. Our actual use of both transcripts and soundbar state changes is relevant to preventing that class of mistake; this particular run is an illustrative scenario rather than an incident I have asserted occurred.",
      "checks": [
        "A real incident, not a hypothetical retold as history."
      ],
      "followups": [
        "Who caught it?",
        "What prevented recurrence?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "Who caught it?",
          "answer": "In the illustrative scenario, the device-state check or a manual reviewer would expose the mismatch with the spoken acknowledgment. I would name the actual discoverer only when describing a real run."
        },
        {
          "question": "What prevented recurrence?",
          "answer": "I would add the failure pattern to known regression cases and ensure the verdict considers both evidence channels. I would also preserve the initial state and timings so the next mismatch can be diagnosed rather than simply retried."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Can manual review become the bottleneck?",
          "answer": "Yes, so I would track the review rate and categorize why cases need review. I would improve the recurring ambiguity and keep reliable deterministic checks automatic, rather than lower the evidence threshold to make coverage look better."
        },
        {
          "question": "When is deterministic evaluation enough?",
          "answer": "When the expected condition and observed behavior can be expressed explicitly, a deterministic check is usually easier to reproduce and audit. I would use the LLM only where interpretation adds value."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if everyone says the test is unreliable?",
          "answer": "I would ask for evidence and separate known infrastructure failure from uncertainty about the product. We can quarantine an unreliable test transparently with an owner and follow-up, but should not represent that as a verified pass."
        },
        {
          "question": "What would you put in the release report?",
          "answer": "I would report what was tested, the unresolved issue, its likely impact, what evidence supports the classification, and any containment or follow-up. The release decision should be made with the risk visible."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if the rollback is risky?",
          "answer": "I would compare rollback risk with the current user impact and consider narrower containment, such as disabling the affected feature. I would work with the incident owner instead of make a risky recovery decision alone."
        },
        {
          "question": "How do you avoid blame in the retrospective?",
          "answer": "I would describe the timeline, technical conditions, and missing controls rather than assign a moral failure to a person. I would still be clear about my own decision and what we will change."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if no maintainer is available?",
          "answer": "I would use existing tests, change history, logs, and a small local reproduction to establish the flow, and document assumptions that need confirmation. I would avoid a large irreversible change while that context is missing."
        },
        {
          "question": "What do you promise in the first week?",
          "answer": "I would commit to a concrete understanding milestone and a small validated path, with a list of risks and the next implementation step. I would not promise a complete solution before understanding the constraints."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "How do you avoid interrupting teammates constantly?",
          "answer": "I collect the context and failed attempts into a concise question, use existing documentation first, and batch nonurgent questions. For urgent user-impacting work, I make the urgency explicit and ask sooner."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if the outcome later proves you right?",
          "answer": "I would bring the new evidence back to the agreed success criteria and help adjust the approach without making the discussion about having won. The useful outcome is an improved decision and a better trigger for detecting the problem next time."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if the fix delays a large launch?",
          "answer": "I would explain the severity of the barrier and propose scoped fixes or mitigation options rather than reduce the issue to user count. The accountable owner should compare the actual impact and obligations with the launch cost using input from affected users."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "How do you protect your own delivery?",
          "answer": "I would set focused check-ins, pair on the most important uncertainty, and agree which tasks need another owner or a narrower scope. Supporting someone is more sustainable when the capacity effect is explicit."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if they say it is a tiny change?",
          "answer": "I would walk through the actual affected flows, tests, and dependencies before accepting that estimate. If it is genuinely small, the plan can reflect that; if it is not, I would show the options rather than debate the word “tiny.”"
        }
      ]
    },
    {
      "id": "ownership-boundary",
      "category": "Ownership",
      "type": "Behavioral",
      "prompt": "Tell me about work you took on outside your responsibilities.",
      "answer": "My device-control responsibilities gave me a reason to look beyond a single screen when a problem affected the app as a whole. In the legacy example, a startup issue involving Bluetooth availability prevented some users from reaching the features I owned. I investigated the affected initialization path, added defensive handling so unavailable functionality did not become an unhandled startup failure, and preserved an alternative discovery path where supported. I also checked the surrounding flows and shared the fix with the team rather than treat it as a private patch. The lesson was that ownership means helping restore the user experience and coordinating with the responsible owner, even when the failing code is outside my usual feature area.",
      "checks": [
        "Ownership includes coordination, not just jumping in."
      ],
      "followups": [
        "What happened to your assigned work?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What happened to your assigned work?",
          "answer": "I would tell the owner of my current work about the urgent issue and propose a priority adjustment. Taking ownership of a user problem should not mean silently creating another missed commitment."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if that hurts your promotion case?",
          "answer": "I would make my impact visible through factual summaries of my decisions, implementation, and results while still crediting collaborators. Fair attribution and a strong promotion case are compatible; exaggerating ownership creates a trust problem."
        }
      ]
    },
    {
      "id": "five-years",
      "category": "Motivation",
      "type": "Direct",
      "prompt": "Where do you want to grow over the next few years?",
      "answer": "I want to grow into an engineer who can own increasingly complex Android features from unclear requirements through design, implementation, and reliable delivery. I also want to become better at explaining trade-offs, helping teammates grow, and evaluating AI-assisted systems using evidence. My Samsung device work, my independently maintained watch-face app, and the Alexa automation project all develop different parts of that skill set. I am interested in increasing the scope and quality of my contribution, rather than choosing a title before understanding the work.",
      "checks": [
        "Personalize; this is a draft, not your confirmed aspiration."
      ],
      "followups": [
        "What are you doing now to get there?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What are you doing now to get there?",
          "answer": "My current projects exercise different parts of that growth: Samsung work teaches team delivery and device integration, my app gives me end-to-end product responsibility, and the Alexa runner adds AI evaluation and tool-use judgment. I am also working on explaining those decisions more concisely."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "When would you abandon the project?",
          "answer": "I would stop or materially change it when the evidence no longer supports the intended user value, when the cost exceeds the value relative to alternatives, or when the risk cannot be reduced acceptably. I would make that decision visible rather than continue because work has already been invested."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Hypothetical response",
      "followupAnswers": [
        {
          "question": "What if silence continues?",
          "answer": "I would use the agreed backup owner or escalation path with a clear description of the deadline and consequence. I would continue only the reversible work I can justify, and document assumptions rather than interpret silence as approval."
        }
      ]
    },
    {
      "id": "humility",
      "category": "Self-awareness",
      "type": "Direct",
      "prompt": "How do you know when you are wrong?",
      "answer": "I try to make my assumptions visible and look for evidence that could disprove them. The Alexa automation work is a good example of the principle: an apparently successful spoken response is weaker evidence than the combination of the response and the expected soundbar state change. When the signals disagree, I should investigate instead of defend a convenient verdict. In design discussions I want the same behavior—be clear about my recommendation, invite criticism, and change it when the evidence improves. For me, intellectual humility is being willing to update the decision while still taking responsibility for making one.",
      "checks": [
        "Evidence and a real example."
      ],
      "followups": [
        "When did you last say “I was wrong”?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Illustrative draft: includes inferred details for practice",
      "followupAnswers": [
        {
          "question": "When did you last say “I was wrong”?",
          "answer": "A relevant lesson is recognizing that a plausible language response is not enough to judge device success. I would describe the confirmed transcript-plus-state approach rather than invent a specific meeting or quote in which I admitted an error."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "How would you recover if you answered the wrong part?",
          "answer": "I would acknowledge the mismatch briefly, restate the question as I now understand it, and answer the missed part directly. I would not spend another minute defending the irrelevant answer."
        }
      ]
    },
    {
      "id": "multi-conflict",
      "category": "Conflict",
      "type": "Multi-part",
      "prompt": "Tell me about a disagreement, how you handled it, what happened to the relationship, and what you would do differently.",
      "answer": "I hear four parts: the disagreement, what I did, the relationship, and what I would change. The disagreement was over sending every equalizer slider movement to a soundbar versus controlling command volume. I understood the desire for immediate audio feedback, but showed how rapid commands could leave the device behind the displayed value. I demonstrated the behavior, discussed a coalesced delivery approach with my tech lead, and supported the agreed implementation. I tried to keep the relationship collaborative by treating responsiveness as our shared goal and acknowledging the other concern. What I would improve is agreeing on the observable success criteria earlier, so we evaluate alternatives against the same definition of a good experience.",
      "checks": [
        "Address all four parts explicitly.",
        "Leave room for the interviewer to redirect."
      ],
      "followups": [
        "What would the other person say?",
        "How did you know the relationship was okay?"
      ],
      "story": "conflict",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What would the other person say?",
          "answer": "They could reasonably say they were protecting immediate feedback for the user, not trying to overload the device. Presenting that goal fairly is important to showing that the disagreement was technical and collaborative."
        },
        {
          "question": "How did you know the relationship was okay?",
          "answer": "I would look at subsequent working behavior—whether we could review the options, make the decision, and continue collaborating—not assume agreement meant they felt no frustration. I would check in directly if the discussion seemed strained."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if leadership still demands the same deadline?",
          "answer": "I would present the feasible options and their effects on quality, scope, and capacity, then ask for an explicit priority decision. I would not turn an impossible combination into a commitment merely because the request was repeated."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What is your first action in ten minutes?",
          "answer": "I would establish whether the bug is causing immediate user harm, alert the relevant owner, and check whether the release can be paused safely while it is triaged. I would then communicate who is handling the bug and when I can address the other requests."
        }
      ]
    },
    {
      "id": "multi-ai",
      "category": "AI",
      "type": "Multi-part",
      "prompt": "Why did you use an LLM, what did you build yourself, how did you evaluate it, what went wrong, and what would you change?",
      "answer": "There are five parts. First, the LLM helped interpret written Alexa test cases and preconditions; device execution still needed concrete operations and evidence. Second, I worked on parsing those cases into the workflow connecting condition handling, soundbar-side MCP actions, utterances, Whisper transcripts, and device-state checks. Third, we compared assessments against known cases and manually reviewed ambiguous outcomes. Fourth, the central challenge was repeatability and distinguishing recognition, setup, and integration problems; a spoken acknowledgment cannot by itself prove success. Fifth, I would strengthen stage-level evidence, explicit stop conditions, and a held-out regression set. The implemented result I can defend is the connected execution-and-assessment workflow; I would not claim an unmeasured numerical improvement.",
      "checks": [
        "All five clauses; no invented failure or metric."
      ],
      "followups": [
        "Could the same model be planner and judge?",
        "How would you isolate the stages?"
      ],
      "story": "alexa",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Could the same model be planner and judge?",
          "answer": "It can be, but shared blind spots mean agreement between its plan and its judgment is not independent evidence. I would retain external device observations, explicit checks, and human-reviewed evaluation cases."
        },
        {
          "question": "How would you isolate the stages?",
          "answer": "I would record the parsed test, setup actions, utterance, audio, transcript, state observations, and verdict separately. That lets me determine whether a mismatch came from interpretation, execution, observation, or judging."
        }
      ]
    },
    {
      "id": "multi-failure",
      "category": "Failure",
      "type": "Multi-part",
      "prompt": "Describe a failure, how you told stakeholders, what you learned, and what you would do if it happened again.",
      "answer": "I will cover the mistake, communication, lesson, and how I would respond now. In the flash-sale prototype, I estimated the visible timer but missed how expiry affected cart and checkout state. When I recognized the gap, I told the client early, explained what I had underestimated, and revised the delivery plan instead of waiting for the original deadline to pass. The lesson was to estimate lifecycle boundaries and dependencies, not just the UI. Today I would investigate the expiry behavior first, present a narrower option if the date were fixed, and agree on the trade-off before committing. That would not remove all uncertainty, but it would make the commitment more informed and the risk visible earlier.",
      "checks": [
        "Failure → communication → learning → future response."
      ],
      "followups": [
        "What did you do before the deadline?"
      ],
      "story": "failure",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What did you do before the deadline?",
          "answer": "I explained the missed dependency when I recognized it and gave a revised plan, rather than wait for the demo date. Today I would also offer a narrower, clearly bounded alternative if the date itself could not move."
        }
      ]
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
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "Give a concrete example of a legitimate trade-off.",
          "answer": "A company may need a new facility that creates jobs but also increases traffic and resource use. I would compare locations and mitigation options with local input, rather than assume either the economic benefit or the disruption automatically settles the decision."
        }
      ]
    },
    {
      "id": "multi-new-team",
      "category": "Ambiguity",
      "type": "Multi-part",
      "prompt": "You join a team, inherit an unclear project, find an architectural problem, and have two weeks. What do you do first, what do you defer, and how do you get buy-in?",
      "answer": "I would start by clarifying the user outcome and what must be delivered in two weeks. Then I would trace the critical flow and reproduce the architectural concern so I know whether it blocks safe delivery or is longer-term debt. I would propose the smallest useful deliverable, the risk controls it needs, and the larger improvements I would defer. To get buy-in, I would discuss the options with maintainers and the decision owner, explicitly inviting context I do not yet have. I would make reversible progress while we align rather than announce a rewrite. At the end of the two weeks, I would assess both the delivered behavior and whether the deferred risk needs a follow-up commitment.",
      "checks": [
        "Sequence actions and explain deferrals."
      ],
      "followups": [
        "What if maintainers say the old design is fine?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if maintainers say the old design is fine?",
          "answer": "I would ask what constraints the design addresses and test my concern against an actual failure or requirement. If the issue is not blocking the milestone, I would avoid a rewrite and document a measurable reason to revisit it later."
        }
      ]
    },
    {
      "id": "multi-inclusion",
      "category": "Inclusion",
      "type": "Multi-part",
      "prompt": "A teammate is excluded, quality is falling, and the deadline is near. How do you help, protect delivery, and know your approach worked?",
      "answer": "I would treat support for the teammate and delivery planning as related but separate responsibilities. First I would check privately what they are experiencing and how they want to contribute, without assuming the reason for exclusion or poor quality. I would make participation easier through a clearer review process or asynchronous input, and agree on manageable tasks and review points. At the same time, I would surface deadline risks and options such as scope reduction or pairing rather than silently expect someone to catch up. I would check whether quality and delivery improved and whether the person felt able to contribute. Meeting the date alone would not prove the underlying team problem was fixed.",
      "checks": [
        "Person, delivery, feedback loop."
      ],
      "followups": [
        "What if they do not want your intervention?"
      ],
      "story": "",
      "source": "",
      "answerKind": "Complete rehearsal answer",
      "answerBasis": "Draft based on resume, repository, and shared project details",
      "followupAnswers": [
        {
          "question": "What if they do not want your intervention?",
          "answer": "I would respect their preference, ask what support would be welcome, and avoid making their situation a public story. I can still improve the team’s meeting and review process without speaking on their behalf."
        }
      ]
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
  ],
  "answerNotice": "All questions include complete rehearsal answers. These are practice drafts, not independently verified employment records. Inferred examples are marked; hypothetical designs use “I would.”"
};
