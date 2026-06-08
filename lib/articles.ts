export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "can-event-venues-and-residential-neighborhoods-coexist",
    title: "Can Event Venues and Residential Neighborhoods Coexist?",
    description:
      "Yes — but not by accident. What it actually takes for an event venue and the homes around it to thrive together, drawn from how Los Angeles neighborhoods like Pico-Robertson live with commercial corridors.",
    date: "2026-01-12",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Walk down almost any commercial corridor in Los Angeles and you will find the same arrangement repeated block after block: businesses facing the boulevard, homes tucked directly behind them, and an alley splitting the difference. Pico Boulevard is a textbook example. The zoning maps drew that line decades ago, and the people on both sides of it have been negotiating it ever since.",
          "So when an event venue opens on a corridor like this, the question is not whether it belongs there. Commercially, it does. The question is whether it can operate in a way that acknowledges what sits thirty feet behind it: bedrooms, kitchens, garages, and people who were there first and plan to stay.",
        ],
      },
      {
        heading: "Coexistence is an operations problem, not a values problem",
        paragraphs: [
          "Most venue-neighborhood conflict gets framed as a clash of values — commerce versus quiet, celebration versus sleep. That framing is convenient and almost always wrong. Residents near successful venues rarely object to the existence of events. They object to specific, recurring, fixable operational choices: speakers aimed the wrong direction, load-outs at midnight, an alley used as a staging area, no one to call when something goes sideways.",
          "Every one of those is a logistics decision. And logistics decisions can be made differently. Venues across Los Angeles host hundreds of events a year next to homes without generating organized neighborhood opposition, because they treat the surrounding blocks as part of their operating environment rather than an inconvenience adjacent to it.",
        ],
      },
      {
        heading: "What the successful ones do",
        paragraphs: [
          "The venues that coexist well share a recognizable playbook. They manage amplified sound deliberately — directional speakers, monitored decibel levels, hard cutoff times that reflect residential quiet hours rather than testing them. They schedule deliveries and load-outs inside reasonable windows. They keep alleys and driveways passable at all times, because they understand that a resident blocked from their own garage becomes an opponent for life.",
          "Above all, they communicate. A posted phone number that a human answers during events. A liaison whose actual job is the neighborhood. Advance notice when a large event is coming. None of this is expensive relative to venue revenue, and all of it is cheaper than the alternative: hearings, permit challenges, and a neighborhood that documents everything.",
        ],
      },
      {
        heading: "What residents owe in return",
        paragraphs: [
          "Coexistence runs both directions. Residents who want to be taken seriously need to bring specifics rather than sentiment — dates, times, recordings, patterns. They need to distinguish between a bad night and a bad policy. And they need to acknowledge what a well-run venue contributes: foot traffic for neighboring businesses, an occupied building instead of a vacant one, investment in a corridor that needs it.",
          "That is the spirit of advocacy worth practicing: assume the business wants to be a good neighbor, document the cases where it has not been, and propose fixes that cost less than the conflict. Most operators, presented with that, take the deal.",
        ],
      },
      {
        paragraphs: [
          "Can event venues and residential neighborhoods coexist? They already do, all over this city. The only open question on any given block is whether the venue decides to join them.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-a-business-a-good-neighbor",
    title: "What Makes a Business a Good Neighbor?",
    description:
      "Good neighbors are made of habits, not slogans. The five operational habits that separate businesses a neighborhood defends from businesses a neighborhood documents.",
    date: "2026-01-26",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Every business says it values the community. The phrase appears on websites, in press releases, and occasionally on banners. But residents do not experience slogans. They experience operations — what happens on the sidewalk, in the alley, and through their windows at 11 PM. Being a good neighbor is not a sentiment. It is a set of habits.",
        ],
      },
      {
        heading: "Habit one: predictability",
        paragraphs: [
          "Neighborhoods can adapt to almost anything they can predict. A business that keeps consistent hours, schedules deliveries inside known windows, and gives notice before unusual activity earns a kind of trust that no marketing can buy. Surprise is the enemy. The loudest complaints in any neighborhood are rarely about volume alone — they are about not knowing when it will start, when it will end, or whether anyone is in charge.",
        ],
      },
      {
        heading: "Habit two: containment",
        paragraphs: [
          "A good neighbor keeps its footprint where it belongs. Sound stays on the property. Trash stays in the bins. Vehicles stay out of residential driveways and alley easements. Patrons are guided to appropriate parking rather than left to circle residential blocks. Containment is the physical expression of respect: the business takes responsibility for everything its operation generates, not just the part inside its walls.",
        ],
      },
      {
        heading: "Habit three: reachability",
        paragraphs: [
          "When something goes wrong — and something always eventually goes wrong — the difference between a neighbor and a nuisance is whether anyone picks up the phone. A posted community line, answered during operating hours by someone with authority to act, resolves most issues in minutes. Its absence converts small problems into city complaints, and city complaints into organized opposition. Reachability is the cheapest insurance a business can carry.",
        ],
      },
      {
        heading: "Habit four: responsiveness",
        paragraphs: [
          "Listening is not the same as acting. Businesses with strong community relations close the loop: a complaint produces a change, and the change is communicated back. Residents do not expect perfection. They expect trajectory — evidence that raising an issue once means not having to raise it monthly.",
        ],
      },
      {
        heading: "Habit five: presence",
        paragraphs: [
          "The best neighbor businesses show up — at neighborhood council meetings, in local conversations, occasionally with the venue's doors open to the people who live around it. Presence signals that the business considers itself part of the neighborhood rather than merely located in one.",
          "None of these habits constrain success. They compound it. A business the neighborhood defends has an asset competitors cannot purchase. A business the neighborhood documents has a liability no lawyer can fully fix.",
        ],
      },
    ],
  },
  {
    slug: "importance-of-alley-access-in-dense-urban-areas",
    title: "The Importance of Alley Access in Dense Urban Areas",
    description:
      "In Los Angeles neighborhoods like Pico-Robertson, the alley is infrastructure — often the only route to a resident's own garage. Why blocked alleys matter more than they look.",
    date: "2026-02-09",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "To a visitor, an alley looks like leftover space — a service lane, a shortcut, somewhere to put the dumpsters. To the people who live along it, an alley is infrastructure. In large stretches of Los Angeles, including the blocks off Pico Boulevard, the alley is the only way residents reach their own garages. There is no alternate route. When the alley is blocked, people are simply cut off from their homes.",
        ],
      },
      {
        heading: "A shared lane with unequal stakes",
        paragraphs: [
          "Alleys behind commercial corridors serve two masters. Businesses use them for deliveries, trash collection, and service access. Residents use them for daily arrival and departure. The arrangement works on a simple unwritten rule: temporary use is fine, occupation is not. A delivery truck that takes ten minutes is a fact of urban life. A vehicle that stages for two hours is a barricade.",
          "The stakes are not symmetrical. For a business, alley access is a convenience that affects logistics. For a resident, it determines whether they can get to work, pick up their children, or pull in after a late shift. A caregiver who cannot reach a garage, or a resident with limited mobility parked three blocks away, is not experiencing an inconvenience. They are experiencing the loss of access to their own home.",
        ],
      },
      {
        heading: "Why event operations stress alleys",
        paragraphs: [
          "Event venues concentrate alley demand in ways ordinary retail does not. Catering trucks, rental equipment vans, production vehicles, and rideshare staging all converge in the hours before and after events — precisely the evening hours when residents come and go. Without active management, the alley defaults to whoever arrived first, and a resident's garage becomes the back wall of someone's loading zone.",
          "The fixes are unglamorous and effective: scheduled load-in windows, a staff member managing the alley during events, designated staging away from residential access points, and an absolute rule that the lane stays passable. Venues that adopt these practices essentially eliminate the issue. Venues that do not adopt them generate the single most personal grievance a neighborhood can hold.",
        ],
      },
      {
        paragraphs: [
          "City codes generally prohibit blocking alley rights-of-way, but enforcement is slow and complaint-driven, which is why the practical solution is almost always operational rather than legal. The businesses that get this right understand something simple: the alley is not the back of their property. It is the front of someone's home.",
        ],
      },
    ],
  },
  {
    slug: "community-relations-matter-for-local-businesses",
    title: "Community Relations Matter for Local Businesses",
    description:
      "Neighborhood goodwill is a balance sheet item. How community relations protect permits, reputation, and revenue for local businesses — and what it costs to ignore them.",
    date: "2026-02-23",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "There is a tendency among businesses to treat community relations as a soft concern — nice to have, handled with an occasional sponsorship, safely below the priorities of operations and revenue. This is a miscalculation. For a business physically embedded in a neighborhood, community relations are operations and revenue, just on a delay.",
        ],
      },
      {
        heading: "The neighborhood is a stakeholder whether invited or not",
        paragraphs: [
          "A business chooses its location once. After that, the surrounding residents are permanent stakeholders in everything it does outdoors, after dark, or at volume. They observe more of the operation than any auditor: every late load-out, every blocked driveway, every event that ran past its hour. The only question is what they do with those observations.",
          "Neighborhoods with goodwill absorb the occasional rough night and pick up the phone before picking a fight. Neighborhoods without goodwill keep records. They photograph, timestamp, organize, and show up to hearings. In Los Angeles, where conditional use permits, entertainment permits, and zoning variances run through public processes, an organized neighborhood is one of the few forces that can genuinely constrain how a business operates.",
        ],
      },
      {
        heading: "Goodwill is built in the off-hours",
        paragraphs: [
          "Community relations are not built during a crisis, and they are not built by statements. They are built through unremarkable, repeated behavior: the manager who gives neighbors a heads-up before a large event, the posted phone line that gets answered, the load-out that wraps when it said it would. Each instance is small. The accumulation is decisive.",
          "The inverse also accumulates. Each unanswered complaint and each repeated impact deposits into an account of grievance, and neighborhoods have long memories. By the time opposition becomes visible — petitions, hearings, press — the underlying balance has usually been negative for a long while.",
        ],
      },
      {
        heading: "The economics are not close",
        paragraphs: [
          "Consider the cost of the good-neighbor playbook: some staff hours, sound management, scheduling discipline, and communication. Now consider the cost of its absence: legal fees, permit conditions, hearing delays, reputational damage in the era of location reviews, and the management attention all of it consumes. The playbook is cheaper by an order of magnitude.",
          "Local businesses succeed inside neighborhoods, not despite them. The ones that internalize this early rarely have to learn it later, in a hearing room, at considerably higher prices.",
        ],
      },
    ],
  },
  {
    slug: "balancing-events-and-residential-life-in-los-angeles",
    title: "Balancing Events and Residential Life in Los Angeles",
    description:
      "Los Angeles puts venues and homes side by side by design. How the city's event economy and its residential neighborhoods actually share the same blocks.",
    date: "2026-03-09",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Los Angeles runs on events. Weddings, premieres, brand launches, fundraisers, quinceañeras — the event economy employs tens of thousands of people and animates buildings that would otherwise sit dark. And because of how this city is zoned, a remarkable share of that economy operates within a stone's throw of someone's bedroom.",
          "That adjacency is not a planning error. Commercial corridors like Pico, Venice, and Melrose were always meant to hold businesses with homes immediately behind them. The model works — but only when both sides of the alley respect its terms.",
        ],
      },
      {
        heading: "The terms of the deal",
        paragraphs: [
          "The implicit deal of a mixed corridor is this: businesses get access to a dense, affluent customer base and the city gets activated streets; in exchange, the impacts of commerce stay on the commercial side of the line. Daytime bustle, deliveries, full parking — residents accept all of it as the price of a living neighborhood. What the deal does not include is the commercial operation reaching into homes: amplified sound through bedroom walls, blocked garage access, service trucks idling on residential streets at midnight.",
          "Event venues sit at the sharpest edge of this deal because their peak output — sound, vehicles, crowds — lands in the evening hours when residential tolerance is lowest. The same decibel level that disappears into a Tuesday afternoon is an intrusion at 11 PM on a school night.",
        ],
      },
      {
        heading: "The tools already exist",
        paragraphs: [
          "Los Angeles does not lack rules. The municipal noise ordinance restricts amplified sound that crosses into residential property, particularly at night. Alley rights-of-way are protected. Many venues operate under conditional use permits with specific conditions about hours, sound, and operations. The gap is rarely regulatory; it is the distance between what permits assume and what operations deliver, enforced by a complaint system that moves slowly when it moves at all.",
          "Which is why the balance, in practice, is struck operationally or not at all. Hard sound cutoffs that anticipate the ordinance instead of testing it. Load-outs scheduled like the neighborhood exists. Traffic and rideshare staging plans for large events. A reachable human during operating hours. Venues that adopt these terms vanish from the complaint rolls; their neighbors go back to not thinking about them, which is the truest form of coexistence.",
        ],
      },
      {
        paragraphs: [
          "The city's event economy and its neighborhoods are not opponents. They are roommates with a shared wall and different schedules. Roommates make it work the same way venues and residents do: by agreeing on quiet hours, keeping shared spaces clear, and answering when the other one knocks.",
        ],
      },
    ],
  },
  {
    slug: "how-noise-impacts-urban-neighborhoods",
    title: "How Noise Impacts Urban Neighborhoods",
    description:
      "Recurring nighttime noise is a documented health and quality-of-life issue, not a matter of sensitivity. What research says about sound in residential areas — and why low-frequency music is its own problem.",
    date: "2026-03-23",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Noise is the most commonly dismissed neighborhood complaint, usually with some version of: it's a city, things make sound. This is true and beside the point. The issue in dense neighborhoods is not the existence of sound. It is recurring, avoidable, nighttime intrusion — and on that subject, the research is not ambiguous.",
        ],
      },
      {
        heading: "What chronic noise actually does",
        paragraphs: [
          "Public health bodies, including the World Health Organization, have linked sustained environmental noise exposure to sleep disruption, elevated stress response, cardiovascular strain, and impaired concentration and learning. The mechanism matters: the body responds to nighttime noise even when the sleeper does not consciously wake. People who say they have gotten used to it are frequently still paying for it physiologically.",
          "The disruption compounds socially. Sleep-deprived households are more irritable, less productive, and less patient — including with each other. When a neighborhood absorbs this on a recurring basis, the cost is real even though it never appears on anyone's ledger.",
        ],
      },
      {
        heading: "Why amplified music is a special case",
        paragraphs: [
          "Not all sound behaves alike. The low-frequency component of amplified music — bass — travels farther, bends around obstacles, and passes through walls that block higher frequencies. This is why a resident can be unable to make out the song but can feel the beat in their chest two streets away, and why closed windows often make little difference. A venue measuring sound at its own property line in mid-range frequencies can be technically attentive and still be projecting bass into bedrooms a block over.",
          "Outdoor amplification raises the stakes further, since there is no building envelope to attenuate anything. Responsible operators treat outdoor sound as a different category: directional speaker placement, low-frequency limits, real-time monitoring at the nearest residential receptor rather than at the stage, and earlier cutoffs than indoor programming.",
        ],
      },
      {
        heading: "The asymmetry worth naming",
        paragraphs: [
          "Sound management costs a venue something modest: equipment configuration, a monitoring practice, the occasional turned-down request honored. Unmanaged sound costs the neighborhood sleep, health, and the quiet enjoyment of their homes — nightly, involuntarily, and without compensation. When residents ask for responsible sound management, they are not asking a business to be less successful. They are asking it to stop externalizing one of its operating costs onto the people next door.",
          "Cities write noise ordinances precisely because of this asymmetry. The best venues never make the ordinance do the work. They manage sound because intruding on a thousand bedrooms to entertain three hundred guests is, on reflection, a poor trade — and an unnecessary one, since the technology and practices to avoid it are standard, available, and in use across Los Angeles every weekend.",
        ],
      },
    ],
  },
  {
    slug: "responsible-event-venue-operations",
    title: "Responsible Event Venue Operations: A Practical Standard",
    description:
      "A concrete, checklist-level standard for event venues operating near homes: sound, alley and loading discipline, traffic, and communication. None of it limits success.",
    date: "2026-04-06",
    readingTime: "5 min read",
    sections: [
      {
        paragraphs: [
          "Responsible operation is one of those phrases that can mean everything and therefore nothing. So it is worth being concrete. For an event venue operating adjacent to homes, responsibility is a checklist — specific, achievable, and in use at well-run venues across Los Angeles. Here is what it contains.",
        ],
      },
      {
        heading: "Sound",
        paragraphs: [
          "Amplified sound is engineered, not improvised. Speakers are positioned and aimed to keep energy on the property, with particular attention to low frequencies that travel into surrounding streets. Levels are monitored from the nearest residential receptor, not from the dance floor. Outdoor amplification has a hard, posted cutoff aligned with residential quiet hours — and the cutoff is treated as a commitment, not a suggestion that improves with negotiation. Late-night programming moves indoors, where the building does the work.",
        ],
      },
      {
        heading: "The alley and loading",
        paragraphs: [
          "The alley stays passable at all times — not usually, not except during load-in, but always, because residents reach their garages through it. Deliveries, catering, and production vehicles operate inside scheduled windows that end at a civilized hour. During events, a staff member owns the alley: directing vehicles, keeping staging out of residential access points, and resolving conflicts before a resident has to honk, wait, or call someone.",
        ],
      },
      {
        heading: "Traffic and arrivals",
        paragraphs: [
          "Large events come with a traffic plan: where guests are directed to park, where rideshares stage, how arrival and departure surges are managed so they do not stack on residential blocks. Valet and security staff treat the surrounding streets as part of their zone of responsibility. The measure of success is simple — on event nights, residents can park, leave, and return roughly as they would on any other night.",
        ],
      },
      {
        heading: "Communication",
        paragraphs: [
          "There is a community line, it is posted where neighbors can find it, and during events a person with actual authority answers it. Residents get advance notice of unusually large or late events. Someone on staff owns the neighbor relationship as part of their job description. And complaints produce visible responses — the loop closes, and the same issue does not need raising twice.",
        ],
      },
      {
        paragraphs: [
          "Notice what is absent from this list: anything that caps revenue, limits bookings, or constrains creativity. The standard is compatible with a full calendar and a thriving business. That is precisely what makes it reasonable to ask for — and reasonable to expect.",
        ],
      },
    ],
  },
  {
    slug: "building-trust-between-businesses-and-residents",
    title: "Building Trust Between Businesses and Residents",
    description:
      "Trust between a business and its neighborhood is built through small kept promises and honest follow-through. A practical look at how it forms, how it breaks, and how to repair it.",
    date: "2026-04-20",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Trust between a business and a neighborhood is built the same way as trust between people: through small promises kept repeatedly, and damaged the same way too — through small promises broken repeatedly. There is no shortcut, no campaign, no single grand gesture that substitutes for the accumulation.",
        ],
      },
      {
        heading: "Trust forms around predictions",
        paragraphs: [
          "At its core, trust is the ability to predict someone's behavior favorably. Residents trust a business when they can predict it will end the music when it said it would, keep the alley clear, and answer when called. Every fulfilled prediction strengthens the model. Every violated one weakens it — and violations weigh more. Behavioral research consistently finds that negative experiences register more heavily than positive ones, which means a business needs a sustained run of kept commitments to offset a single memorable failure.",
          "This is why consistency beats generosity in neighborhood relations. An operator who sponsors the street fair but blows through sound cutoffs has purchased goodwill and spent it the same month. An operator who simply does what they said, every week, accumulates something durable.",
        ],
      },
      {
        heading: "How trust breaks — and how it sounds when it does",
        paragraphs: [
          "Trust rarely breaks over a single incident. It breaks over the response to incidents: the unreturned call, the explanation that blames the complainer, the fix promised and not delivered. Residents can absorb a loud night. What they cannot absorb is the growing suspicion that no one on the other side considers it a problem.",
          "You can hear the stages of erosion in how a neighborhood talks. First: they're new, they'll figure it out. Then: we've told them about this before. Finally: write it down, we'll need the record. By the third stage, every interaction is adversarial and every misstep is evidence. Businesses often discover where they stand only when they hear stage-three language at a public hearing.",
        ],
      },
      {
        heading: "Repair is possible and unglamorous",
        paragraphs: [
          "The repair sequence is the same for institutions as for people: acknowledge specifically, change visibly, and sustain the change long enough that the new behavior becomes the prediction. Acknowledgment without change reads as public relations. Change without acknowledgment goes unnoticed. Both together, maintained over months, work — neighborhoods genuinely want to update their priors, because being at odds with a business next door is exhausting.",
          "The deeper point is that trust is an asset with compounding returns. A trusted business gets the benefit of the doubt on its worst night. An untrusted one gets documented on its best. Between those two positions lies most of the difference between operating in a neighborhood and operating against one.",
        ],
      },
    ],
  },
  {
    slug: "what-residents-mean-when-they-ask-for-accountability",
    title: "What Residents Mean When They Ask for Accountability",
    description:
      "Accountability is not punishment. When residents ask a business for accountability, they are asking for ownership, responsiveness, and follow-through — a working relationship, not a confrontation.",
    date: "2026-05-04",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "Accountability has acquired a courtroom flavor — as if asking for it means demanding someone be punished. So when residents say they want accountability from a nearby business, the request is often heard as hostility. It is usually the opposite: a request for a working relationship. Unpacked, accountability means three specific things.",
        ],
      },
      {
        heading: "Ownership: it is someone's job",
        paragraphs: [
          "First, residents want the business to own its full footprint — to treat the sound that leaves the property, the vehicles it attracts, and the alley it shares as part of its operation rather than ambient phenomena with no author. Ownership shows up structurally: a named person whose responsibilities include the neighborhood, a phone line that reaches them, and internal standards for the impacts that matter. The opposite of ownership is the shrug — the suggestion that noise, traffic, and blocked access are simply what cities are like. Residents can tell the difference immediately.",
        ],
      },
      {
        heading: "Responsiveness: raising an issue produces a response",
        paragraphs: [
          "Second, accountability means that when a resident raises a concern, something happens. Not necessarily instant capitulation — residents are not always right, and reasonable people can disagree about a particular night. But a response: the call is taken, the issue is checked, the answer comes back, and where the concern is valid, the operation adjusts. Responsiveness converts residents from adversaries into collaborators, because it gives them a channel that works better than escalation. Its absence teaches the opposite lesson, and neighborhoods learn it quickly.",
        ],
      },
      {
        heading: "Follow-through: the fix stays fixed",
        paragraphs: [
          "Third, and most important, accountability means the adjustment lasts. A quiet month after a complaint, followed by a slow drift back to old practices, is the pattern that exhausts neighborhood patience faster than any single incident. Follow-through is what separates a managed operation from a managed complaint. Residents who have to re-litigate the same issue every season eventually stop calling and start organizing.",
          "None of this involves punishment. No fines, no hearings, no demands that anyone fail. Ownership, responsiveness, follow-through — these are the same standards any well-run business already applies to its customers and vendors. Residents are asking to be added to the list of parties the business considers itself answerable to. From the inside, that is called accountability. From the outside, it just looks like professionalism.",
        ],
      },
    ],
  },
  {
    slug: "the-difference-between-opposition-and-advocacy",
    title: "The Difference Between Opposition and Advocacy",
    description:
      "Opposition wants a business to lose. Advocacy wants it to operate well. Why the distinction matters — and why advocacy is both more fair and more effective.",
    date: "2026-05-18",
    readingTime: "4 min read",
    sections: [
      {
        paragraphs: [
          "When residents organize around a business, observers tend to assume the goal is the business's defeat — fewer events, revoked permits, ideally an empty building. Sometimes that assumption is correct. But there is a different posture, less common and considerably more productive, and the difference between the two determines everything about how the story ends.",
        ],
      },
      {
        heading: "Opposition defines success as the business losing",
        paragraphs: [
          "Opposition is zero-sum by construction. Its goal is reduction: fewer events, shorter hours, revoked permissions, and at the limit, closure. Whatever its origins — and it often begins as unanswered, legitimate grievance — opposition eventually needs the business to fail in order to declare victory. This shapes its methods. Every fact becomes ammunition rather than information. Improvements by the business are unwelcome, because they weaken the case. The relationship becomes a siege, and sieges are long, expensive, and corrosive for everyone within range, including the neighborhood itself.",
        ],
      },
      {
        heading: "Advocacy defines success as the problem ending",
        paragraphs: [
          "Advocacy wants something narrower and more achievable: specific problems, fixed. The music managed, the alley passable, a person who answers the phone. Advocacy can say in one sentence what it wants and can name the day the file gets closed. Because it does not need the business to fail, it can be honest in both directions — crediting what the business does well, documenting what it does poorly, and treating every improvement as a win rather than a setback.",
          "This posture is not softness. Advocacy documents as rigorously as opposition, escalates when ignored, and uses the same public processes when it must. The difference is that its asks are operational rather than existential, which makes them both harder to refuse and cheaper to grant. A hearing officer, a council office, or a reporter can dismiss anger. A dated record of specific, fixable, repeatedly raised issues — attached to a stated desire for the business to succeed — is very difficult to dismiss.",
        ],
      },
      {
        heading: "Why the distinction is worth defending",
        paragraphs: [
          "Businesses respond to the posture they face. Confronted with opposition, the rational move is to lawyer up, concede nothing, and treat the neighborhood as a threat. Confronted with advocacy, the rational move is to fix the problems — they are finite, they are named, and fixing them ends the matter. In other words, advocacy gives the business a good deal, and most operators eventually take good deals.",
          "Residents choosing between the two postures should be clear-eyed: opposition feels stronger and accomplishes less. Advocacy demands more discipline — fairness toward a business that has frustrated you is genuinely hard — but it is the posture that gets the music turned down, the alley cleared, and the neighborhood its evenings back, usually without anyone seeing the inside of a hearing room.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-community-benefits-conversation",
    title: "Community Relations for Venues: Where to Start",
    description:
      "A short, practical primer for venue operators who want a better relationship with the neighborhood: the first five moves, in order, and why they work.",
    date: "2026-06-01",
    readingTime: "3 min read",
    sections: [
      {
        paragraphs: [
          "Suppose a venue operator reads the case for being a good neighbor and is persuaded. What, concretely, is the first move? Here is the sequence that works, in order, drawn from venues that have repaired or simply never damaged their neighborhood relationships.",
        ],
      },
      {
        heading: "First, create the channel",
        paragraphs: [
          "Before fixing anything, become reachable. Post a community phone number on the property and the website, staff it during events with someone empowered to act, and tell the surrounding blocks it exists. This single step changes the dynamic more than any other, because it reroutes frustration away from city complaint lines and toward someone who can actually resolve the issue that night.",
        ],
      },
      {
        heading: "Second, audit the footprint honestly",
        paragraphs: [
          "Stand in the alley during a load-out. Listen from the nearest residential street at 10:30 PM during an outdoor event. Watch where rideshares stage. Most operators have never experienced their own operation from thirty feet behind it, and most are surprised. An honest audit produces a short list of fixes, and the list is usually cheaper than expected: speaker orientation, a scheduling change, one staff assignment.",
        ],
      },
      {
        heading: "Third, fix the loudest thing first",
        paragraphs: [
          "Neighborhood grievance is not evenly distributed — typically one or two issues carry most of the weight. Fix the biggest one visibly and quickly. Early, visible responsiveness buys patience for everything that takes longer, because it tells residents the relationship has changed from broadcast to dialogue.",
        ],
      },
      {
        heading: "Fourth, make commitments in writing",
        paragraphs: [
          "Sound cutoff times, load-out windows, alley rules — write them down and share them. Written commitments feel risky to operators and are in fact the opposite: they convert every future quiet night into visible proof of good faith, and they give the venue's own staff an unambiguous standard to run.",
        ],
      },
      {
        heading: "Fifth, keep showing up",
        paragraphs: [
          "Attend the neighborhood council meeting occasionally. Give notice before the biggest events. Close the loop on complaints. Community relations are a practice, not a project — but the practice is light, and the returns compound. Venues that run this sequence stop appearing in complaint logs and start appearing in sentences that begin with: actually, they've been great about it. In neighborhood terms, there is no higher praise.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
