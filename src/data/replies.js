// Mock/local reply data. This will eventually be replaced by a real,
// manually curated database — for now it powers both the public pages
// and the admin dashboard (in-memory only, nothing persists on refresh).

const RAW = [
  // ---------- Start the Conversation ----------
  { category: 'Start the Conversation', subcategory: 'First Message', situation: 'Sending the very first message', incomingMessage: '', reply: "Hey, I'm [name] — figured I'd say hi before I lost the nerve.", tone: 'Friendly', tags: ['first message'], featured: true, popularity: 88 },
  { category: 'Start the Conversation', subcategory: 'Crush', situation: 'Texting your crush first', incomingMessage: '', reply: "Okay, this is me finally texting you first — hi.", tone: 'Warm', tags: ['crush', 'opener'], popularity: 84 },
  { category: 'Start the Conversation', subcategory: 'Instagram / DM', situation: 'Sliding into DMs', incomingMessage: '', reply: "Your latest post lived in my head rent-free, so here I am.", tone: 'Casual', tags: ['dm', 'instagram'], popularity: 74 },
  { category: 'Start the Conversation', subcategory: 'Dating', situation: 'Opening a dating app match', incomingMessage: '', reply: "Okay, out of everything on your profile, I have to ask about the hiking photo first.", tone: 'Curious', tags: ['dating app'], popularity: 79 },
  { category: 'Start the Conversation', subcategory: 'Reconnecting', situation: 'Texting someone after a while', incomingMessage: '', reply: "It's been way too long — how have you actually been?", tone: 'Warm', tags: ['reconnect'], popularity: 66 },
  { category: 'Start the Conversation', subcategory: 'After "Hi"', situation: 'They only said hi', incomingMessage: 'Hi', reply: "Hi! Perfect timing, I was just about to message you anyway.", tone: 'Friendly', tags: ['hi'], popularity: 60 },
  { category: 'Start the Conversation', subcategory: 'Dry Conversation', situation: 'Conversation went quiet', incomingMessage: 'yeah', reply: "Okay real talk, tell me something random about your day.", tone: 'Direct', tags: ['dry chat'], popularity: 72 },

  // ---------- GF / BF ----------
  { category: 'GF / BF', subcategory: 'Romantic', situation: "It's your anniversary", incomingMessage: 'Happy anniversary, love!', reply: 'Every year with you feels like the best one yet. Happy anniversary, my love.', tone: 'Romantic', tags: ['anniversary', 'romantic'], featured: true, popularity: 92 },
  { category: 'GF / BF', subcategory: 'Cute', situation: 'They sent a selfie', incomingMessage: 'Rate this pic 😅', reply: "10/10, but you're always my favorite view.", tone: 'Cute', tags: ['selfie', 'cute'], popularity: 81 },
  { category: 'GF / BF', subcategory: 'Flirty', situation: 'They complimented you', incomingMessage: 'You look good today', reply: 'Only today? I thought you noticed earlier. 😉', tone: 'Flirty', tags: ['compliment', 'flirty'], featured: true, popularity: 95 },
  { category: 'GF / BF', subcategory: 'Funny', situation: 'They sent a meme', incomingMessage: 'This is so us 😂', reply: "Finally someone with good taste 😂", tone: 'Funny', tags: ['meme', 'funny'], featured: true, popularity: 90 },
  { category: 'GF / BF', subcategory: 'Sorry', situation: 'You forgot to reply for hours', incomingMessage: "You could've at least texted back", reply: "You're right, I'm sorry — I got caught up and should've messaged you. I'll do better.", tone: 'Sorry', tags: ['apology'], popularity: 74 },
  { category: 'GF / BF', subcategory: 'Angry', situation: 'They are upset with you', incomingMessage: "I'm not okay with this", reply: "I hear you, and I don't want you to feel this way. Can we talk it through properly?", tone: 'Calm', tags: ['conflict', 'angry'], popularity: 77 },
  { category: 'GF / BF', subcategory: 'Missing Them', situation: 'Long distance check-in', incomingMessage: 'I miss you', reply: 'I miss you more than you know. Counting down till I see you again.', tone: 'Sweet', tags: ['missing', 'distance'], popularity: 83 },
  { category: 'GF / BF', subcategory: 'Good Morning', situation: 'Morning text', incomingMessage: 'Good morning', reply: 'Good morning to the best part of my day, every day.', tone: 'Sweet', tags: ['morning'], popularity: 70 },
  { category: 'GF / BF', subcategory: 'Good Night', situation: 'Night text', incomingMessage: 'Going to sleep now', reply: 'Sweet dreams — save a little space in there for me.', tone: 'Sweet', tags: ['night'], popularity: 69 },
  { category: 'GF / BF', subcategory: 'Everyday', situation: 'A regular check-in during the day', incomingMessage: 'What are you up to?', reply: "Just thinking about you between everything else, honestly. What about you?", tone: 'Sincere', tags: ['everyday'], popularity: 65 },

  // ---------- Crush / Flirting ----------
  { category: 'Crush / Flirting', subcategory: 'Smooth', situation: 'Keeping it cool', incomingMessage: "Haha you're funny", reply: "I have my moments — mostly when I'm talking to you.", tone: 'Smooth', tags: ['smooth'], popularity: 75 },
  { category: 'Crush / Flirting', subcategory: 'Cute', situation: 'Sweet exchange', incomingMessage: "You're sweet", reply: "Only for people worth being sweet to.", tone: 'Cute', tags: ['cute'], popularity: 73 },
  { category: 'Crush / Flirting', subcategory: 'Funny', situation: 'Lightening the mood', incomingMessage: '', reply: "Are you a Wi-Fi signal? Because I'm definitely feeling a connection.", tone: 'Funny', tags: ['funny'], popularity: 78 },
  { category: 'Crush / Flirting', subcategory: 'Confident', situation: 'Making the first move', incomingMessage: '', reply: "I wasn't going to say anything, but you're kind of hard to ignore.", tone: 'Confident', tags: ['confident'], popularity: 80 },
  { category: 'Crush / Flirting', subcategory: 'Teasing', situation: 'They teased you first', incomingMessage: "Bet you can't even handle me", reply: "Try me — I've got jokes and I'm not afraid to use them.", tone: 'Teasing', tags: ['tease'], popularity: 71 },
  { category: 'Crush / Flirting', subcategory: 'Clever', situation: 'A witty comeback', incomingMessage: "You're trouble", reply: "Only the good kind — the kind worth sticking around for.", tone: 'Clever', tags: ['clever'], popularity: 76 },

  // ---------- Crazy Flirting Lines ----------
  { category: 'Crazy Flirting Lines', subcategory: 'Bold', situation: 'Making the first move', incomingMessage: '', reply: "I wasn't going to say anything, but you're kind of hard to ignore.", tone: 'Bold', tags: ['bold'], popularity: 80 },
  { category: 'Crazy Flirting Lines', subcategory: 'Unexpected', situation: 'Catching them off guard', incomingMessage: '', reply: "Fair warning: talking to you might become a habit I don't want to break.", tone: 'Unexpected', tags: ['unexpected'], popularity: 79 },
  { category: 'Crazy Flirting Lines', subcategory: 'Smooth', situation: 'Keeping it cool', incomingMessage: 'Haha okay smooth talker', reply: "I only bring out the good lines for people worth it.", tone: 'Smooth', tags: ['smooth'], popularity: 76 },
  { category: 'Crazy Flirting Lines', subcategory: 'Funny', situation: 'Lightening the mood', incomingMessage: '', reply: "Are you a Wi-Fi signal? Because I'm definitely feeling a connection.", tone: 'Funny', tags: ['funny', 'pickup'], popularity: 84 },
  { category: 'Crazy Flirting Lines', subcategory: 'Clever', situation: 'A witty comeback', incomingMessage: "You're trouble", reply: "Only the good kind — the kind worth sticking around for.", tone: 'Clever', tags: ['clever'], popularity: 73 },
  { category: 'Crazy Flirting Lines', subcategory: 'Teasing', situation: 'Playful push and pull', incomingMessage: "You're so annoying", reply: "You keep replying though, so I must be doing something right.", tone: 'Teasing', tags: ['tease'], popularity: 77 },
  { category: 'Crazy Flirting Lines', subcategory: 'One-Liners', situation: 'Quick and punchy', incomingMessage: '', reply: "You + me = a conversation I don't want to end.", tone: 'One-Liner', tags: ['oneliner'], popularity: 70 },

  // ---------- From Friends to Something More ----------
  { category: 'From Friends to Something More', subcategory: 'Subtle Hints', situation: 'Dropping a hint', incomingMessage: "Haha you're the best", reply: "You're pretty easy to like, you know that?", tone: 'Subtle', tags: ['hint'], popularity: 75 },
  { category: 'From Friends to Something More', subcategory: 'Flirty Replies', situation: 'Testing the waters', incomingMessage: 'lol stop', reply: "Make me. Or don't, I kind of like this.", tone: 'Flirty', tags: ['flirty'], popularity: 78 },
  { category: 'From Friends to Something More', subcategory: 'Testing the Vibe', situation: 'Seeing how they respond', incomingMessage: '', reply: "Would it be weird if I said hanging out with you is the best part of my week?", tone: 'Curious', tags: ['testing'], popularity: 70 },
  { category: 'From Friends to Something More', subcategory: 'Asking Them Out', situation: 'Making the ask', incomingMessage: '', reply: "This might change things a bit, but — want to grab dinner, just the two of us?", tone: 'Bold', tags: ['ask out'], featured: true, popularity: 85 },
  { category: 'From Friends to Something More', subcategory: 'Confessing Feelings', situation: 'Being honest about feelings', incomingMessage: '', reply: "I've been meaning to say this for a while — I think I like you as more than a friend.", tone: 'Sincere', tags: ['confession'], popularity: 80 },
  { category: 'From Friends to Something More', subcategory: 'When They Flirt Back', situation: 'They flirted first', incomingMessage: 'Maybe I like you too', reply: "Good. Because I was hoping you'd say that.", tone: 'Warm', tags: ['flirt back'], popularity: 83 },

  // ---------- Friends ----------
  { category: 'Friends', subcategory: 'Funny', situation: 'They sent something ridiculous', incomingMessage: '😭😭😭', reply: "I can't, I'm actually crying laughing right now.", tone: 'Funny', tags: ['funny'], popularity: 76 },
  { category: 'Friends', subcategory: 'Comebacks', situation: 'They roasted you', incomingMessage: "You're so slow lol", reply: "Slow and steady still beats whatever you call your personality.", tone: 'Comeback', tags: ['comeback'], popularity: 81 },
  { category: 'Friends', subcategory: 'Playful Savage', situation: 'Friendly roasting', incomingMessage: 'Nice outfit... I guess', reply: "Coming from you, I'll take that as the compliment of the century.", tone: 'Savage', tags: ['roast'], popularity: 79 },
  { category: 'Friends', subcategory: 'Plans', situation: 'Making weekend plans', incomingMessage: 'What are we doing this weekend', reply: "I'm thinking food, a movie, and zero responsibilities. You in?", tone: 'Casual', tags: ['plans'], popularity: 64 },
  { category: 'Friends', subcategory: 'Apologies', situation: 'Patching things up', incomingMessage: "You kind of hurt my feelings", reply: "I'm really sorry, that wasn't my intention at all. You matter too much to me for that.", tone: 'Sorry', tags: ['apology'], popularity: 71 },
  { category: 'Friends', subcategory: 'Congratulations', situation: 'They shared good news', incomingMessage: 'I got the job!!', reply: "YES! So proud of you, this is so well deserved 🎉", tone: 'Excited', tags: ['congrats'], popularity: 85 },
  { category: 'Friends', subcategory: 'Group Chat', situation: 'Group chat banter', incomingMessage: 'someone explain this chat 😭', reply: "Nobody can explain this chat, we just survive it together.", tone: 'Funny', tags: ['group chat'], popularity: 73 },

  // ---------- Boss / Manager ----------
  { category: 'Boss / Manager', subcategory: 'Leave', situation: 'Requesting time off', incomingMessage: '', reply: "Hi, I'd like to request leave from [date] to [date] for personal reasons. Let me know if that works.", tone: 'Formal', tags: ['leave'], popularity: 74 },
  { category: 'Boss / Manager', subcategory: 'Late Work', situation: 'Explaining a delay', incomingMessage: 'Any update on the report?', reply: "Apologies for the delay — I'll have it completed and sent over by end of day.", tone: 'Professional', tags: ['delay'], featured: true, popularity: 88 },
  { category: 'Boss / Manager', subcategory: 'Task Update', situation: 'Sharing progress', incomingMessage: "How's the task going?", reply: "Making good progress — on track to finish by the deadline. I'll flag it if anything changes.", tone: 'Professional', tags: ['update'], popularity: 79 },
  { category: 'Boss / Manager', subcategory: 'Mistake / Apology', situation: 'Owning up to an error', incomingMessage: '', reply: "I made an error in the report — I've corrected it and I'm double-checking my work going forward.", tone: 'Accountable', tags: ['mistake'], popularity: 70 },
  { category: 'Boss / Manager', subcategory: 'Meeting', situation: 'Confirming a meeting', incomingMessage: 'Can we meet tomorrow at 3?', reply: "3 PM works well for me. I'll be ready with the updates.", tone: 'Professional', tags: ['meeting'], popularity: 65 },
  { category: 'Boss / Manager', subcategory: 'Work From Home', situation: 'Requesting WFH', incomingMessage: '', reply: "Would it be possible to work from home tomorrow? I'll be fully reachable and available as usual.", tone: 'Formal', tags: ['wfh'], popularity: 72 },
  { category: 'Boss / Manager', subcategory: 'Salary', situation: 'Bringing up compensation', incomingMessage: '', reply: "I'd like to schedule some time to discuss my compensation given my current responsibilities.", tone: 'Formal', tags: ['salary'], popularity: 77 },
  { category: 'Boss / Manager', subcategory: 'General', situation: 'General check-in', incomingMessage: "How's everything going?", reply: "Going well, thank you — happy to share more detail if useful.", tone: 'Professional', tags: ['general'], popularity: 60 },

  // ---------- Interviewer ----------
  { category: 'Interviewer', subcategory: 'Interview Answers', situation: 'Asked about strengths', incomingMessage: 'What would you say is your biggest strength?', reply: "I'd say my ability to stay organized under pressure while still delivering quality work.", tone: 'Confident', tags: ['interview'], featured: true, popularity: 86 },
  { category: 'Interviewer', subcategory: 'Follow-up', situation: 'Following up after interview', incomingMessage: '', reply: "Thank you again for the opportunity to interview — I wanted to check in on the timeline for next steps.", tone: 'Professional', tags: ['followup'], popularity: 78 },
  { category: 'Interviewer', subcategory: 'Thank You', situation: 'After the interview', incomingMessage: '', reply: "Thank you for taking the time to speak with me today — I really enjoyed learning more about the role.", tone: 'Polite', tags: ['thankyou'], popularity: 75 },
  { category: 'Interviewer', subcategory: 'Salary Discussion', situation: 'Asked about salary expectations', incomingMessage: 'What are your salary expectations?', reply: "Based on my experience and the market for this role, I'm looking at a range of [range], though I'm open to discussion.", tone: 'Confident', tags: ['salary'], popularity: 82 },
  { category: 'Interviewer', subcategory: 'Availability', situation: 'Asked about start date', incomingMessage: 'When could you start?', reply: "I'd be able to start within two weeks of an offer, and I'm happy to discuss flexibility if needed.", tone: 'Professional', tags: ['availability'], popularity: 68 },
  { category: 'Interviewer', subcategory: 'Rejection Response', situation: 'Responding to a rejection', incomingMessage: '', reply: "Thank you for letting me know, and for the opportunity to interview. I'd love to be considered for future roles.", tone: 'Gracious', tags: ['rejection'], popularity: 63 },

  // ---------- Client / Customer ----------
  { category: 'Client / Customer', subcategory: 'First Response', situation: 'New client inquiry', incomingMessage: "Hi, I'm interested in your services", reply: "Hi! Thanks for reaching out — happy to share more details. What are you looking to achieve?", tone: 'Friendly', tags: ['inquiry'], popularity: 77 },
  { category: 'Client / Customer', subcategory: 'Pricing', situation: 'Asked about pricing', incomingMessage: "What's the pricing for this?", reply: "Happy to share — pricing depends a bit on scope, so let me put together a quick breakdown for you.", tone: 'Professional', tags: ['pricing'], popularity: 72 },
  { category: 'Client / Customer', subcategory: 'Delay', situation: 'Explaining a delay', incomingMessage: '', reply: "Thanks for letting me know. I'll take care of it and update you shortly.", tone: 'Professional', tags: ['delay'], featured: true, popularity: 91 },
  { category: 'Client / Customer', subcategory: 'Follow-up', situation: 'Following up on a proposal', incomingMessage: '', reply: "Just following up on the proposal I sent over — happy to answer any questions before you decide.", tone: 'Professional', tags: ['followup'], popularity: 69 },
  { category: 'Client / Customer', subcategory: 'Payment', situation: 'Payment reminder', incomingMessage: '', reply: "Just a friendly reminder that the invoice is due this week — let me know if you need anything from my end.", tone: 'Polite', tags: ['payment'], popularity: 66 },
  { category: 'Client / Customer', subcategory: 'Apology', situation: 'Apologizing for an issue', incomingMessage: '', reply: "I'm sorry for the inconvenience this caused — I've fixed the issue and I'm putting steps in place so it doesn't happen again.", tone: 'Apologetic', tags: ['apology'], popularity: 74 },
  { category: 'Client / Customer', subcategory: 'Thank You', situation: 'Thanking a client', incomingMessage: '', reply: "Thank you for your continued trust — it means a lot, and I'm looking forward to what's next.", tone: 'Warm', tags: ['thankyou'], popularity: 70 },

  // ---------- Coworker ----------
  { category: 'Coworker', subcategory: 'Help', situation: 'Asking for help', incomingMessage: '', reply: "Hey, do you have a few minutes to help me look at something? I'm stuck on one part.", tone: 'Casual', tags: ['help'], popularity: 64 },
  { category: 'Coworker', subcategory: 'Updates', situation: 'Sharing a quick update', incomingMessage: 'Any update on your part?', reply: "Almost done on my end — should have it ready for you by this afternoon.", tone: 'Professional', tags: ['update'], popularity: 68 },
  { category: 'Coworker', subcategory: 'Meetings', situation: 'Rescheduling a meeting', incomingMessage: 'Can we move our sync?', reply: "Works for me — does later this afternoon work, or would tomorrow morning be better?", tone: 'Flexible', tags: ['meeting'], popularity: 60 },
  { category: 'Coworker', subcategory: 'Collaboration', situation: 'Proposing to team up', incomingMessage: '', reply: "I think our parts overlap a bit — want to sync up so we're not duplicating work?", tone: 'Collaborative', tags: ['collaboration'], popularity: 66 },
  { category: 'Coworker', subcategory: 'Apology', situation: 'Apologizing to a teammate', incomingMessage: '', reply: "Sorry about the mix-up earlier — that was on me, and I'll make sure it's sorted before end of day.", tone: 'Accountable', tags: ['apology'], popularity: 71 },
  { category: 'Coworker', subcategory: 'Casual Professional', situation: 'Friendly office chat', incomingMessage: 'Rough day?', reply: "A bit, but almost through it — coffee is doing most of the heavy lifting today.", tone: 'Casual', tags: ['casual'], popularity: 58 },,

  // -------- GF / BF MINI-CONVERSATIONS --------
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Flirt casually",
    "yourMessage": "You have something on your face.",
    "theirResponse": "What?",
    "reply": "Your cuteness.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Make her smile",
    "yourMessage": "Can I tell you something weird?",
    "theirResponse": "What?",
    "reply": "Your name keeps showing up in my thoughts.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "Start flirting",
    "yourMessage": "I think you have a problem.",
    "theirResponse": "What problem?",
    "reply": "You're becoming way too attractive.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Compliment indirectly",
    "yourMessage": "Do you know what looks good on you?",
    "theirResponse": "What?",
    "reply": "Literally everything.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Make her curious",
    "yourMessage": "I just realized something about you.",
    "theirResponse": "What?",
    "reply": "You're dangerously easy to like.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "Cute tease",
    "yourMessage": "Stop doing that.",
    "theirResponse": "Doing what?",
    "reply": "Being this cute. I'm trying to concentrate.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "Make her blush",
    "yourMessage": "I have a question.",
    "theirResponse": "Ask.",
    "reply": "How do you look this good without even trying?",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "When she says Really",
    "yourMessage": "You're actually pretty special.",
    "theirResponse": "Really?",
    "reply": "Unfortunately for me, yes. Now I can't stop liking you.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Playful challenge",
    "yourMessage": "I bet you can't make me smile.",
    "theirResponse": "Why?",
    "reply": "Because you already made me smile just by texting.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "When she's bored",
    "yourMessage": "Want to know how to fix your boredom?",
    "theirResponse": "How?",
    "reply": "Give me your attention for five minutes.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Make her curious",
    "yourMessage": "Guess what I like most about you.",
    "theirResponse": "What?",
    "reply": "The fact that I keep finding new things to like.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "Romantic tease",
    "yourMessage": "I think I know your biggest weakness.",
    "theirResponse": "What?",
    "reply": "Me.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Ask for a photo",
    "yourMessage": "Send me a picture.",
    "theirResponse": "Why?",
    "reply": "I need proof that my favorite person is actually this cute.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "When she says I'm ugly",
    "yourMessage": "Who told you that?",
    "theirResponse": "Nobody.",
    "reply": "Good. Because I was about to have a serious conversation with them.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she says I look bad",
    "yourMessage": "Bad?",
    "theirResponse": "Yeah.",
    "reply": "Then my definition of beautiful is definitely broken.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Make her feel special",
    "yourMessage": "You know what I like about talking to you?",
    "theirResponse": "What?",
    "reply": "I never want the conversation to end.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Late-night flirting",
    "yourMessage": "Are you still awake?",
    "theirResponse": "Yes, why?",
    "reply": "Because apparently my favorite person isn't letting me sleep either.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "When she asks what you're doing",
    "yourMessage": "Guess what I'm doing.",
    "theirResponse": "What?",
    "reply": "Thinking about you. Again.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "Playful accusation",
    "yourMessage": "I need to report you.",
    "theirResponse": "For what?",
    "reply": "For stealing my attention all day.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she asks if you miss her",
    "yourMessage": "Want the honest answer?",
    "theirResponse": "Yes.",
    "reply": "More than I want to admit.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "Make her blush",
    "yourMessage": "Don't smile.",
    "theirResponse": "Why?",
    "reply": "Because I already like you enough.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Cute compliment",
    "yourMessage": "I figured out why you're so cute.",
    "theirResponse": "Why?",
    "reply": "Because the universe clearly wanted to spoil me.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "What do you like about me",
    "yourMessage": "I figured out what I like most about you.",
    "theirResponse": "What?",
    "reply": "How much time do you have? The list is getting long.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Tell her how she affects you",
    "yourMessage": "I shouldn't tell you this.",
    "theirResponse": "Tell me what?",
    "reply": "You make my day better without even trying.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "After she compliments you",
    "yourMessage": "You're making me blush.",
    "theirResponse": "Really?",
    "reply": "Yeah. But I think you enjoy doing that.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Playful",
    "situation": "When she says I love you",
    "yourMessage": "I love you too.",
    "theirResponse": "Really?",
    "reply": "Obviously. Did you think I was going to let you win that easily?",
    "tone": "Playful",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "When she says you're sweet",
    "yourMessage": "You're sweet.",
    "theirResponse": "Only with you.",
    "reply": "Why? You bring out that side of me.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "When she says you're annoying",
    "yourMessage": "You're annoying.",
    "theirResponse": "But you still talk to me.",
    "reply": "So I'm your favorite annoying person.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "When she's angry",
    "yourMessage": "I'm angry.",
    "theirResponse": "Should I be scared?",
    "reply": "Okay, but can I apologize before I get arrested?",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Make up after a small argument",
    "yourMessage": "Are we still fighting?",
    "theirResponse": "Maybe.",
    "reply": "I don't like this version of us. Come back.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "When she's sleepy",
    "yourMessage": "I'm sleepy.",
    "theirResponse": "Then go sleep.",
    "reply": "Wait… I wasn't ready to stop talking to you.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "Good night flirting",
    "yourMessage": "Good night.",
    "theirResponse": "That's it?",
    "reply": "Okay fine… good night, beautiful. Dream about me.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "Good morning",
    "yourMessage": "Good morning ❤️",
    "theirResponse": "Did you sleep well?",
    "reply": "Yeah, but waking up to your message made it better.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she asks where you are",
    "yourMessage": "Where are you?",
    "theirResponse": "Guess.",
    "reply": "Somewhere wishing you were here.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "When she asks who you love",
    "yourMessage": "Who do you love?",
    "theirResponse": "Someone annoying.",
    "reply": "You. Obviously.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she says you forgot her",
    "yourMessage": "You forgot me.",
    "theirResponse": "You didn't text.",
    "reply": "Not texting you and forgetting you are two completely different things.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she says you're busy",
    "yourMessage": "You're busy.",
    "theirResponse": "Maybe I am.",
    "reply": "But never too busy for you.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "Ask for attention",
    "yourMessage": "I need something from you.",
    "theirResponse": "What?",
    "reply": "Five minutes of your undivided attention.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "When she sends a selfie",
    "yourMessage": "Okay, that's unfair.",
    "theirResponse": "What?",
    "reply": "How am I supposed to focus after seeing that?",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she asks how she looks",
    "yourMessage": "How do I look?",
    "theirResponse": "Honestly?",
    "reply": "Like someone I could stare at for way too long.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "Make her laugh",
    "yourMessage": "I have bad news.",
    "theirResponse": "What happened?",
    "reply": "I think I'm addicted to talking to you.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "When she says nothing",
    "yourMessage": "Nothing.",
    "theirResponse": "Yeah.",
    "reply": "Then let me become something interesting.",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she says tell me something",
    "yourMessage": "Tell me something.",
    "theirResponse": "Okay.",
    "reply": "I like you. That's the something.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she asks why me",
    "yourMessage": "Why me?",
    "theirResponse": "I don't know.",
    "reply": "My heart apparently made the decision before my brain got a vote.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Flirty",
    "situation": "When she catches you staring",
    "yourMessage": "You're staring.",
    "theirResponse": "Am I?",
    "reply": "Can you blame me?",
    "tone": "Flirty",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Funny",
    "situation": "When she says stop flirting",
    "yourMessage": "Stop flirting.",
    "theirResponse": "Okay.",
    "reply": "No. I just wanted to see if you'd believe me.",
    "tone": "Funny",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "When she asks if she looks cute",
    "yourMessage": "Do I look cute?",
    "theirResponse": "Cute?",
    "reply": "That's an understatement.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "When she's cold",
    "yourMessage": "I'm cold.",
    "theirResponse": "Wear something warm.",
    "reply": "Then I guess you need a hug.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Cute",
    "situation": "When she wishes you were there",
    "yourMessage": "I wish you were here.",
    "theirResponse": "Same.",
    "reply": "Yeah. I'd probably be smiling like an idiot right now.",
    "tone": "Cute",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  },
  {
    "category": "GF / BF",
    "subcategory": "Romantic",
    "situation": "End the conversation romantically",
    "yourMessage": "Before you go…",
    "theirResponse": "What?",
    "reply": "Just wanted to remind you that you're my favorite notification.",
    "tone": "Romantic",
    "tags": [
      "conversation",
      "gf-bf"
    ],
    "featured": false,
    "popularity": 70
  }
];

export const REPLIES = RAW.map((item, index) => ({
  id: index + 1,
  featured: false,
  popularity: 50,
  tags: [],
  situation: '',
  incomingMessage: '',
  ...item,
}));

export const getRepliesByCategory = (categoryLabel) => REPLIES.filter((r) => r.category === categoryLabel);

export const getFeaturedReplies = (limit = 3) =>
  [...REPLIES].filter((r) => r.featured).sort((a, b) => b.popularity - a.popularity).slice(0, limit);
